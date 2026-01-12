import style from "./styles.module.css";
import { BtnBack } from "../../../component/buttonBack/back";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import IMG1 from "../../../../assets/trator.jpeg";
import IMG2 from "../../../../assets/trator-1.jpg";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const images = [IMG1, IMG2];

export function Trator() {
  return (
    <>      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className={style.img_fundo}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={src} alt={`Slide ${index}`} className={style.img_fundo} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.containerNot}>
        <BtnBack link="/noticias" />
        <div className={style.container}>
          <span>25/09/2025 - Andréia Oliveira</span>
          <h1>
            Aquisição de Trator Cortador de Grama através de Emenda Parlamentar
          </h1>
          <p>
            Associação Casa Lar recebe trator cortador de grama por meio de
            emenda parlamentar Em agosto de 2025, a Associação Casa Lar foi
            beneficiada com a entrega de um trator cortador de grama,
            viabilizado por meio da Emenda Impositiva do vereador Daniel
            Faustino. O equipamento será fundamental para a manutenção das áreas
            externas da instituição, contribuindo para um ambiente mais seguro,
            limpo e organizado.
            <br />
            <br />A aquisição representa um importante reforço na infraestrutura
            da Casa Lar, permitindo que os espaços ao ar livre sejam cuidados
            com mais eficiência e regularidade. Agradecemos ao vereador Daniel
            Faustino pelo apoio e pela sensibilidade às necessidades da nossa
            comunidade.
          </p>
        </div>
      </div>
    </>
  );
}
