import "./Header.css";

function Header() {
  window.onscroll = function () {
    let header = document.getElementById("header");
    let nav = document.getElementById("nav-ul");
    let span = document.getElementsByTagName("span")
    
    if (window.scrollY > 100) {
      header.classList.add("header-white");
      header.classList.remove("header");
      nav.classList.add("change-color");
     span[0].classList.remove("change-color")
     span[1].classList.remove("change-color")
     span[2].classList.remove("change-color")

      
      
    } else {
      header.classList.remove("header-white");
      header.classList.add("header");
      nav.classList.remove("change-color");
      span[0].classList.add("change-color")
      span[1].classList.add("change-color")
      span[2].classList.add("change-color")      

    }
  };

  return (
    <header className="header" id="header">
      <div className="brand">
        <a href="#welcome">CRISTIAN TORRES</a>
      </div>
      <nav className="nav" id="menuEscritorio">
        <ul className="nav-ul" id="nav-ul">
          <li>
            <a href="#about" name="link">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#tecnologias" name="link">
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#proyectos" name="link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" name="link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <nav id="mobile-menu">
        <input type="checkbox" id="hamburguesa" />
        <label for="hamburguesa">
          <span className="change-color"></span>
          <span className="change-color"></span>
          <span className="change-color"></span>
        </label>
        <ul class="nav-menu-movil">
          <li>
            <a href="#about" name="link">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#tecnologias" name="link">
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#proyectos" name="link">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" name="link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
