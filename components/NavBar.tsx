import { motion } from "framer-motion";
import { colors } from "@/lib/theme";

export default function NavBar() {
  return (
    <nav className={`sticky top-0 z-50 w-full border-b border-[${colors.border}] bg-white/90 backdrop-blur`}>
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-[${colors.accent}] text-lg font-bold text-white`}
            whileHover={{ scale: 1.05 }}
          >
            P
          </motion.span>
          <div className="leading-tight">
            <p className={`text-lg font-semibold tracking-tight text-[${colors.primary}]`}>
              Paksh Patel
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium xl:flex">
          <a className={`text-[${colors.primaryLight}] transition-colors hover:text-[${colors.secondary}]`} href="#about">
            About
          </a>
          <a className={`text-[${colors.primaryLight}] transition-colors hover:text-[${colors.secondary}]`} href="#projects">
            Projects
          </a>
          <a className={`text-[${colors.primaryLight}] transition-colors hover:text-[${colors.secondary}]`} href="#coursework">
            Coursework
          </a>
          <a className={`text-[${colors.primaryLight}] transition-colors hover:text-[${colors.secondary}]`} href="#experience">
            Journey
          </a>
          <a className={`text-[${colors.primaryLight}] transition-colors hover:text-[${colors.secondary}]`} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
