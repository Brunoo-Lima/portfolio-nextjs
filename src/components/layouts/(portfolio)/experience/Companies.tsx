"use client";

import Image from "next/image";
import { useState } from "react";

interface ICompaniesProps {
  companies: any[];
}

export const Companies = ({ companies }: ICompaniesProps) => {
  const [activeCompany, setActiveCompany] = useState<number>(1);

  return (
    <>
      <div className="flex flex-col">
        {companies
          .map((company, index) => (
            <div
              key={index}
              className={`p-3 cursor-pointer hover:bg-surface transition-colors ${
                activeCompany === index
                  ? "bg-border border-l-4 border-primary"
                  : ""
              }`}
              onClick={() => setActiveCompany(index)}
            >
              <p className="font-medium text-foreground">
                {company.enterprise}
              </p>
              <small className="text-xs text-muted">{company.date}</small>
            </div>
          ))
          .reverse()}
      </div>

      <article className="grow h-full">
        {(() => {
          const company = companies[activeCompany];
          return (
            <>
              <h2 className="text-lg text-primary-end font-secondary">
                {company.area}
              </h2>

              <div className="flex items-start gap-x-4 space-y-4 w-62.5">
                <aside className="flex flex-col gap-y-0.5 h-11 my-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {company.enterprise}
                  </h4>
                  <small className="text-xs  text-foreground">
                    {company.date}
                  </small>
                </aside>

                <figure>
                  <Image
                    src={company.imgURl}
                    alt={company.enterprise}
                    width={32}
                    height={32}
                    className="block size-8 mt-1"
                  />
                </figure>
              </div>
              <p className="text-base text-muted leading-[1.6]">
                {company.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {company.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="block w-max px-2 py-0.5 rounded-lg bg-accent text-sm font-semibold text-background"
                  >
                    {tech.replace(",", " ")}
                  </span>
                ))}
              </div>
            </>
          );
        })()}
      </article>
    </>
  );
};
