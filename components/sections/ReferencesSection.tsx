import { referenceGroups } from "@/lib/references";

export default function ReferencesSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-amber-400">References</p>
      <h2 className="mt-3 font-serif text-3xl text-zinc-100 sm:text-5xl">Areas of Expertise</h2>

      <div className="mt-10 space-y-4">
        {referenceGroups.map((group) => (
          <details key={group.title} className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{group.description}</p>
              </div>
              <span className="text-amber-400 transition group-open:rotate-45">+</span>
            </summary>
            <ul className="mt-4 space-y-2 border-t border-zinc-800 pt-4 text-sm text-zinc-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}

