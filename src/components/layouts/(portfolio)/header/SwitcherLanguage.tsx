"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export const SwitcherLanguage = () => {
  const [isPending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (language: Locale) => {
    if (locale === language) return;

    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

  return (
    <div className="flex flex-col gap-y-1">
      <button
        disabled={isPending}
        type="button"
        className={`hover:cursor-pointer transition duration-300 rounded-full p-0.5 h-5 w-5 switcher-language  ${
          locale === "pt-br" && "transform scale-125"
        }`}
        title={locale === "pt-br" ? "Português" : "Portuguese"}
        onClick={() => handleChangeLanguage("pt-br")}
      >
        <Image src="/icons/pt-br.webp" alt="pt-br" width={24} height={24} />
      </button>
      <button
        type="button"
        disabled={isPending}
        className={`hover:cursor-pointer transition duration-300 rounded-full p-0.5 h-5 w-5 switcher-language ${
          locale === "en" && "transform scale-125"
        }`}
        title={locale === "en" ? "English" : "Inglês"}
        onClick={() => handleChangeLanguage("en")}
      >
        <Image src="/icons/en-us.webp" alt="en-us" width={24} height={24} />
      </button>
    </div>
  );
};
