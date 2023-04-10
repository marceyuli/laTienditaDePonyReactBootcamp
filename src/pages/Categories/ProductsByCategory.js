import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

import { api } from '../../config/site.config';
export default function ProductPage() {
  //states
  
  const [products, setProducts] = useState([]);
  //init
  let { categoryId } = useParams();
  useEffect(() => {
    api
      .get('categories/65/products/' + categoryId)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  });

  // render
  //Nombre, descripción, imagen y precio del producto
  // Categorías del producto (mostrar como enlaces)
  //Botón para adicionar al carrito de compra
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col text-end">
              <Link to="/products" className="btn btn-outline-primary">
                Volver &raquo;
              </Link>
            </div>
          </div>
        </div>
        <h1>Productos</h1>{' '}
        <div className="row">
          
            {products.map((product, index) => {
              return (
                <Card
              key={index}
              thumbnail={product.product_image}
              name={product.product_name}
              id={product.id}
            >
              {product.product_description}
            </Card>
           
              );
            })}
           
        </div>
      </div>
    </div>
  );
}
