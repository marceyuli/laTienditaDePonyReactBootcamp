import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utility/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import MyProfilePage from './pages/Admin/MyProfilePage/MyProfilePage';
import ListExamplePage from './pages/Admin/ListExamplePage/ListExamplePage';
import ProductsECPage from './pages/Admin/ProductsECPage/ProductsECPage';
import AddEditProductECPage from './pages/Admin/ProductsECPage/AddEditProductECPage';
import AddCategory from './pages/Admin/CategoriesAdmin/AddCategory';
// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import CategoriesECPage from './pages/Admin/CategoriesAdmin/CategoriesECPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Contacto from './pages/Contacto/Contacto';
import ProductPage from './pages/ProductsPage/ProductPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import ProductsByCategory from './pages/Categories/ProductsByCategory.js'
/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  
 
  let footer = {
    titulo: 'La tiendita de pony',
    contenido:
      ' La mejor opcion para encontrar merch de tus artistas favoritos',
  };
  // options
  let navBarOptions = {
    main: [
      { option: 'Home', to: '/' },
      { option: 'Acerca de nosotros', to: '/about' },
      { option: 'Productos', to: '/products' },
      { option: 'Categorias', to: '/categories' },
      { option: 'Contacto', to: '/contacto' },

    ],
    right: [
      { option: 'Cart', to: '/my-cart', displayIfLoggedIn: false },

      { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
      { option: 'Products', to: '/products-ec', displayIfLoggedIn: true },
      { option: 'Categories', to: '/categories-ec', displayIfLoggedIn: true },
      { option: 'Login', to: '/login', displayIfLoggedIn: false },
      { option: 'Logout', to: '/logout', displayIfLoggedIn: true },
    ],
  };
  return (
    <BrowserRouter>
    <section className="colored-section" id="navbar">
        <NavBar navBarOptions={navBarOptions} />
      </section>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="categories" element={<CategoriesPage/>} />
          <Route path="category">
            <Route
              path=":categoryId"
              element={
                  <ProductsByCategory/>
              }
            />
          </Route>
          <Route path="products" element={<ProductsPage />} />
          <Route path="product">
            <Route
              path=":productId"
              element={
                  <ProductPage/>
              }
            />
          </Route>
          <Route
            path="my-profile"
            element={
              <PrivateRoute>
                <MyProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="admin/list">
            <Route
              path=":listId"
              element={
                <PrivateRoute>
                  <ListExamplePage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="products-ec"
            element={
              <PrivateRoute>
                <ProductsECPage />
              </PrivateRoute>
            }
          />
          <Route path="product-ec/edit">
            <Route
              path=":productId"
              element={
                <PrivateRoute>
                  <AddEditProductECPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="product-ec/add"
            element={
              <PrivateRoute>
                <AddEditProductECPage />
              </PrivateRoute>
            }
          />
          <Route
            path="categories-ec"
            element={
              <PrivateRoute>
                <CategoriesECPage />
              </PrivateRoute>
            }
          />
          <Route path="categories-ec/edit">
            <Route
              path=":categoryId"
              element={
                <PrivateRoute>
                  <AddCategory />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="categories-ec/add"
            element={
              <PrivateRoute>
                <AddCategory />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer titulo={footer.titulo} contenido={footer.contenido} />

    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
