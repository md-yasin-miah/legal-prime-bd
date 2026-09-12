import { LandingIcon } from "./landing-icon";
import { siteConfig } from "@/app/data/landing-content";

export function WhatsAppWidget() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        className="group flex items-center border border-primary-container bg-inverse-surface px-4 py-3 text-surface-bright shadow-2xl transition-all duration-200 hover:bg-primary"
        href={siteConfig.whatsapp}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="relative mr-3 flex items-center justify-center">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary-container" />
          <span className="relative h-3 w-3 rounded-full bg-primary-container" />
        </div>
        <div>
          <div className="font-label text-label-caps text-primary-container transition-colors group-hover:text-surface-bright">
            URGENT BRIEFING
          </div>
          <div className="font-body text-body-sm font-semibold">
            Chat with Senior Counsel
          </div>
        </div>
        <LandingIcon
          className="ml-3 text-xl text-primary-container transition-colors group-hover:text-surface-bright"
          name="chat"
        />
      </a>
    </aside>
  );
}
