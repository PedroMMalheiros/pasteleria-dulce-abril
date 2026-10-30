import { BUSINESS } from '../config';
import { Arrow, Flower, PastryIllustration } from './Icons';

const categories = ['Pastelería creativa', 'Bollería', 'Porciones de tarta', 'Galletas decoradas', 'Dulces sin gluten', 'Cupcakes'];

export default function ProductCategories() {
  return <section id="nuestros-dulces" className="products section" aria-labelledby="products-heading">
    <div className="container">
      <div className="section-intro products-intro"><div><p className="eyebrow">Nuestros dulces</p><h2 id="products-heading">¿De qué tienes<br /><em>antojo hoy?</em></h2></div><div className="products-aside"><Flower /><p>¿Te interesa alguno de nuestros dulces? Escríbenos y te contamos qué tenemos disponible.</p></div></div>
      <div className="category-grid">
        {categories.map((category, index) => <a className={`category category-${index + 1}`} key={category} href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola, me gustaría saber más sobre ${category.toLocaleLowerCase('es-ES')} en Dulce Abril.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por WhatsApp sobre ${category}`}><span className="category-number">0{index + 1}</span><PastryIllustration kind={index} /><h3>{category}</h3><span className="category-link-hint">Consultar<Arrow /></span></a>)}
      </div>
      <p className="gluten-note">Si tienes alguna alergia o intolerancia, consúltanos los ingredientes y la posible presencia de trazas antes de consumir.</p>
    </div>
  </section>;
}
