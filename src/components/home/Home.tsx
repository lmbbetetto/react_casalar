import "./styles.css";
import imgFundo from "../../assets/fundo_home.jpg";

export function Home() {
  return (
    <>
      <div className="img_fundo">
        <img src={imgFundo} alt="Imagem de fundo" className="imgHome" />
      </div>
      <div className="sobreHome"></div>

      <section className="sobre2Home">
        <div className="internaHome">oi</div>
        <div className="internaHome">oi</div>
      </section>
    </>
  );
}
