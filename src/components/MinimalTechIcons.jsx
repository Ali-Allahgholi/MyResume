import React from 'react';

export const MinimalTechIcons = {
  React: (props) => (
    <svg className="w-5 h-5 text-[#61dafb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.3" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  ),

  TypeScript: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="3" y="3" width="42" height="42" rx="11" stroke="#38bdf8" strokeWidth="3" fill="rgba(56, 189, 248, 0.12)" />
      <g transform="translate(-1.5, -4.5)">
        <path fill="#38bdf8" d="M29.5 35.8c.8 1.4 2.3 2.4 4.5 2.4 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.3-3.6-3.3l-1.2-.5c-3.5-1.5-5.8-3.4-5.8-7.3 0-3.7 2.9-6.5 7.2-6.5 3.2 0 5.3 1.2 6.7 3.8l-3.5 2.3c-.7-1.4-1.8-2-3.3-2-1.4 0-2.4.9-2.4 2.1 0 1.4 1 2 3.4 3l1.3.6c4.1 1.7 6.4 3.6 6.4 7.8 0 4.4-3.5 6.9-8.2 6.9-4.7 0-7.4-2.3-8.7-5.1l4-2.4zM9.5 22.2h6v18.4h4.8V22.2h6V18.1H9.5v4.1z" />
      </g>
    </svg>
  ),

  JavaScript: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="3" y="3" width="42" height="42" rx="11" stroke="#f7df1e" strokeWidth="3" fill="rgba(247, 223, 30, 0.12)" />
      <g transform="translate(-1.5, -4.5)">
        <path fill="#f7df1e" d="M28.5 35.8c.8 1.4 2.3 2.4 4.5 2.4 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.3-3.6-3.3l-1.2-.5c-3.5-1.5-5.8-3.4-5.8-7.3 0-3.7 2.9-6.5 7.2-6.5 3.2 0 5.3 1.2 6.7 3.8l-3.5 2.3c-.7-1.4-1.8-2-3.3-2-1.4 0-2.4.9-2.4 2.1 0 1.4 1 2 3.4 3l1.3.6c4.1 1.7 6.4 3.6 6.4 7.8 0 4.4-3.5 6.9-8.2 6.9-4.7 0-7.4-2.3-8.7-5.1l4-2.4zM16.3 35.5c.6 1.1 1.3 1.9 2.6 1.9 1.2 0 1.9-.5 1.9-2.1V18.5H26v16.9c0 4.1-2.4 6.2-6.2 6.2-3.3 0-5.4-1.7-6.5-4l4-2.1z" />
      </g>
    </svg>
  ),

  HTML: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 3l1.6 15.5L12 21l6.4-2.5L20 3H4z" stroke="#e34f26" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(227, 79, 38, 0.08)" />
      <path d="M12 6.5H8l.5 4.5h3.5M12 14.5l-2.2-.6-.2-1.9H7.5l.3 3.5 4.2 1.3M12 6.5h4l-.4 4.5h-3.6M12 14.5v3.3l4.2-1.3.4-4.5h-4.6" stroke="#e34f26" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  CSS: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 3l1.6 15.5L12 21l6.4-2.5L20 3H4z" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(56, 189, 248, 0.08)" />
      <path d="M12 6.5H8l.4 4h3.6M12 14.5l-2.2-.6-.2-1.9H7.5l.3 3.5 4.2 1.3M12 6.5h4l-.4 4h-3.6M12 14.5v3.3l4.2-1.3.4-4.2h-4.6" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Tailwind: (props) => (
    <svg className="w-5 h-5 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
    </svg>
  ),

  Bootstrap: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="3" y="3" width="42" height="42" rx="11" stroke="#a855f7" strokeWidth="3" fill="rgba(168, 85, 247, 0.12)" />
      <path fill="#a855f7" d="M17 14h9.2c3.2 0 5.7.8 7.3 2.3 1.5 1.4 2.3 3.5 2.3 5.8 0 1.7-.5 3.2-1.4 4.3-1 1.2-2.5 1.9-4.1 2.2 1.9.5 3.4 1.4 4.6 2.7 1.2 1.4 1.8 3.2 1.8 5.3 0 2.5-.8 4.7-2.5 6.3-1.6 1.7-4 2.5-7.6 2.5H17V14zm6 5v7.2h3.5c1.6 0 2.8-.4 3.7-1 1-.8 1.5-1.8 1.5-3.1 0-2.1-1.5-3.1-4.3-3.1H23zm0 11.8v8.6h4.5c1.8 0 3-.2 4-1 1-.8 1.5-2 1.5-3.6 0-1.5-.5-2.6-1.5-3.3-1-.6-2.2-.7-4.3-.7H23z" />
    </svg>
  ),

  Alpine: (props) => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M19.8 14.7l-4.5-4.5 4.5-4.5 3.4 3.4-3.4 5.6z" fill="#38bdf8" />
      <path d="M7.7 8.3L13.8 14.4l-6.1 6.1-6.9-6.9 6.9-5.3z" fill="#0284c7" />
      <path d="M13.8 14.4l-6.1-6.1 6.1-6.1 6.1 6.1-6.1 6.1z" fill="#7dd3fc" />
    </svg>
  ),

  Git: (props) => (
    <svg className="w-5 h-5 text-[#f43f5e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" transform="rotate(45 12 12)" stroke="currentColor" fill="rgba(244, 63, 94, 0.08)" />
      <circle cx="12" cy="8" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 9.6v4.8M12 12h2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
};
