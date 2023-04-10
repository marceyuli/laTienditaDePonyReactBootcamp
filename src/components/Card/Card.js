import { Link } from 'react-router-dom';
export default function Card({ thumbnail, name, id, children }) {
  return (
    <div
      className="card"
      style={{
        width: '19rem',
      }}
    >
      <img src={thumbnail} className="card-img-top" alt={name} />
      <div className="card-body">
        <p className="card-text">{children}</p>
        <div class="d-flex justify-content-between">
          <div class="p-2">
          <a
              href="https://api.whatsapp.com/send?phone=59178559065&text=Hola!%20Quieroo%20informaci%C3%B3n%20porfavor"
              className="btn btn-outline-dark "
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Comprar
            </a>
            <Link to={'/product/' + id} className="btn btn-outline-dark">
              Ver Mas
            </Link>
            <a href="/#" className="btn btn-outline-dark">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
