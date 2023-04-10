import { useState, useEffect } from 'react';
import { api } from '../../../config/site.config';
import { Link } from 'react-router-dom';
import ModalButton from '../../../components/Modal/ModalButton';
import Modal from '../../../components/Modal/Modal';

let categoryModal = null;

export default function CategoriesECPage() {
  // states
  const [categories, setCategories] = useState([]);
  const [categoryDelete, setCategoryDelete] = useState(0);
  // init
  const loadCategories = () => {
    api
      .get('categories')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //loading categories
    loadCategories();
    //loading modal
    if (!categoryModal) {
      categoryModal = new window.bootstrap.Modal('#categoryEcModal');
    }
    return () => {
      categoryModal = null;
    };
  }, []);
  // handlers
  const eliminarCategoriaModal = () => {
    api.delete('categories/' + categoryDelete).then((response) => {
      console.log(response);
      categoryModal.hide();
      loadCategories();
    });
  };

  // modal footer
  const modalFooter = (
    <>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Cerrar
      </button>
      <button type="button" className="btn btn-primary" onClick={eliminarCategoriaModal}>
        Eliminar Categoria
      </button>
    </>
  );
  // render
  return (
    <div className="container">
      <div className="row mb-2 mt-2">
        <div className="col">
          <Link to="/categories-ec/add" className="btn btn-primary">
            Adicionar Categoria
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <tr key={index}>
                    <td>{category.category_name}</td>
                    <td>{category.category_description}</td>
                    <td>
                      <Link
                        to={'/categories-ec/edit/' + category.id}
                        className="btn btn-outline-primary"
                      >
                        Editar
                      </Link>
                      <ModalButton
                        targetId="categoryEcModal"
                        className="btn btn-outline-secondary"
                        onClick={() => setCategoryDelete(category.id)}
                      >
                        Eliminar
                      </ModalButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Modal targetId="categoryEcModal" modalFooter={modalFooter} modalTitle="Eliminar categoria">
            <p>¿Estás seguro de eliminar esta categoria?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}
