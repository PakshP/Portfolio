"use client";

import { motion } from "framer-motion";

import { FadeInUp } from "@/components/ui/AnimatedComponents";
import { colors } from "@/lib/theme";

export default function Footer() {
  return (
    <footer className="border-t border-[#D7DCE5] py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <FadeInUp className="flex-1">
          <p className={`text-sm font-semibold text-[${colors.primary}]`}>Thanks for visiting.</p>
          <p className={`mt-2 text-xs text-[${colors.primaryLightest}]`}>Building practical, human-centered software.</p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="flex-1">
          <p className={`text-xs uppercase tracking-[0.18em] text-[${colors.secondary}]`}>Quick Links</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#2A3B55]">
            {["About", "Projects", "Coursework", "Journey", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`transition-colors hover:text-[${colors.secondary}]`}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2} className="flex-1">
          <p className={`text-xs uppercase tracking-[0.18em] text-[${colors.secondary}]`}>Contact</p>
          <p className={`mt-2 text-xs text-[${colors.primaryLightest}]`}>paksh@example.com</p>
          <p className={`text-xs text-[${colors.primaryLightest}]`}>linkedin.com/in/pakshpatel</p>
        </FadeInUp>
      </div>
    </footer>
  );
}

