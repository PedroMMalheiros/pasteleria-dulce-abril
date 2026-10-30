import { BUSINESS, NAVIGATION } from '../config';
import { Wordmark } from './Header';
import { Arrow, WhatsApp } from './Icons';

export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Wordmark /><p>Pastelería creativa en Puerto Serrano.<br />Un nuevo lugar para tus pequeños antojos.</p></div><nav aria-label="Navegación del pie de página" className="footer-navigation">{NAVIGATION.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav><div className="footer-contact"><address>Calle Lentisco, 19 · Puerto Serrano, Cádiz</address><a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-whatsapp"><WhatsApp />WhatsApp<Arrow /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Pastelería Dulce Abril</span><span>Puerto Serrano, Cádiz<span className="footer-heart" aria-hidden="true">♡</span></span></div></div></footer>;
}

export function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Consultar con Dulce Abril por WhatsApp"><WhatsApp /></a>;
}
