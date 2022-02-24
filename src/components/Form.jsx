import { useEffect } from "react";
import "./Form.css";

function Form() {

useEffect(() => {
        const formEl = document.querySelector("#form-contact");
  formEl.addEventListener("submit", handleSubmit);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formEl);
    const response = await fetch(formEl.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formEl.reset();
      alert("Message sent");
    }
}  
    }, []);
  
  

  return (
    <div className="form" id="contacto">
      <section class="seccion-contact" id="contact">
        <div class="seccion-contact__heading">
          <h2 class="seccion-contact__heading-h2">Contacto</h2>
          <p class="seccion-contact__heading-text"></p>
        </div>

        <div class="seccion-contact__content">
          <div class="seccion-contact__info">
            <h3 class="seccion-contact__info-h3">Información de contacto</h3>
            <div class="seccion-contact__info-box">
              <div class="seccion-contact__box">
                <img
                  class="seccion-contact__box-icon"
                  src="https://cdn-icons-png.flaticon.com/512/633/633898.png"
                  alt=""
                />
                <div class="seccion-contact__box-text">
                  <h3 class="seccion-contact__box-text-h3">Ubicación</h3>
                  <p class="seccion-contact__box-text-p">
                    Colombia.
                  </p>
                </div>
              </div>

              <div class="seccion-contact__box">
                <img
                  class="seccion-contact__box-icon"
                  src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                  alt=""
                />
                <div class="seccion-contact__box-text">
                  <a
                    class="seccion-contact__box-text-a"
                    href="https://www.linkedin.com/in/cristian-torres-f/"
                    target="”_blank”"
                  >
                    <h3 class="seccion-contact__box-text-h3">Linkedin</h3>
                    linkedin.com/in/cristian-torres-f/
                  </a>
                </div>
              </div>

              <div class="seccion-contact__box">
                <img
                  class="seccion-contact__box-icon"
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  alt=""
                />
                <div class="seccion-contact__box-text">
                  <a
                    class="seccion-contact__box-text-a"
                    href="https://github.com/cristiantorresfo"
                    target="”_blank”"
                  >
                    <h3 class="seccion-contact__box-text-h3">GitHub</h3>
                    github.com/cristiantorresfo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="seccion-contact__cont-form">
            <form
              id="form-contact"
              class="seccion-contact__form"
              action="https://formspree.io/f/mnqwdywy"
              method="POST"
            >
              <h3 class="seccion-contact__form-h3">Mensaje</h3>
              <input
                class="seccion-contact__form-input"
                type="fullname"
                name="fullname"
                placeholder="Nombre"
              />
              <input
                class="seccion-contact__form-input"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                class="seccion-contact__form-textarea"
                name="message"
                placeholder="Tu mensaje"
              ></textarea>
              <input
                class="seccion-contact__form-input"
                type="submit"
                value="Enviar"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
