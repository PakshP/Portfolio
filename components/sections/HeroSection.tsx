import Link from "next/link";
import { motion } from "framer-motion";
import { LuContact, LuDownload } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { classNames } from "@/lib/theme";

export default function HeroSection() {
  return (
    <section id="about" className={`border-b ${classNames.sectionBorder} py-16 sm:py-24`}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs uppercase tracking-[0.24em] text-[#BF3A2B]"
      >
        Software Developer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-[#2A3B55] sm:text-6xl"
      >
        Paksh Patel builds thoughtful products where technical depth meets clear design.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-base leading-8 text-[#4E5F7A] sm:text-lg"
      >
        Focused on full-stack engineering, documentation quality, and sustainable development workflows.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <Button asChild className={classNames.buttonPrimary}>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume <LuDownload />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={classNames.buttonOutline}
        >
          <Link href="#contact">
            Contact <LuContact />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

