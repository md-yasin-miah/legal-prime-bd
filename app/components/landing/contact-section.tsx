import { LandingIcon } from "./landing-icon";
import { ContactForm } from "./contact-form";
import { siteConfig } from "@/app/data/landing-content";

export function ContactSection() {
  return (
    <section
      className="border-b border-outline-variant bg-surface-bright py-24"
      id="contact"
    >
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-20">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <span className="font-label text-label-caps mb-2 block tracking-widest text-primary">
              CHAMBERS ENGAGEMENT
            </span>
            <h2 className="font-headline text-headline-xl mb-6 text-on-surface">
              Schedule a Legal Consultation
            </h2>
            <p className="font-body text-body-md mb-10 leading-relaxed text-secondary">
              Our chambers welcome appointments at our Mirpur DOHS executive
              office or online via secure conference. Submit your matter details
              for preliminary conflict checks and counsel allocation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-outline-variant bg-surface text-primary">
                  <LandingIcon name="location_on" />
                </div>
                <div>
                  <div className="font-label text-label-caps mb-1 text-secondary">
                    CHAMBERS LOCATION
                  </div>
                  <div className="font-body text-body-md font-medium text-on-surface">
                    {siteConfig.address.line1}
                  </div>
                  <div className="font-body text-body-sm mt-0.5 text-secondary">
                    {siteConfig.address.line2}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-outline-variant bg-surface text-primary">
                  <LandingIcon name="call" />
                </div>
                <div>
                  <div className="font-label text-label-caps mb-1 text-secondary">
                    DIRECT TELEPHONE
                  </div>
                  <div className="font-body text-body-md font-medium text-on-surface">
                    {siteConfig.phoneDisplay}
                  </div>
                  <div className="font-body text-body-sm mt-0.5 text-secondary">
                    {siteConfig.hours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-outline-variant bg-surface text-primary">
                  <LandingIcon name="mail" />
                </div>
                <div>
                  <div className="font-label text-label-caps mb-1 text-secondary">
                    CONFIDENTIAL REGISTRY EMAIL
                  </div>
                  <div className="font-body text-body-md font-medium text-on-surface">
                    {siteConfig.email}
                  </div>
                  <div className="font-body text-body-sm mt-0.5 text-secondary">
                    Submissions protected by attorney-client privilege
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border border-outline-variant bg-surface-container p-4">
            <div className="font-label text-label-caps flex items-center gap-2 text-primary">
              <LandingIcon className="text-sm" name="verified_user" />
              <span>PRIVILEGED & CONFIDENTIAL</span>
            </div>
            <p className="font-body text-body-sm mt-1 text-secondary">
              All consultations comply strictly with the Bangladesh Legal
              Practitioners and Bar Council Order 1972 ethical cannons.
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
