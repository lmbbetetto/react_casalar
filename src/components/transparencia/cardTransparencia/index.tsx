import { Link } from "react-router-dom";
import style from "./style.module.css";
import { MdOutlinePictureAsPdf } from "react-icons/md";

interface CardProps {
  title: string;
  link: string;
  newTab?: boolean;
}

export const CardTransparencia: React.FC<CardProps> = ({
  title,
  link,
  newTab = true,
}) => {
  return (
    <Link
      to={link}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <section className={style.card}>
        <MdOutlinePictureAsPdf color="black" size={40} />
        <h1>{title}</h1>
        <div className={style.btn}></div>
      </section>
    </Link>
  );
};
