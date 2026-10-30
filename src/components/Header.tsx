import { useEffect, useRef, useState } from 'react';
import { BUSINESS, NAVIGATION } from '../config';
import { Flower, WhatsApp } from './Icons';

export function Wordmark({ light = false }: { light?: boolean }) {
  return <a className={`wordmark${light ? ' wordmark-light' : ''}`} href="#inicio" aria-label="Dulce Abril, inicio"><Flower /><span>Dulce Abril<span className="wordmark-subtitle">PASTELERÍA CREATIVA</span></span></a>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    NAVIGATION.forEach(item => { const section = document.getElementById(item.id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
      if (event.key === 'Tab') {
        const controls = [trigger.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') || [])].filter(Boolean) as HTMLElement[];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const media = window.matchMedia('(min-width: 960px)');
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      media.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  function closeMenu() { setOpen(false); trigger.current?.focus(); }

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header">
      <div className="container header-inner">
        <Wordmark />
        <nav className="desktop-navigation" aria-label="Navegación principal">
          {NAVIGATION.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'is-active' : ''} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
        </nav>
        <a className="button button-outline header-contact" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />Consultar por WhatsApp</a>
        <button className={`menu-toggle${open ? ' is-open' : ''}`} ref={trigger} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      <div className={`mobile-navigation${open ? ' is-open' : ''}`} id="mobile-navigation" ref={panel} inert={!open}>
        <nav className="container" aria-label="Navegación móvil">
          {NAVIGATION.map((item, index) => <a href={`#${item.id}`} onClick={closeMenu} key={item.id}><span className="menu-number">0{index + 1}</span>{item.label}</a>)}
          <a className="button button-primary" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><WhatsApp />Consultar por WhatsApp</a>
        </nav>
      </div>
    </header>
    {open && <button className="menu-backdrop" onClick={closeMenu} aria-label="Cerrar menú" tabIndex={-1} />}
  </>;
}
