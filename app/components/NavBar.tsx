export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-10/12 items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
            P
          </span>
          <div className="leading-tight">
            <p className="text-md font-semibold tracking-tight text-foreground">
              Paksh Patel
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-foreground sm:flex">
          <a className="transition-colors hover:text-accent" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-accent" href="#projects">
            Projects
          </a>
          <a className="transition-colors hover:text-accent" href="#exoerience">
            Experience
          </a>
          <a className="transition-colors hover:text-accent" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
