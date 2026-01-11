import { Link } from "react-router-dom";
import style from "./styles.module.css";

interface CardNoticias {
  link: string;
  title: string;
  photo: string;
  description?: string;
}

export const CardNoticia: React.FC<CardNoticias> = ({
  link,
  title,
  photo,
  description,
}) => {
  return (
    <div className={style.card}>
      <span className={style.badge}>Novidade</span>

      <div className={style.imageWrapper}>
        <img src={photo} alt={title} />
      </div>

      <div className={style.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <Link to={link} className={style.button}>
          Leia mais...
        </Link>
      </div>
    </div>
  );
};
