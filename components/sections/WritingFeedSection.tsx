import { writingEntries } from "@/lib/writing";

export default function WritingFeedSection() {
  return (
    <section id="writing" className="border-b border-zinc-900 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-amber-400">Writing and Research</p>
      <h2 className="mt-3 font-serif text-3xl text-zinc-100 sm:text-5xl">Curated Feed</h2>

      <div className="mt-10 divide-y divide-zinc-900">
        {writingEntries.map((entry) => (
          <article key={entry.title} className="grid gap-4 py-7 sm:grid-cols-[7rem_8rem_1fr] sm:items-start">
            <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{entry.year}</p>
            <p className="text-xs uppercase tracking-[0.15em] text-amber-400">{entry.type}</p>
            <div>
              <h3 className="font-serif text-2xl text-zinc-100">{entry.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{entry.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

