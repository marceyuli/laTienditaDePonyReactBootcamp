import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../../config/site.config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import es from 'yup-es';

yup.setLocale(es);
const schema = yup
  .object({
    category_name: yup.string().required(),
    category_description: yup.string().required(),
  })
  .required();

export default function AddCategory() {
  // router
  const navigate = useNavigate();
  // forms
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // states
  const [category, setCategory] = useState({
    category_name: '',
    category_description: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  // init
  let { categoryId } = useParams();
  useEffect(() => {
    //Si la categoria ya existe
    if (categoryId) {
      api
        .get('categories/' + categoryId)
        .then((response) => {
          setCategory(response.data.category);
          reset({
            category_name: response.data.product.category_name,
            category_description: response.data.product.category_description,
          });
        })
        .catch((error) => console.log(error));
    } else {
      api.get('categories').catch((error) => console.log(error));
    }
  }, [categoryId, reset]);
  // handlers
  const handleSubmitForm = (data) => {
    if (categoryId) {
      updateCategory(data, 'Editado exitosamente');
    } else {
      saveCategory(data, 'Categoria creada exitosamente');
    }
  };

  const saveCategory = (apiParams, successMessage) => {
    const formData = new FormData();
    for (let key in apiParams) {
      formData.append(key, apiParams[key]);
    }
    api
      .post('categories', formData)
      .then((response) => {
        if (response.data.success) {
          setSuccessMessage(successMessage);
          setTimeout(() => {
            navigate(`/categories-ec`);
          }, '2000');
        }
      })
      .catch((error) => console.log(error));
  };

  const updateCategory = (apiParams, successMessage) => {
    apiParams.id = categoryId;
    apiParams._method = 'PUT';
    const formData = new FormData();
    for (let key in apiParams) {
      formData.append(key, apiParams[key]);
    }
    api
      .post('categories/' + categoryId, formData)
      .then((response) => {
        if (response.data.success) {
          setSuccessMessage(successMessage);
        }
      })
      .catch((error) => console.log(error));
  };
  // render
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-10">
              <h2>{categoryId ? 'Editar' : 'Adicionar'} Categoria</h2>
            </div>
            <div className="col text-end">
              <Link to="/categories-ec" className="btn btn-outline-primary">
                Volver &raquo;
              </Link>
            </div>
          </div>
          {successMessage ? (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMessage}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                defaultValue={category.category_name}
                {...register('category_name')}
              />
              <div className="es-invalid-field badge text-bg-danger">{errors.category_name?.message}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                defaultValue={category.category_description}
                {...register('category_description')}
              />
              <div className="es-invalid-field badge text-bg-danger">{errors.category_description?.message}</div>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">{categoryId ? 'Editar' : 'Adicionar'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
