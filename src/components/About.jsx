import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <h1>Sobre mí</h1>
      <div className="description">
        <p>
          Hola! Mi nombre es Cristian Torres, soy un Ingeniero Industrial que
          decidió apostarle al sector de la tecnología y por esa razón, estudié
          Desarrollo Web Frontend en Acámica (Digital House).
          <br />
          <br />
          Desde que inicié mi formación como Desarrollador Web Frontend, he
          encontrado un gusto enorme por la programación, especialmente la
          posibilidad de ver reflejada en mis líneas de código, una interfaz
          de usuario que sea funcional y agradable a la vista.
          <br />
          <br />
          He logrado poner a prueba mis conocimientos por medio de la realización de proyectos académicos que incluyen funcionalidades similares a las que pueden encontrarse en proyectos reales de esta industria. La 
          mayoría de ellos los he desarrollado haciendo uso de JavaScript y React como librería.

          <br />
          <br />
          Si deseas conocer más sobre mi trabajo te invito a seguir explorando las siguientes secciones.
                  </p>

        <img src="./imagencristian.jpg " alt="imag-log" />
      </div>
    </div>
  );
}

export default About;
