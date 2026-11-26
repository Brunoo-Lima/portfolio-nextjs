import { faqs } from "@/mocks/faqs";

import { ContactCTA } from "./ContactCTA";

export const FAQ = () => {
  return (
    <section className="py-20 mb-48 sm:overflow-hidden bg-card static  z-10">
      <div className="container mx-auto md:px-12 px-8 md:mb-40 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 justify-between">
          <h2 className="text-4xl md:text-5xl leading-[1.03] font-service-secondary">
            Dúvidas
          </h2>

          <div className="w-full">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group/faq border-b border-border first:border-t"
              >
                <summary className="flex min-h-19 cursor-pointer list-none items-center justify-between gap-5 text-base font-medium marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-foreground/15 text-lg font-light text-primary-hover transition group-open/faq:rotate-45 group-open/faq:border-primary-hover"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <ContactCTA />
    </section>
  );
};
