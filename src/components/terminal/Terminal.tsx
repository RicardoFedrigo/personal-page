'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface HistoryItem {
  command: string;
  output: string;
}

export default function Terminal() {
  const t = useTranslations('Terminal');
  const [input, setInput] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'systeminfo',
      output: `${t('welcome')}\n${t('help')}`,
    },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll only the terminal's inner container to the bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, isCollapsed]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output = '';
    switch (cmd) {
      case 'help':
        output = t('help');
        break;
      case 'skills':
        output = t('skills');
        break;
      case 'contact':
        output = t('contact');
        break;
      case 'experience':
        output =
          'CNA+ (2025-Present) | Mutant (2024-2025) | Konatus (2023-2024) | Objective (2022-2023) | Tecnospeed (2021-2022)';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="terminal-window rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-950/95 text-base font-mono max-w-4xl mx-auto my-8 transition-all duration-300">
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-4 bg-gray-900 border-b border-gray-800 cursor-pointer select-none"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-2.5">
          {/* Mock OSX Buttons with actual functionality */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            title="Reset/Clear"
            className="w-3.5 h-3.5 rounded-full bg-red-500/90 hover:bg-red-400 transition-colors"
          ></button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsCollapsed(true);
            }}
            title="Minimize"
            className="w-3.5 h-3.5 rounded-full bg-yellow-500/90 hover:bg-yellow-400 transition-colors"
          ></button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsCollapsed(false);
            }}
            title="Expand"
            className="w-3.5 h-3.5 rounded-full bg-green-500/90 hover:bg-green-400 transition-colors"
          ></button>
        </div>

        <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
          {t('title')} {isCollapsed ? '(Collapsed)' : ''}
        </span>

        <button
          type="button"
          className="text-gray-500 hover:text-white transition-colors"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0' : 'max-h-[500px]'}`}
      >
        {/* Output body */}
        <div
          ref={containerRef}
          className="p-6 h-96 overflow-y-auto flex flex-col gap-4 text-left scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
        >
          {history.map((item, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-blue-400 font-semibold">
                <span className="text-gray-500">ricardo@fedrigo:~$</span>
                <span>{item.command}</span>
              </div>
              <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {item.output}
              </pre>
            </div>
          ))}
        </div>

        {/* Input row */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-3 px-6 py-4 bg-gray-900/55 border-t border-gray-900"
        >
          <span className="text-gray-500 font-extrabold select-none">
            ricardo@fedrigo:~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('placeholder')}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 placeholder-gray-600 font-mono text-base"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
