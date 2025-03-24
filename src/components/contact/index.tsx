import style from "./style.module.css";
import { toast } from "react-toastify";

import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useRef, FormEvent, useState } from "react";

import imgFundo from "../../assets/contact-photo.jpg";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vxeo937",
        "template_56zf7jf",
        form.current,
        "cLJg8_cL0aeiB6Jiw"
      )
      .then((result: EmailJSResponseStatus) => {
        toast.success("Mensagem enviada!");
        resetForm();
      })
      .catch((error) => {
        toast.error("Mensagem não enviada!");
        resetForm();
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Contato</p>
          <h1>Contato</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>

      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Entre em <span className={style.textoPrincipalGreen}>contato</span>{" "}
          conosco e tire suas{" "}
          <span className={style.textoPrincipalGreen}>dúvidas</span>! Estamos à
          disposição para{" "}
          <span className={style.textoPrincipalGreen}>ajudar</span> você da{" "}
          <span className={style.textoPrincipalGreen}>
            melhor forma possível
          </span>
          .
        </h1>
      </div>
      <div className={style.container}>
        <div className={style.containerContact}>
          <div className={style.contact__options}>
            <article className={style.contact__option}>
              <ImLocation className={style.contact__option_icon} />
              <h4>Endereço</h4>
              <h5>Av. Manoel Antônio de Souza, 1896 - Barra Funda</h5>
              <h5>Paraguaçu Paulista - SP</h5>
            </article>

            <article className={style.contact__option}>
              <BsFillTelephoneFill className={style.contact__option_icon} />
              <h4>Endereço</h4>
              <h5>+55 18 3361-1469</h5>
            </article>

            <article className={style.contact__option}>
              <BsFacebook className={style.contact__option_icon} />
              <h4>Facebook</h4>
              <h5>Associação Casa Lar</h5>
              <a
                href="https://www.facebook.com/people/CasaLar-Juventino-Pereira/pfbid02YFimXdTnSiLrUpLygHxW9dAYsL8GdqL2HWZNMzgsjbp61EkjaDwn5BvkHNR8hcpvl/"
                target="_blank"
              >
                Acesse
              </a>
            </article>

            <article className={style.contact__option}>
              <AiFillInstagram
                size={30}
                className={style.contact__option_icon}
              />
              <h4>Instagram</h4>
              <h5>Projeto CARA</h5>
              <a
                href="https://www.instagram.com/projetocara.casalar/"
                target="_blank"
              >
                Acesse
              </a>
            </article>
          </div>
          <div>
            <form ref={form}>
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows={7}
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className={style.btnForm}
                onClick={sendEmail}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
