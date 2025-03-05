import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./styles.module.css";

interface CardNoticias {
  link: string;
  title: string;
  photo: string;
}

export const CardNoticia: React.FC<CardNoticias> = ({ link, title, photo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to={link}>
      <div
        className={style.imageWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={photo} alt={title} />
        {isHovered && (
          <div className={style.overlay}>
            <div className={style.titulo}>
              <h1>{title}</h1>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
