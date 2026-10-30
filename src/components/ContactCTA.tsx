import { BUSINESS } from '../config';
import { Arrow, Flower, WhatsApp } from './Icons';

export default function ContactCTA() {
  return <section className="contact-section" aria-labelledby="contact-heading"><div className="container"><div className="contact-cta"><Flower className="contact-flower" /><div><p className="eyebrow">Conversemos</p><h2 id="contact-heading">¿Quieres preguntarnos <br />por algún dulce?</h2><p>Escríbenos por WhatsApp y te informamos sobre nuestros productos y su disponibilidad.</p></div><a className="button button-dark" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />Hablar por WhatsApp<Arrow /></a></div></div></section>;
}
