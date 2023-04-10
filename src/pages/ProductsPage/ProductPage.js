import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../config/site.config';
export default function ProductPage() {
  //states
  
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  //init
  let { productId } = useParams();
  useEffect(() => {
    api
      .get('products/getProduct/' + productId)
      .then((response) => {
        setProduct(response.data.product);
        setCategories(response.data.product.categories);
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
        <h1>Detalles del producto</h1>{' '}
        <div className="row">
          <div className="col">
            <img className="container-fluid-image-2" src={product.product_image} alt="Imagen" />
          </div>
          <div className="col d-flex justify-content-evenly  filas">
            <h2>Nombre: {product.product_name}</h2>
            <h3>{product.product_description}</h3>
            <h3>Precio: {product.product_price}</h3>
            <div>
               <h3>Categorias:</h3>
            {categories.map((category, index) => {
              return (
                <Link key={index} to={'/categories/'} >
                  {category.category_name}
                </Link>
              );
            })}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
