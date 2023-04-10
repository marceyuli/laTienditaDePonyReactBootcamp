import { useState, useEffect } from 'react';
import { api } from '../../config/site.config';
import { Link } from 'react-router-dom';

/**
 * Bootstrap's Modal component implementation example
 * @returns {JSX.Element}
 * @constructor
 */
export default function CategoriesPage() {
  // states
  const [categories, setCategories] = useState([]);

  // init
  const loadCategories = () => {
    api
      .get('categories/65/getAll')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    //loading products
    loadCategories();
  }, []);

  // render
  return (
    <div className="container-fluid-section">
      <h2 className='body'>Categorias</h2>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Ver Categoria</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <tr key={index}>
                    <td>{category.category_name}</td>
                    <td>{category.category_description}</td>
                    <td>
                      <Link to={'/category/' + category.id} className="btn btn-outline-primary">
                        Ver productos
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
