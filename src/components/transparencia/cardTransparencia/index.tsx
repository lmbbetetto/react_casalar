import style from "./style.module.css";
import { MdOutlinePictureAsPdf } from "react-icons/md";

interface cardProps {
  title: string;
  link: string;
}

export const CardTransparencia: React.FC<cardProps> = ({ title, link }) => {
  return (
    <>
      <a href={link} target="_blank">
        <section className={style.card}>
          <MdOutlinePictureAsPdf color="black" size={40} />
          <h1>{title}</h1>
          <div className={style.btn}></div>
        </section>
      </a>
    </>
  );
};
