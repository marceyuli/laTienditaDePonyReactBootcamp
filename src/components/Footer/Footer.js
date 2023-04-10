export default function Footer({ titulo, contenido }) {
  return (
    <footer>
      <div className="container-fluid-section-2 body light-color">
        <h2>{titulo}</h2>
        <p className="body">{contenido}</p>
        <div class="d-flex justify-content-center light-color">
          <a href="https://www.facebook.com/profile.php?id=100063487241892">
            <i class="bi bi-facebook footer-icon mx-2"></i>
          </a>
          <a href="https://www.instagram.com/latienditadepony/">
            <i class="bi bi-instagram footer-icon mx-2"></i>
          </a>
          <a href="https://www.tiktok.com/@latienditadepony?lang=es">
            <i class="bi bi-tiktok mx-2"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=59178559065&text=Hola!%20Quieroo%20informaci%C3%B3n%20porfavor">
            <i class="bi bi-whatsapp mx-2"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
