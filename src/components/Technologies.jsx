import "./Technologies.css";
import {logos} from "../statics/logosData"

function Technologies() {
  

  return (
    <section className="technologies" id="tecnologias">
      <h1>Tecnologías</h1>
      <div className="container">
      {logos.map((logo) => {
        return (
          <div className="logos-container" key={logo.name}>
            <img src={logo.url} alt="logo" />
            <p>{logo.name}</p>
          </div>
        );
      })}
      </div>
      
    </section>
  );
}

export default Technologies;
