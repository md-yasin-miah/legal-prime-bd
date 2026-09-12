import Link from "next/link";
import { LandingIcon } from "./landing-icon";
import { practiceAreas } from "@/app/data/landing-content";

export function PracticeAreasSection() {
  return (
    <section
      className="border-b border-outline-variant bg-surface-bright py-24"
      id="practice-areas"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-20">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-label text-label-caps mb-2 block tracking-widest text-primary">
            AREAS OF JURISPRUDENCE
          </span>
          <h2 className="font-headline text-headline-xl mb-4 text-on-surface">
            Focused Legal & Fiscal Disciplines
          </h2>
          <p className="font-body text-body-lg text-secondary">
            We operate across strictly delineated chambers departments, offering
            authoritative trial advocacy, strategic tax optimization, and family
            asset governance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group relative flex flex-col justify-between border border-outline-variant bg-surface-container-lowest p-8 transition-all duration-200 hover:border-primary"
            >
              <div className="absolute left-0 right-0 top-0 h-1 bg-outline-variant transition-colors group-hover:bg-primary-container" />
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-outline-variant bg-surface text-primary transition-colors group-hover:bg-primary group-hover:text-surface-bright">
                    <LandingIcon className="text-2xl" name={area.icon} />
                  </span>
                  <span className="font-label text-label-caps border border-outline-variant bg-surface px-2.5 py-1 text-secondary">
                    {area.department}
                  </span>
                </div>
                <h3 className="font-headline text-headline-lg mb-3 text-on-surface">
                  {area.title}
                </h3>
                <p className="font-body text-body-md mb-6 leading-relaxed text-secondary">
                  {area.description}
                </p>
              </div>

              <div className="mt-4 border-t border-outline-variant pt-4">
                <details className="group/details cursor-pointer">
                  <summary className="font-label text-label-caps flex list-none items-center justify-between text-primary">
                    <span>{area.accordionTitle}</span>
                    <LandingIcon
                      className="text-sm transition-transform group-open/details:rotate-180"
                      name="expand_more"
                    />
                  </summary>
                  <div className="font-body text-body-sm space-y-2 pt-4 text-secondary">
                    {area.details.map((detail) => (
                      <div
                        key={detail.title}
                        className="flex items-start gap-2 border border-outline-variant bg-surface p-3"
                      >
                        <LandingIcon
                          className="mt-0.5 text-sm text-primary"
                          name="check_circle"
                        />
                        <div>
                          <strong>{detail.title}</strong> {detail.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    className="font-label text-label-caps flex items-center gap-1 text-on-surface hover:text-primary"
                    href="#contact"
                  >
                    <span>RETAIN COUNSEL</span>
                    <LandingIcon className="text-sm" name="chevron_right" />
                  </Link>
                  <span className="font-body text-body-sm text-secondary">
                    {area.footerNote}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
