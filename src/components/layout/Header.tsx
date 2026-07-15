'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'pt' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="sticky top-0 w-full px-4 py-4 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 text-white flex justify-between items-center z-50 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/39976915?v=4"
            alt="Ricardo Fedrigo"
            className="relative w-10 h-10 rounded-full border border-gray-700 object-cover"
          />
        </div>
        <span className="text-lg font-bold leading-normal pb-0.5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hidden sm:inline-block">
          Ricardo Fedrigo
        </span>
      </div>

      <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium">
        <a
          href="#about"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          {locale === 'en' ? 'About' : 'Sobre'}
        </a>
        <a
          href="#experience"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          {locale === 'en' ? 'Experience' : 'Experiência'}
        </a>
        <a
          href="#contact"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
        >
          {locale === 'en' ? 'Contact' : 'Contato'}
        </a>

        <div className="h-4 w-[1px] bg-gray-800 hidden sm:block"></div>

        <button
          onClick={toggleLanguage}
          className="px-3 py-1 bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-md text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1.5"
        >
          <span>{locale === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
        </button>
      </nav>
    </header>
  );
}
