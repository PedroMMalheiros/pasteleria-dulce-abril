import { assetUrl } from '../assets';
import { Arrow, Flower } from './Icons';

export default function About() {
  return <section id="conocenos" className="about section" aria-labelledby="about-heading">
    <div className="container about-layout">
      <div className="brand-art"><span className="brand-art-label">Un poquito de nuestro mundo</span><div className="brand-art-image"><img src={assetUrl('logo.webp')} width="683" height="616" loading="lazy" alt="Logotipo original de Dulce Abril, rodeado de ilustraciones de pasteles y dulces" /></div><Flower className="brand-art-flower" /><span className="brand-art-signoff">Dulce Abril · Puerto Serrano</span></div>
      <div className="about-copy"><p className="eyebrow">Conócenos</p><h2 id="about-heading">Un rincón<br />muy dulce en<br /><em>Puerto Serrano.</em></h2><p>Dulce Abril es una pastelería donde encontrarás desde algo rico para acompañar el café hasta tartas y otros dulces para compartir en una ocasión especial.</p><p>Estamos en la calle Lentisco, 19. Si todavía no nos conoces, ¡pásate a vernos!</p><a className="text-link" href="#donde-estamos">Ven a visitarnos<Arrow /></a></div>
    </div>
  </section>;
}
