'use client';

import Image from 'next/image';
import { useState } from 'react';

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
              className={`p-3 cursor-pointer hover:bg-gray-800 transition-colors ${
                activeCompany === index
                  ? 'bg-gray-800 border-l-4 border-second-green'
                  : ''
              }`}
              onClick={() => setActiveCompany(index)}
            >
              <div className="font-medium text-primary-white">
                {company.enterprise}
              </div>
              <div className="text-xs text-second-gray">{company.date}</div>
            </div>
          ))
          .reverse()}
      </div>

      <article className="flex-grow h-full">
        {(() => {
          const company = companies[activeCompany];

          return (
            <>
              <h2 className="text-xl text-second-green">{company.area}</h2>

              <div className="flex items-start gap-x-4 space-y-4 w-[250px]">
                <aside className="flex flex-col gap-y-0.5 h-11 my-2">
                  <h4 className="text-lg font-semibold text-primary-white">
                    {company.enterprise}
                  </h4>
                  <small className="text-xs font-light text-primary-white">
                    {company.date}
                  </small>
                </aside>

                <figure>
                  <Image
                    src={company.imgURl}
                    alt={company.enterprise}
                    width={40}
                    height={40}
                    className="block w-10 h-10 -mt-1"
                  />
                </figure>
              </div>
              <p className="text-base text-second-gray leading-snug">
                {company.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {company.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="block w-max px-2 py-0.5 rounded-lg bg-primary-green text-sm font-semibold text-primary-black"
                  >
                    {tech.replace(',', ' ')}
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
