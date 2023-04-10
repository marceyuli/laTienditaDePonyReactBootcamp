import { useState, useEffect } from 'react';
import { api } from '../../../config/site.config';
import { Link } from 'react-router-dom';
import ModalButton from '../../../components/Modal/ModalButton';
import Modal from '../../../components/Modal/Modal';

let productModal = null;

export default function ProductsECPage() {
  // states
  const [products, setProducts] = useState([]);
  const [productDelete, setProductDelete] = useState(0);
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
      .get('products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //loading products
    loadProducts();
    //loading modal
    if (!productModal) {
      productModal = new window.bootstrap.Modal('#productEcModal');
    }
    return () => {
      productModal = null;
    };
  }, []);
  // handlers
  const eliminarProductoModal = () => {
    api.delete('products/' + productDelete).then((response) => {
      console.log(response);
      productModal.hide();
      loadProducts();
    });
  };

  // modal footer
  const modalFooter = (
    <>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button type="button" className="btn btn-primary" onClick={eliminarProductoModal}>
        Eliminar Producto
      </button>
    </>
  );
  // render
  return (
    <div className="container">
      <div className="row mb-2 mt-2">
        <div className="col">
          <Link to="/product-ec/add" className="btn btn-primary">
            Adicionar Producto
          </Link>
        </div>
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
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.product_name}</td>
                    <td>{product.product_description}</td>
                    <td>{product.product_price}</td>
                    <td>{product.categories[0].category_name}</td>

                    <td>
                      <Link
                        to={'/product-ec/edit/' + product.id}
                        className="btn btn-outline-primary"
                      >
                        Editar
                      </Link>
                      <ModalButton
                        targetId="productEcModal"
                        className="btn btn-outline-secondary"
                        onClick={() => setProductDelete(product.id)}
                      >
                        Eliminar
                      </ModalButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal targetId="productEcModal" modalFooter={modalFooter} modalTitle="Eliminar producto">
            <p>¿Estás seguro de eliminar este producto?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}
