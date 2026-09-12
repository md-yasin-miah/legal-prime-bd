import Image from "next/image";
import Link from "next/link";
import { LandingIcon } from "./landing-icon";
import { heroContent, siteConfig } from "@/app/data/landing-content";

export function HeroSection() {
  return (
    <section className="relative border-b border-outline-variant bg-surface-bright pb-20 pt-12">
      <div className="mx-auto grid max-w-340 grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        <div className="flex flex-col items-start lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2.5 border border-outline-variant bg-surface px-3.5 py-1.5">
            <span className="h-2 w-2 bg-primary" />
            <span className="font-label text-label-caps text-on-surface">
              {heroContent.badge}
            </span>
          </div>

          <h1 className="mb-6 font-display text-display-lg leading-tight text-on-surface">
            {heroContent.title}
          </h1>

          <p className="mb-8 max-w-2xl font-body text-body-xl leading-relaxed text-secondary">
            {heroContent.subtitle}
          </p>

          <div className="mb-10 flex w-full flex-wrap items-center gap-4 sm:w-auto">
            <Link
              className="font-label text-label-caps flex items-center justify-center gap-3 border border-primary-container bg-primary px-8 py-4 tracking-widest text-on-primary transition-all duration-200 hover:bg-primary-container hover:text-on-primary-container"
              href="#contact"
            >
              <LandingIcon className="text-base" name="calendar_month" />
              <span>Book a Consultation</span>
            </Link>
            <a
              className="font-label text-label-caps group flex items-center justify-center gap-3 border border-outline bg-surface px-8 py-4 tracking-widest text-on-surface transition-all duration-200 hover:border-primary hover:text-primary"
              href={siteConfig.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LandingIcon
                className="text-base text-primary transition-transform group-hover:scale-110"
                name="chat"
              />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="grid w-full grid-cols-3 gap-6 border-t border-outline-variant pt-6">
            {heroContent.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="font-label text-label-caps mb-1 text-secondary">
                  {metric.label}
                </div>
                <div className="font-headline text-headline-sm text-on-surface">
                  {metric.title}
                </div>
                <div className="font-body text-body-sm text-secondary">
                  {metric.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="custom-gold-glow relative border border-outline-variant bg-surface-container-lowest p-2 shadow-xl">
            <div className="relative aspect-[4/5] overflow-hidden bg-inverse-surface">
              <Image
                alt="Executive Managing Partner overlooking Dhaka financial horizon from private law chambers desk"
                className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                src="/landing/hero-partner.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -left-6 max-w-[240px] border border-primary-container bg-inverse-surface p-5 text-surface-bright shadow-2xl">
              <div className="mb-1 flex items-center gap-2">
                <LandingIcon
                  className="text-primary-container"
                  name="verified"
                />
                <span className="font-label text-label-caps tracking-wider text-primary-container">
                  {heroContent.prestigeBadge.label}
                </span>
              </div>
              <div className="font-headline text-headline-md font-semibold text-surface-bright">
                {heroContent.prestigeBadge.title}
              </div>
              <p className="font-body text-body-sm mt-1 text-surface-variant">
                {heroContent.prestigeBadge.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
