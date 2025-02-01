"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState("");
    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        const savedEndTime = localStorage.getItem("cooldownEndTime");
        if (savedEndTime) {
            const endTime = parseInt(savedEndTime, 10);
            const now = Date.now();
            if (endTime > now) {
                setCooldown(Math.ceil((endTime - now) / 1000));
            }
        }
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (cooldown > 0) {
            timer = setInterval(() => {
                setCooldown((prev) => {
                    if (prev <= 1) {
                        localStorage.removeItem("cooldownEndTime");
                        if (timer) clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [cooldown]);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        setMessage("");
        try {
            await emailjs.sendForm("service_767hy4j","template_k6zfmut",formRef.current!,"q4cGSIOxTW1Kic_wD");
            setMessage("Message sent successfully!");
            formRef.current?.reset();
            const endTime = Date.now() + 30000;
            localStorage.setItem("cooldownEndTime", endTime.toString());
            setCooldown(30);
        } catch (error) {
            console.error("Failed to send email:", error);
            setMessage("Failed to send message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 p-6 bg-white rounded-lg dark:bg-background">
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full border p-2 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full border p-2 rounded-md"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                    name="message"
                    required
                    className="w-full border p-2 rounded-md"
                />
            </div>
            <button
                type="submit"
                disabled={isSending || cooldown > 0}
                className={`w-full bg-accent-foreground text-white py-2 rounded-md transition dark:text-background ${
                    isSending || cooldown > 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {isSending ? "Sending..." : cooldown > 0 ? `Wait ${cooldown} sec...` : "Send Message"}
            </button>
            {message && (
                <p className="text-center text-sm mt-2 text-gray-600">
                    {message}
                </p>
            )}
        </form>
    );
}