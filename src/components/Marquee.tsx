"use client";

import React from "react";

const logos = [
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 180 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ height: "22px", width: "auto" }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180ZM147.747 137.746L98.5445 74.4539L94.6198 69.4589V124.636H83.829V55.364H94.6198L136.953 109.84V55.364H147.747V137.746ZM94.6198 124.636H105.411V83.1895L94.6198 69.4589V124.636Z" />
      </svg>
    )
  },
  {
    name: "Viem",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  {
    name: "Wagmi",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </svg>
    )
  },
  {
    name: "Supabase",
    svg: (
      <svg viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ height: "22px", width: "auto" }}>
        <path d="M124.1 14.8c.8-1.5 2.7-2 4.2-1.2l49.4 28.5c1.5.8 2 2.7 1.2 4.2L124.7 141.2c-.8 1.5-2.7 2-4.2 1.2L111 136.8c-1.5-.8-2-2.7-1.2-4.2L124.1 14.8zM67.9 177.2c-.8 1.5-2.7 2-4.2 1.2L14.3 149.9c-1.5-.8-2-2.7-1.2-4.2L67.3 50.8c.8-1.5 2.7-2 4.2-1.2l9.5 5.6c1.5.8 2 2.7 1.2 4.2L67.9 177.2z" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  {
    name: "Hardhat",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      </svg>
    )
  },
  {
    name: "ERC-20",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    )
  },
  {
    name: "ERC-721",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    )
  },
  {
    name: "Web3 Integration",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: "20px", width: "auto" }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  }
];

export default function Marquee() {
  // Duplicate arrays to facilitate standard infinite scrolling loop width
  const duplicateLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="marquee-container" style={{ margin: "2rem 0 4rem 0" }}>
      <div className="marquee-track">
        {duplicateLogos.map((logo, index) => (
          <div key={index} className="marquee-item">
            {logo.svg}
            <span className="marquee-label">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
