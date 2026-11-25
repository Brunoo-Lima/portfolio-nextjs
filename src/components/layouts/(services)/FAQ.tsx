import { faqs } from "@/mocks/faqs";

export const FAQ = () => {
  return (
    <section className="border-t border-white/10 bg-[#0a0d0c] py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-4 font-secondary text-xs uppercase tracking-[0.24em] text-second-green">
              05 / Antes de começar
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Dúvidas
            </h2>
          </div>
          <div className="w-full">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group/faq border-b border-white/10 first:border-t"
              >
                <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-5 text-base font-medium marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-lg font-light text-second-green transition group-open/faq:rotate-45 group-open/faq:border-second-green/50"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-white/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
