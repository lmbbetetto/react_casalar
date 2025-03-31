import style from "./styles.module.css";
import { BtnBack } from "../../../component/buttonBack/back";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import IMG1 from "../../../../assets/carro-1.jpeg";
import IMG2 from "../../../../assets/carro-2.jpeg";

const images = [IMG1, IMG2];

export function Automovel() {
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
          <span>10/2023 - Andréia Oliveira</span>
          <h1>Aquisição de Automóvel através de Emenda Parlamentar</h1>
          <p>
            Em outubro de 2023, a Associação Casa Lar recebeu um importante
            reforço com a aquisição de um automóvel modelo Spin. O veículo foi
            adquirido por meio de uma Emenda Parlamentar indicada pelo Deputado
            Estadual Vinicius Camarinha, com o objetivo de melhorar a estrutura
            e o atendimento prestado pela instituição.
            <br />
            <br />
            A entrega do automóvel foi realizada pelo assessor Ian Salomão,
            representando o parlamentar, diretamente à equipe da Casa Lar. O
            novo veículo será utilizado para facilitar o transporte dos
            atendidos e a realização de atividades essenciais da instituição,
            garantindo mais eficiência no atendimento.
            <br />
            <br />A chegada do novo veículo representa um avanço significativo
            para a mobilidade da instituição, permitindo deslocamentos mais
            ágeis e seguros, além de facilitar a logística das atividades
            diárias. Com essa melhoria, a Casa Lar poderá oferecer um suporte
            ainda mais eficiente e adequado.
          </p>
        </div>
      </div>
    </>
  );
}
