import { Link } from "react-router-dom";
import style from "./style.module.css";
import { GrDocumentPerformance } from "react-icons/gr";

interface btn {
  link: string;
  title: string;
}

export const CardDocs: React.FC<btn> = ({ link, title }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={style.card}>
      <GrDocumentPerformance color="black" size={60} />
      <h1>{title}</h1>
      <div className={style.btn}>
        <Link to={link}>
          <button onClick={scrollToTop}>Acessar</button>
        </Link>
      </div>
    </section>
  );
};
