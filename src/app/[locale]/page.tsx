'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import JobCard from '@/components/jobs/JobCard';
import Terminal from '@/components/terminal/Terminal';
import { jobs } from '@/data/jobs';

export default function HomePage() {
  const t = useTranslations('Hero');
  const tExp = useTranslations('Experience');
  const tContact = useTranslations('Contact');
  const tNav = useTranslations('Nav');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Header />

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-1/4 cyber-orb"></div>
      <div
        className="absolute top-1/2 right-1/4 cyber-orb"
        style={{
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 100%)',
        }}
      ></div>

      <main className="container mx-auto px-4 py-12 md:py-24 relative z-10 flex flex-col gap-24">
        {/* HERO SECTION */}
        <section
          id="about"
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 pt-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2 animate-pulse">
            <span>✨ Available for remote work / contract</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.18] pb-2 bg-gradient-to-r from-white via-gray-100 to-gray-500 bg-clip-text text-transparent">
            {t('title')}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            {t('subtitle')}
          </p>

          <p className="text-sm md:text-base text-gray-500 max-w-2xl italic">
            🚀 {t('aiFocus')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              {t('cta')}
            </a>

            {/* Download Curriculum Button */}
            <a
              href="/Curriculum_Ricardo_Fedrigo.pdf"
              download="Curriculum_Ricardo_Fedrigo.pdf"
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t('download')}
            </a>
          </div>
        </section>

        {/* INTERACTIVE TERMINAL */}
        <section className="relative max-w-4xl w-full mx-auto text-center">
          <Terminal />
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {tExp('title')}
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="max-w-2xl mx-auto w-full text-center py-12"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {tContact('title')}
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              {tContact('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ricardo.fedrigo1995@gmail.com"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200"
              >
                {tContact('email')}
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-fedrigo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg transition-all duration-200"
              >
                {tNav('linkedin')}
              </a>
              <a
                href="https://github.com/RicardoFedrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg transition-all duration-200"
              >
                {tNav('github')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600 border-t border-gray-900 text-xs font-mono">
        <div>
          © {new Date().getFullYear()} Ricardo Fedrigo. Powered by Next.js &
          Tailwind.
        </div>
      </footer>
    </div>
  );
}
