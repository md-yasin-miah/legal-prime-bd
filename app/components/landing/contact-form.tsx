"use client";

import { FormEvent, useState } from "react";
import { LandingIcon } from "./landing-icon";
import { practiceOptions } from "@/app/data/landing-content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative border border-outline-variant bg-surface-container-lowest p-8 shadow-sm md:p-12 lg:col-span-7">
      <div className="absolute left-0 right-0 top-0 h-1 bg-primary-container" />
      <h3 className="font-headline text-headline-md mb-2 text-on-surface">
        Request Legal or Tax Counsel
      </h3>
      <p className="font-body text-body-sm mb-8 text-secondary">
        Please provide concise specifics of your matter. Our senior clerk will
        respond within 4 business hours.
      </p>

      {submitted ? (
        <div className="border border-primary-container bg-surface p-6">
          <div className="font-label text-label-caps mb-2 flex items-center gap-2 text-primary">
            <LandingIcon className="text-sm" name="check_circle" />
            <span>DOCKET RECEIVED</span>
          </div>
          <p className="font-body text-body-md text-secondary">
            Consultation docket request received. Our senior chambers clerk will
            reach out within 4 business hours.
          </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="font-label text-label-caps mb-2 block text-on-surface">
                FULL NAME / ENTITY REPRESENTATIVE *
              </label>
              <input
                required
                className="font-body text-body-md w-full rounded-none border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-secondary-fixed-dim focus:border-primary focus:ring-0"
                placeholder="e.g. A. K. M. Rahman"
                type="text"
              />
            </div>
            <div>
              <label className="font-label text-label-caps mb-2 block text-on-surface">
                CONTACT PHONE NUMBER *
              </label>
              <input
                required
                className="font-body text-body-md w-full rounded-none border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-secondary-fixed-dim focus:border-primary focus:ring-0"
                placeholder="+880 17XX-XXXXXX"
                type="tel"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="font-label text-label-caps mb-2 block text-on-surface">
                LEGAL / TAX PRACTICE AREA *
              </label>
              <select className="font-body text-body-md w-full rounded-none border border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary focus:ring-0">
                {practiceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-label text-label-caps mb-2 block text-on-surface">
                PREFERRED CONSULTATION DATE
              </label>
              <input
                className="font-body text-body-md w-full rounded-none border border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary focus:ring-0"
                type="date"
              />
            </div>
          </div>

          <div>
            <label className="font-label text-label-caps mb-2 block text-on-surface">
              CONCISE SUMMARY OF MATTER
            </label>
            <textarea
              className="font-body text-body-md w-full rounded-none border border-outline-variant bg-surface px-4 py-3 text-on-surface placeholder:text-secondary-fixed-dim focus:border-primary focus:ring-0"
              placeholder="Summarize statutory notices, dispute nature, or transaction scope..."
              rows={4}
            />
          </div>

          <button
            className="font-label text-label-caps flex w-full items-center justify-center gap-2 border border-primary-container bg-primary py-4 tracking-widest text-on-primary transition-all duration-200 hover:bg-primary-container hover:text-on-primary-container"
            type="submit"
          >
            <span>SUBMIT CONSULTATION DOCKET</span>
            <LandingIcon className="text-base" name="send" />
          </button>
        </form>
      )}
    </div>
  );
}
