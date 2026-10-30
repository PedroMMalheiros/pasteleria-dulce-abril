import { useEffect, useRef, useState } from 'react';
import { assetUrl } from '../assets';
import { BUSINESS } from '../config';
import { Arrow, Flower, Pin } from './Icons';

export default function Hero() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const lightbox = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!photoOpen) return;
    const dialog = lightbox.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [photoOpen]);

  return <section id="inicio" className="hero" aria-labelledby="hero-heading">
    <div className="container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />Pastelería creativa · Puerto Serrano</p>
        <h1 id="hero-heading">Dulce Abril,<br />un nuevo rincón dulce en <em>Puerto Serrano.</em></h1>
        <p className="hero-description">En nuestra pastelería encontrarás tartas, bollería, galletas decoradas, cupcakes y opciones sin gluten. Tanto si te apetece darte un capricho como si buscas algo dulce para compartir, pásate a conocernos.</p>
        <div className="hero-actions"><a className="button button-primary" href="#nuestros-dulces">Descubre nuestros dulces<Arrow /></a><a className="text-link" href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">Cómo llegar<Arrow /></a></div>
      </div>
      <figure className="hero-figure">
        <Flower className="hero-flower" />
        <button className="photo-frame storefront-trigger" type="button" aria-label="Ampliar foto de nuestra pastelería" aria-haspopup="dialog" onClick={() => setPhotoOpen(true)}>
          <img className="storefront-photo" src={assetUrl('storefront-enhanced.webp')} width="1448" height="1086" fetchPriority="high" alt="Fachada de Pastelería Dulce Abril, con marcos rosas y azulejos blancos y negros en Puerto Serrano" />
          <span className="photo-open-hint" aria-hidden="true"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M14 4h6v6M20 4l-6 6M10 20H4v-6M4 20l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
        </button>
        <figcaption><span><Pin />Calle Lentisco, 19 · Puerto Serrano</span><span className="photo-caption-heart" aria-hidden="true">♡</span></figcaption>
      </figure>
    </div>
    <div className="hero-bottom container"><span>Un nuevo lugar para tus pequeños antojos.</span><a href="#nuestros-dulces" className="scroll-hint" aria-label="Explorar nuestros dulces"><span>Un poquito más abajo</span><Arrow /></a></div>
    <dialog className="photo-lightbox" ref={lightbox} aria-labelledby="photo-lightbox-title" onCancel={() => setPhotoOpen(false)} onClose={() => setPhotoOpen(false)} onClick={event => { if (event.target === event.currentTarget) setPhotoOpen(false); }}>
      <div className="lightbox-toolbar"><p id="photo-lightbox-title">Nuestra pastelería</p><button className="lightbox-close" type="button" aria-label="Cerrar foto ampliada" autoFocus onClick={() => setPhotoOpen(false)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></button></div>
      <img src={assetUrl('storefront-enhanced.webp')} width="1448" height="1086" alt="Vista ampliada de la fachada de Pastelería Dulce Abril" />
      <p className="lightbox-caption"><Pin />Calle Lentisco, 19 · Puerto Serrano, Cádiz</p>
    </dialog>
  </section>;
}
