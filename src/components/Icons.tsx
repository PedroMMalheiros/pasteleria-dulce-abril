import type { CSSProperties } from 'react';

type IconProps = { className?: string };

export function Arrow({ className = '' }: IconProps) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function WhatsApp({ className = '' }: IconProps) {
  return <svg className={className} width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m8.4 7.5 1.5 2.4-.9 1.1c.7 1.5 1.6 2.4 3.1 3.1l1.1-.9 2.4 1.5c.3.2.3.5.1.8-.6 1-1.4 1.5-2.4 1.2-3.6-1-6.4-3.8-7.1-7.1-.2-1 .3-1.9 1.2-2.4.4-.2.7-.1 1 .3Z" fill="currentColor"/></svg>;
}

export function Pin({ className = '' }: IconProps) {
  return <svg className={className} width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19.2 10.2c0 5-7.2 10.3-7.2 10.3S4.8 15.2 4.8 10.2a7.2 7.2 0 1 1 14.4 0Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

export function Flower({ className = '', style }: IconProps & { style?: CSSProperties }) {
  return <svg className={className} style={style} width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M40 28C20-1 4 22 27 36 1 43 17 68 34 49 32 79 58 76 48 49 72 68 84 42 55 36 81 21 57 0 44 28Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="40" cy="39" r="6" stroke="currentColor" strokeWidth="1.4"/></svg>;
}

export function Tile({ className = '' }: IconProps) {
  return <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M0 0h80v80H0Z" stroke="currentColor" opacity=".4"/><path d="M40 1C28 15 29 27 40 40 51 27 52 15 40 1ZM79 40C65 28 53 29 40 40 53 51 65 52 79 40ZM40 79C52 65 51 53 40 40 29 53 28 65 40 79ZM1 40C15 52 27 51 40 40 27 29 15 28 1 40Z" stroke="currentColor" strokeWidth="1.2"/><path d="M0 0c23 0 23 17 12 12C17 23 0 23 0 0ZM80 0c0 23-17 23-12 12C57 17 57 0 80 0ZM80 80c-23 0-23-17-12-12C63 57 80 57 80 80ZM0 80c0-23 17-23 12-12C23 63 23 80 0 80Z" stroke="currentColor" strokeWidth="1.2"/><circle cx="40" cy="40" r="4" fill="currentColor"/></svg>;
}

export function PastryIllustration({ kind }: { kind: number }) {
  const drawings = [
    <g key="cake"><path d="M28 78h72v10H28zM35 54h58v24H35zM42 31h44v23H42z"/><path d="M35 60c5 7 10 7 15 0 5 7 10 7 15 0 5 7 10 7 15 0 5 7 10 7 13 0M42 37c5 6 10 6 15 0 5 6 10 6 15 0 5 6 10 6 14 0M21 89h86M64 30v-9"/><path d="M64 20c-10-6-7-14 0-9 7-5 10 3 0 9Z" fill="var(--illustration-accent)"/><path d="m24 43 3-5 3 5-3 5ZM103 30v8m-4-4h8"/></g>,
    <g key="croissant"><path d="M32 69c-14 7-17 3-11-10 4-8 9-15 15-20M92 69c14 7 17 3 11-10-4-8-9-15-15-20M36 39c-3-14 10-22 18-12M88 39c3-14-10-22-18-12M54 27c-3-11 19-11 16 0l9 37c-8 12-26 12-34 0Z"/><path d="M36 39c-3 14 2 26 9 25M88 39c3 14-2 26-9 25M36 39l18-12m34 12L70 27M27 49l10 8m60-8-10 8M55 43h14M57 55h13M45 90c13 4 26 4 38 0"/><path d="m19 24 3-5 3 5-3 5ZM102 19v8m-4-4h8"/></g>,
    <g key="slice"><path d="m29 48 57-20 18 28v31H29ZM29 48l75 8M29 63l75 6M29 76l75 6M29 48v39"/><path d="M29 56c5 7 10 7 15 2 5 7 10 7 15 2 5 7 10 7 15 2 5 7 10 7 15 2 5 5 10 5 15 1M22 94h88"/><circle cx="76" cy="33" r="7" fill="var(--illustration-accent)"/><path d="M77 26c0-8 4-11 9-12M21 31v8m-4-4h8M106 26l2-4 2 4-2 4Z"/></g>,
    <g key="cookie"><path d="M63 22c6-4 11 0 13 5 7-2 13 3 13 10 8 1 10 8 7 14 7 5 6 13 0 17 3 7-2 13-9 13-1 8-8 11-15 8-5 7-13 6-17 0-7 3-14-1-14-8-8-1-11-9-7-15-6-5-5-13 1-17-3-8 2-14 9-14 1-8 8-11 15-8Z"/><path d="m47 50 6-3 3 6-6 4Zm28 1 4 3-4 5-4-3Zm-9 20 4 2-2 6-5-2Z" fill="var(--illustration-accent)"/><circle cx="65" cy="40" r="2"/><circle cx="48" cy="71" r="2"/><circle cx="84" cy="71" r="2"/><path d="M22 24v8m-4-4h8M106 43l3-5 3 5-3 5ZM19 82l2-4 2 4-2 4Z"/></g>,
    <g key="free"><path d="M29 56c0 25 14 35 34 35s34-10 34-35ZM24 56h78M63 55V27"/><path d="M63 48c-18 0-23-9-19-17 11-1 19 7 19 17ZM63 38c17 0 23-9 19-17-11-1-19 7-19 17ZM63 29c-13-3-15-13-9-19 9 2 12 10 9 19Z" fill="var(--illustration-accent)"/><path d="M41 95h45M18 32v8m-4-4h8M100 19l3-5 3 5-3 5Z"/></g>,
    <g key="cupcake"><path d="m36 60 9 32h38l9-32ZM33 60h62c0-9-5-14-13-14 2-8-2-13-10-14 2-7-2-12-8-16-1 9-16 9-14 19-9 0-15 6-12 12-6 2-8 7-5 13Z"/><path d="M38 47c14 6 30 5 44-1M50 35c5 4 16 5 22-3M48 67l4 18m11-18v18m15-18-3 18M31 97h65"/><path d="M64 18c-9-6-7-14 0-10 7-4 9 4 0 10Z" fill="var(--illustration-accent)"/><path d="m23 27 3-5 3 5-3 5ZM103 37v8m-4-4h8"/></g>,
  ];
  return <svg className="pastry-illustration" width="128" height="110" viewBox="0 0 128 110" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">{drawings[kind]}</svg>;
}
