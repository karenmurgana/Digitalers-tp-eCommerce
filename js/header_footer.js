window.addEventListener("load", () => {
  cargarHeaderFooter();
});

let cargarHeaderFooter = () => {
    let barra = `<nav class="navbar navbar-expand-lg border-bottom bg-warning-subtle">
    <div class="container-fluid d-flex justify-content-between ms-lg-3" >
      <a class="navbar-brand" href="./index.html"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end " id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ">
          

          <li class="nav-item dropdown pe-2 me-2">
            <a class="nav-link dropdown-toggle px-2" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Acerca de...
            </a>
            <ul class="dropdown-menu me-3">
              <li>
                <a class="dropdown-item" href="./nosotros.html">Nosotros</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="./nosotros.html">Dónde estamos</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="./nosotros.html">FAQ</a>
              </li>
            </ul>
          </li>
          <li class="nav-item  me-2 bg-white rounded">
            <a class="nav-link px-2" aria-current="page" href="./index.html">Home 🏠</a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link  bg-success-subtle rounded-3 px-2" href="yerbas.html">Yerbas Mate 🧉</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  bg-info-subtle rounded-3 px-2" href="productos.html">Productos 🛒</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>` ;
  let piepagina = ` 
  <footer class="bg-warning-subtle text-dark text-center py-4 mt-5 border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Acerca de nosotros</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nulla ullamcorper, posuere enim ut, scelerisque ex.</p>
        </div>
        <div class="col-md-4">
          <h5>Contacto</h5>
          <address>
            <p>Calle 123, Ciudad</p>
            <p>Email: info@example.com</p>
            <p>Tel: (123) 456-7890</p>
          </address>
        </div>
        <div class="col-md-4">
          <h5>Síguenos</h5>
          <ul class="list-inline">
            <li class="list-inline-item"><a href="https://www.facebook.com/"><i class="bi bi-facebook" ></i></a></li>
            <li class="list-inline-item"><a href="https://x.com"><i class="bi bi-twitter"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>`; 
    document.querySelector("#headerNavbar").innerHTML = barra;
    document.querySelector("#footer").innerHTML = piepagina;


};
