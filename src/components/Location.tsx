import { BUSINESS } from '../config';
import { Arrow, Pin, Tile, WhatsApp } from './Icons';

export default function Location() {
  return <section id="donde-estamos" className="location section" aria-labelledby="location-heading">
    <div className="container location-layout">
      <div className="location-copy"><p className="eyebrow">Dónde estamos</p><h2 id="location-heading">Tu próxima<br />parada dulce está<br /><em>en Puerto Serrano.</em></h2><p>Nos encontrarás en la calle Lentisco, 19, en Puerto Serrano (Cádiz). Consulta cómo llegar y ven a visitarnos.</p></div>
      <div className="location-card"><div className="location-card-top"><span className="location-icon"><Pin /></span><span className="location-card-label">DULCE ABRIL</span><span className="location-card-heart" aria-hidden="true">♡</span></div><address><strong>Calle Lentisco, 19</strong><span>11659 Puerto Serrano, Cádiz</span></address><a className="button button-primary" href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">Cómo llegar<Arrow /></a><a className="location-whatsapp" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsApp />Consultar por WhatsApp</a><div className="tile-strip" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <Tile key={index} />)}</div></div>
    </div>
  </section>;
}
