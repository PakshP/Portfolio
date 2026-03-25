import { motion } from "framer-motion";
import { FadeInUp, SectionHeader } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";

export default function ContactSection() {
  return (
    <section id="contact" className={`border-t ${classNames.sectionBorder} ${classNames.sectionPy}`}>
      <SectionHeader
        label="Contact"
        title="Let us connect"
        description="Open to internships, freelance collaborations, and software opportunities."
      />

      <FadeInUp delay={0.3} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Email", value: "paksh@example.com" },
          { label: "LinkedIn", value: "linkedin.com/in/pakshpatel" },
          { label: "Location", value: "United States" },
        ].map((item, idx) => (
          <motion.div
            key={item.label}
            className={`rounded-xl border border-[#D7DCE5] bg-white p-4 ${idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-xs uppercase tracking-[0.15em] text-[#BF3A2B]">{item.label}</p>
            <p className="mt-2 text-sm text-[#2A3B55]">{item.value}</p>
          </motion.div>
        ))}
      </FadeInUp>
    </section>
  );
}

