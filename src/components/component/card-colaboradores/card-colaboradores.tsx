import style from "./style.module.css";
import { MdOutlinePictureAsPdf } from "react-icons/md";

interface cardProps {
  name: string;
  occupation: string;
  workload: string;
}

export const CardColaboradores: React.FC<cardProps> = ({
  name,
  occupation,
  workload,
}) => {
  return (
    <>
      <section className={style.card}>
        <h1>{name}</h1>
        <p>{occupation}</p>
        <p>{workload}</p>
      </section>
    </>
  );
};
