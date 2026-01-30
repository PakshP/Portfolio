export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-3/4 items-center px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
            P
          </span>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              Paksh Patel
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-foreground md:flex sm:flex">
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="#about">
            About
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
