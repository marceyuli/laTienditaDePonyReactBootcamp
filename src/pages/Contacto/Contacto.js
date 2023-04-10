export default function AboutUs() {
  return (
    <div className="container-fluid-section body colored-section">
      <div class="row">
        <div class="col-4">
          <img
            src="https://raw.githubusercontent.com/marceyuli/fotosTP/main/sparkle-icon-25.jpg"
            alt=""
            width="60%"
          />
        </div>
        <div class="col-8">
          <div className="container-fluid-section body colored-section">
            <h3>Contactanos para obtener la prenda de tus sueños!</h3>
            <p className="body-component">
             ¿Deseas cotizar la prenda que siempre quisiste? Animate a cotizar tus poleras y hoodies!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=59178559065&text=Hola!%20Quieroo%20informaci%C3%B3n%20porfavor"
              className="btn btn-outline-dark btn-link"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
