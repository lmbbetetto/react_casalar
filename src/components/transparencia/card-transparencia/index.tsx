import { Link } from "react-router-dom";
import style from "./style.module.css";
import { cloneElement, ReactElement } from "react";

interface CardProps {
  title: string;
  link: string;
  newTab?: boolean;
  icon: ReactElement;
}

export const CardTransparencia: React.FC<CardProps> = ({
  title,
  link,
  newTab = true,
  icon,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link
      to={link}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      onClick={scrollToTop}
    >
      <section className={style.card}>
        {cloneElement(icon, { color: "black", size: 40 })}
        <h1>{title}</h1>
        <div className={style.btn}></div>
      </section>
    </Link>
  );
};
