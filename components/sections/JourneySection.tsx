import { motion } from "framer-motion";
import { timelineEvents } from "@/lib/timeline";
import { FadeInUp, SectionHeader } from "@/components/ui/AnimatedComponents";
import { classNames } from "@/lib/theme";

export default function JourneySection() {
  return (
    <section id="experience" className={`border-b ${classNames.sectionBorder} ${classNames.sectionPy}`}>
      <SectionHeader
        label="The Journey"
        title="Education and Experience"
        description="Key milestones and roles that shaped my technical and professional growth."
      />

      <FadeInUp delay={0.3} className="relative mt-10 pl-7 sm:pl-10">
        <span className={classNames.timelineAxis} aria-hidden />
        <div className="space-y-10">
          {timelineEvents.map((event) => (
            <motion.article
              key={`${event.period}-${event.title}`}
              className="relative"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className={classNames.timelineNode} aria-hidden />
              <p className={classNames.timelineLabel}>{event.period}</p>
              <h3 className={classNames.timelineTitle}>{event.title}</h3>
              <p className={classNames.timelineDescription}>{event.organization}</p>
              <p className="mt-3 text-sm leading-7 text-[#4E5F7A]">{event.description}</p>
              {event.highlight ? (
                <p className="mt-3 inline-flex rounded-full border border-[#D7DCE5] bg-white px-3 py-1 text-xs font-medium text-[#BF3A2B] transition-colors hover:border-[#BF3A2B]">
                  {event.highlight}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </FadeInUp>
    </section>
  );
}

