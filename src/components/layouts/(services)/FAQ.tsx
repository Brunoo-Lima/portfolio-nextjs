import { faqs } from "@/mocks/faqs";

export const FAQ = () => {
  return (
    <section className="py-20 sm:overflow-hidden container mx-auto md:px-12 px-8">
      <div className="flex flex-wrap gap-6 justify-between">
        <h2 className="text-3xl font-secondary">Dúvidas</h2>

        <div className="max-w-xl w-full">
          {faqs.map((faq) => (
            <details className="group/faq border-b border-gray-800/80">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 text-base">
                <p className="">{faq.question}</p>

                <span
                  aria-hidden="true"
                  className="grid size-5 place-items-center text-lg font-light"
                >
                  <span className="group-open/faq:hidden">+</span>
                  <span className="hidden group-open/faq:block">−</span>
                </span>
              </summary>

              <p className="mb-0 pb-5 pr-7 text-sm leading-[1.6]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
