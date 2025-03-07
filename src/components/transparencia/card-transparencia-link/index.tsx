import { Link } from "react-router-dom";
import style from "./style.module.css";
import { MdOutlinePictureAsPdf } from "react-icons/md";

interface CardProps {
  title: string;
  link: string;
}

export const CardTransparenciaLink: React.FC<CardProps> = ({ title, link }) => {
  return (
    <Link to={link}>
      <section className={style.card}>
        <MdOutlinePictureAsPdf color="black" size={40} />
        <h1>{title}</h1>
        <div className={style.btn}></div>
      </section>
    </Link>
  );
};
