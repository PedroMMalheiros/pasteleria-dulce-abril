import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import About from './components/About';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import Footer, { FloatingWhatsApp } from './components/Footer';

export default function App() {
  return <><Header /><main id="contenido"><Hero /><ProductCategories /><About /><Location /><ContactCTA /></main><Footer /><FloatingWhatsApp /></>;
}
