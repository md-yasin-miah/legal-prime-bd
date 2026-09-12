import Link from "next/link";
import { LandingIcon } from "./landing-icon";
import { navLinks, siteConfig } from "@/app/data/landing-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-bright shadow-sm">
      <div className="mx-auto flex w-full max-w-340 items-center justify-between px-6 py-4">
        <Link className="group flex items-center gap-3" href="/">
          <div className="flex h-10 w-10 items-center justify-center border border-primary-container bg-inverse-surface text-primary-container transition-colors group-hover:bg-primary">
            <LandingIcon
              className="text-primary-container group-hover:text-surface-bright"
              name="balance"
            />
          </div>
          <div>
            <span className="block font-headline text-headline-sm font-semibold leading-tight tracking-wider text-on-surface">
              {siteConfig.name}
            </span>
            <span className="font-label text-label-caps block tracking-widest text-primary">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              className={`font-label text-label-caps transition-colors duration-150 ${
                index === 0
                  ? "border-b-2 border-primary pb-1 font-semibold text-primary"
                  : "text-secondary hover:text-primary"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="font-label text-label-caps hidden items-center gap-2 border border-outline-variant px-3 py-2 text-secondary transition-colors hover:text-primary xl:flex"
            href={`tel:${siteConfig.phone}`}
          >
            <LandingIcon className="text-primary" name="call" />
            <span>Emergency Hotline</span>
          </a>
          <Link
            className="font-label text-label-caps flex items-center gap-2 border border-primary bg-primary-container px-5 py-2.5 text-on-primary-container shadow-sm transition-all duration-200 hover:bg-tertiary-fixed"
            href="#contact"
          >
            <span>Book Consultation</span>
            <LandingIcon className="text-sm" name="arrow_forward" />
          </Link>
        </div>
      </div>
    </header>
  );
}
