import Link from "next/link";
import { LandingIcon } from "./landing-icon";
import { articles, counsel, faqs } from "@/app/data/landing-content";

export function InsightsSection() {
  return (
    <section
      className="border-b border-outline-variant bg-surface py-24"
      id="insights"
    >
      <div className="mx-auto max-w-[1360px] space-y-20 px-6 lg:px-20">
        <div>
          <div className="mb-12">
            <span className="font-label text-label-caps mb-2 block tracking-widest text-primary">
              PARTNERS & ADVOCATES
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface">
              Senior Chambers Counsel
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {counsel.map((member) => (
              <div
                key={member.name}
                className="border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:border-primary"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center border border-outline-variant bg-surface-variant">
                  <LandingIcon className="text-3xl text-primary" name={member.icon} />
                </div>
                <h4 className="font-headline text-headline-sm text-on-surface">
                  {member.name}
                </h4>
                <div className="font-label text-label-caps mb-3 mt-1 text-primary">
                  {member.role}
                </div>
                <p className="font-body text-body-sm mb-4 text-secondary">
                  {member.bio}
                </p>
                <div className="font-label text-label-caps text-secondary-fixed-dim">
                  {member.affiliation}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-outline-variant bg-surface-container-lowest p-8">
          <div className="mb-8 flex items-center justify-between border-b border-outline-variant pb-4">
            <div>
              <span className="font-label text-label-caps mb-1 block tracking-widest text-primary">
                GAZETTE BRIEFS & EDITORIALS
              </span>
              <h3 className="font-headline text-headline-md text-on-surface">
                Legal & Statutory Tax Insights
              </h3>
            </div>
            <span className="font-label text-label-caps hidden border border-primary-container bg-surface px-3 py-1 text-primary sm:inline-block">
              OCTOBER 2024 UPDATE
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="border border-outline-variant bg-surface p-5 transition-colors hover:border-primary"
              >
                <span className="font-label text-label-caps text-primary">
                  {article.category}
                </span>
                <h4 className="font-headline text-headline-sm mb-2 mt-2 text-on-surface">
                  {article.title}
                </h4>
                <p className="font-body text-body-sm mb-4 text-secondary">
                  {article.excerpt}
                </p>
                <Link
                  className="font-label text-label-caps flex items-center gap-1 text-primary hover:underline"
                  href="#contact"
                >
                  <span>{article.cta}</span>
                  <LandingIcon className="text-sm" name="arrow_forward" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div id="faq">
          <div className="mb-10 max-w-2xl">
            <span className="font-label text-label-caps mb-2 block tracking-widest text-primary">
              PROCEDURAL CLARITY
            </span>
            <h2 className="font-headline text-headline-xl text-on-surface">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-body-md mt-2 text-secondary">
              Authoritative guidance regarding e-TIN requirements, company
              formation timelines, and court retainer engagements.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-outline-variant bg-surface-container-lowest"
              >
                <details className="group cursor-pointer p-6">
                  <summary className="font-headline text-headline-sm flex list-none items-center justify-between text-on-surface">
                    <span>{faq.question}</span>
                    <LandingIcon
                      className="text-primary transition-transform group-open:rotate-180"
                      name="expand_more"
                    />
                  </summary>
                  <div className="font-body text-body-md mt-4 border-t border-outline-variant pt-4 leading-relaxed text-secondary">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
