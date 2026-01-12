import style from "./styles.module.css";
import { Cnoticia } from "./noticia/noticia";

import imgFundo from "../../../assets/news-photo.jpg";
import { noticias } from "./mock";

export function NotIndex() {

  return (
    <>
      <div className={style.titulo}>
        <div className={style.tituloTexto}>
          <p>Notícias</p>
          <h1>Notícias</h1>
          <h2>Assoc. Casa Lar</h2>
        </div>
        <img src={imgFundo} alt="Imagem de fundo" className={style.imgFundo} />
      </div>
      <div className={style.textTitle}>
        <h1 className={style.textoPrincipal}>
          Fique por dentro de{" "}
          <span className={style.textoPrincipalGreen}>todas</span> as{" "}
          <span className={style.textoPrincipalGreen}>notícias</span> da{" "}
          <span className={style.textoPrincipalGreen}>Assoc. Casa Lar</span>!
        </h1>
      </div>

      <div className={style.container}>
        {noticias.map((component, index) => (
          <Cnoticia
            key={index}
            title={component.title}
            link={component.link}
            paragraph={component.paragraph}
            photo={component.photo}
            date={component.date}
          />
        ))}
      </div>
    </>
  );
}
