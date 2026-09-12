import Link from "next/link";
import {
  footerComplianceLinks,
  footerPracticeLinks,
  siteConfig,
} from "@/app/data/landing-content";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-inverse-surface text-surface-variant">
      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 px-6 py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-10 border-b border-outline pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="font-headline text-headline-md mb-4 font-semibold tracking-wide text-primary-fixed">
              {siteConfig.name}
            </div>
            <p className="font-body text-body-md mb-6 max-w-sm text-surface-variant">
              An established premier chambers delivering statutory counsel, tax
              dispute resolution, and high-court trial advocacy to Bangladesh&apos;s
              leading enterprises and private families.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-label text-label-caps border border-outline bg-surface-container-highest/10 px-2.5 py-1 text-primary-fixed">
                SUPREME COURT BAR
              </span>
              <span className="font-label text-label-caps border border-outline bg-surface-container-highest/10 px-2.5 py-1 text-primary-fixed">
                NBR ITP REGULATED
              </span>
            </div>
          </div>

          <div>
            <div className="font-label text-label-caps mb-4 tracking-wider text-surface-bright">
              PRACTICE AREAS
            </div>
            <ul className="font-body text-body-sm space-y-2">
              {footerPracticeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="block py-1 text-secondary-fixed-dim transition-colors hover:text-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-fixed"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-label text-label-caps mb-4 tracking-wider text-surface-bright">
              COMPLIANCE & ETHICS
            </div>
            <ul className="font-body text-body-sm space-y-2">
              {footerComplianceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="block py-1 text-secondary-fixed-dim transition-colors hover:text-surface-bright focus:outline-none focus:ring-1 focus:ring-primary-fixed"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-label text-label-caps mb-4 tracking-wider text-surface-bright">
              REGISTRY DESK
            </div>
            <p className="font-body text-body-sm mb-2 text-surface-variant">
              Mirpur DOHS, Dhaka 1216
            </p>
            <p className="font-body text-body-sm mb-4 text-surface-variant">
              Metro Rail Pillar 194-195
            </p>
            <div className="font-label text-label-caps mb-1 text-primary-fixed">
              CALL COUNSEL
            </div>
            <p className="font-body text-body-sm text-surface-bright">
              {siteConfig.phoneDisplay.split(" / ")[0]}
            </p>
          </div>
        </div>

        <div className="font-body text-body-sm flex flex-col items-center justify-between gap-4 text-secondary-fixed-dim md:flex-row">
          <div>
            © 2025 {siteConfig.name}. Supreme Court Bar & NBR Regulated.
            Mirpur DOHS, Dhaka, Bangladesh. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link className="transition-colors hover:text-surface-bright" href="#">
              Supreme Court Bar Enrolled
            </Link>
            <span>•</span>
            <Link className="transition-colors hover:text-surface-bright" href="#">
              Dhaka Taxes Bar Affiliated
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
