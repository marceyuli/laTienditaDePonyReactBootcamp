export default function AboutUs() {
  return (
    <div className="container-fluid-section body colored-section">
        <img src="https://raw.githubusercontent.com/marceyuli/fotosTP/main/sparkle-icon-25.jpg" alt="" width="20%"/>
      <h1 className="big-heading">La Tiendita de Pony</h1>
      <p className="body-component">
        Hola! somos una tienda de merch de artistas (poleras y hoodies) donde también puedes hacer
        pedidos personalizados de prendas, estamos ubicados en Santa Cruz y hacemos envíos a toda
        Bolivia.
      </p>
      <a href='https://api.whatsapp.com/send?phone=59178559065&text=Hola!%20Quieroo%20informaci%C3%B3n%20porfavor'
       className="btn btn-outline-dark btn-link" tabindex="-1" role="button" aria-disabled="true" >Contactanos</a>
    </div>
  );
}
