import { LandingIcon } from "./landing-icon";
import { aboutPillars, stats } from "@/app/data/landing-content";

export function AboutSection() {
  return (
    <section
      className="border-b border-outline bg-inverse-surface py-24 text-surface-bright"
      id="about"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-20">
        <div className="mb-16 flex flex-col justify-between border-b border-outline pb-6 md:flex-row md:items-end">
          <div>
            <span className="font-label text-label-caps mb-2 block tracking-widest text-primary-fixed">
              INSTITUTIONAL PEDIGREE
            </span>
            <h2 className="font-headline text-headline-xl text-surface-bright">
              Chambers Profile & Strategic Fortitude
            </h2>
          </div>
          <p className="font-body text-body-md mt-4 max-w-md text-surface-variant md:mt-0">
            Rooted in legal precision and procedural rigor, Chancery & Tax
            Partners Dhaka represents the standard in fiscal advisory, commercial
            dispute settlement, and corporate strategy.
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between border border-outline bg-surface-container-highest/10 p-8 transition-all hover:border-primary-container"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary-container bg-surface-container-lowest/5">
                  <LandingIcon
                    className="text-2xl text-primary-fixed"
                    name={pillar.icon}
                  />
                </div>
                <h3 className="font-headline text-headline-md mb-3 text-surface-bright">
                  {pillar.title}
                </h3>
                <p className="font-body text-body-md mb-6 text-surface-variant">
                  {pillar.description}
                </p>
              </div>
              <ul className="font-body text-body-sm space-y-2 border-t border-outline/50 pt-4 text-surface-variant">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <LandingIcon className="text-xs text-primary-fixed" name="chevron_right" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-primary-container bg-surface-container-lowest/5 p-8 lg:p-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-primary-container pl-6"
              >
                <div className="font-display text-display-lg font-semibold text-primary-container">
                  {stat.value}
                </div>
                <div className="font-label text-label-caps mt-1 tracking-wider text-surface-variant">
                  {stat.label}
                </div>
                <p className="font-body text-body-sm mt-2 text-surface-variant/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
