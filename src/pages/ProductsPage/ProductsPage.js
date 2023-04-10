import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { api } from '../../config/site.config';

/**
 * Bootstrap's Modal component implementation example
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProductsPage() {

  // states
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');


  //handler serach
  const handleClickSearch = (searchValue) => {
    let newProducts = [...products];
    if (searchValue === '') {
      loadProducts();
    } else {
      setProducts(
        newProducts.filter((product) => {
          if (product.product_name) {
            return product.product_name.indexOf(searchValue) !== -1;
          } else {
            return false;
          }
        }),
      );
    }
  };
  // init
  const loadProducts = () => {
    api
      .get('products/65/getAll')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //loading products
    loadProducts();
  }, []);

  // render
  return (
    <div className="container ">
      <div className="row ">
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleClickSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="row ">
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
  );
}
