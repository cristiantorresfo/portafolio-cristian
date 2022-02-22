import "./Header.css";

function Header() {
  window.onscroll = function () {
    let header = document.getElementById("header");
    let  nav = document.getElementById("nav-ul");
    console.log(nav);
    if (window.scrollY > 100) {
      header.classList.add("header-white");
      header.classList.remove("header");
      nav.classList.add("change-color");
     
    } else {
      header.classList.remove("header-white");
      header.classList.add("header");
       nav.classList.remove("change-color");
      
    }
  };

  return (
    <header className="header" id="header">
      <div className="brand"> <a href="#welcome">CRISTIAN TORRES</a>  </div>
      <nav className="nav">
        <ul className="nav-ul" id="nav-ul" >
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
      {/* <nav id="mobile-menu">
     <input type="checkbox" id="hamburguesa" />
     <label for="hamburguesa">
       <span></span>
       <span></span>
       <span></span>
     </label>
     <ul class="nav-menu-movil">
       <li><a href="#episodios">EPISODIOS</a></li>
       <li><a href="#nosotros">NOSOTROS</a></li>
       <li><a href="#invitados">ENTREVISTAS</a></li>
       <li><a href="#topicos">TÓPICOS</a></li>
     </ul>
   </nav> */}
    </header>
  );
}

export default Header;
