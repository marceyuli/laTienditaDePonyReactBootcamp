import Slider from '../../components/Slider/Slider';
import ProductsPage from '../ProductsPage/ProductsPage';
/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  let elementsEx = [
    {
      url: 'https://raw.githubusercontent.com/marceyuli/fotosTP/main/13.jpg',
      className: 'carousel-item active container-fluid-image',
    },
    {
      url: 'https://raw.githubusercontent.com/marceyuli/fotosTP/main/15.jpg',
      className: 'carousel-item active container-fluid-image',
    },
    {
      url: 'https://raw.githubusercontent.com/marceyuli/fotosTP/main/19.jpg',
      className: 'carousel-item active container-fluid-image',
    },
    {
      url: 'https://raw.githubusercontent.com/marceyuli/fotosTP/main/45.jpg',
      className: 'carousel-item active container-fluid-image',
    },
    {
      url: 'https://raw.githubusercontent.com/marceyuli/fotosTP/main/54.jpg',
      className: 'carousel-item active container-fluid-image',
    },
  ];
  return (
    <div className="body">
      <section className="colored-section">
        <Slider elements={elementsEx} />
      </section>
      <section className="container-fluid-section">
        <h2>Nuestros Productos</h2>
        <p>Encuentra la prenda perfecta para ti!</p>
        <ProductsPage />
      </section>
    </div>
  );
}
