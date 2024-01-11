import MasProyectos from "./MasProyectos";

function Proyectos() {
  return (
    <div className="mt-20 mb-12">
      <article className=" lg:py-20 max-w-4xl mx-auto">
        <p className="pb-5 font-body lg:text-34px lg:leading-normal text-textColor text-xl  md:text-2xl text-center font-medium leading-10">
          A lo largo de mi carrera como Frontend, he tenido el privilegio de
          trabajar en proyectos retadores e increíbles
        </p>
        <p className="pb-4 font-body text-textColor text-xl md:text-2xl  text-center font-bold leading-10">
          Aquí hay algunos que me gustaría compartir.
        </p>
        <img
          src="/arrow-down.svg"
          alt="arrow down"
          className="mx-auto animate-bounce mt-4 "
        />
      </article>
      <div
        className="lg:flex-row lg:justify-between lg:pb-20 pb-10 flex justify-center flex-col items-center"
        id="proyectos"
      >
        <img
          src="/golden.png"
          alt=""
          className="mb-8 w-10/12 md:w-1/2 lg:2/6 rounded-xl"
          data-aos="fade-right"
        />
        <div data-aos="fade-left" className="lg:pb-20">
          <article className="mb-5 max-w-md">
            <div className="flex justify-center items-center">
              <h3 className="shadow-showTitle py-4 lg:text-34px text-center mb-5 inline-block bg-white  px-2 text-gray-950 text-2xl">
                Golden envios
              </h3>
            </div>
            <p className="text-textColor text-base leading-6 font-body font-normal lg:pr-4">
              Demo de un Dashboard page para una empresa de envios de dinero.
            </p>
          </article>
          <div className="flex lg:flex-row-reverse lg:max-w-340 flex-col text-center ">
            <a
              target="_blank"
              href="https://github.com/sefhirothxd/golden-envios"
              className="flex mb-4 text-white lg:mb-0 lg:w-30 items-center justify-center font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              <img className="inline mr-2" src="/icon-github-b.svg" />
              VER CÓDIGO
            </a>
            <a
              target="_blank"
              href="https://golden-envios.vercel.app/"
              className="bg-white lg:mr-3 lg:w-30 font-body text-[14px] flex items-center justify-center  text-gray-950 font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              VER PROYECTO
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex-row-reverse lg:justify-between lg:pb-20 pb-10 flex justify-center flex-col items-center ">
        <img
          src="/Musicfy.png"
          alt=""
          className="mb-8 w-10/12 md:w-1/2 lg:2/6 rounded-xl"
          data-aos="fade-left"
        />
        <div data-aos="fade-right" className="lg:pb-20">
          <article className="mb-5 max-w-md">
            <div className="flex justify-center items-center">
              <h3 className="shadow-showTitle py-4 lg:text-34px mb-5 inline-block bg-white  px-2 text-gray-950 text-2xl">
                Musicfy
              </h3>
            </div>
            <p className="text-textColor text-base leading-6 font-body font-normal lg:pr-4">
              se ultiliza el api de deezer para poder realizar un reproductor de
              musica con buscador de canciones o albums.
            </p>
          </article>
          <div className="flex lg:flex-row-reverse lg:max-w-340 flex-col text-center ">
            <a
              target="_blank"
              href="https://github.com/sefhirothxd/reproductodeaudio-vue"
              className="flex mb-4 text-white lg:mb-0 lg:w-30 items-center justify-center font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              <img className="inline mr-2" src="/icon-github-b.svg" />
              VER CÓDIGO
            </a>
            <a
              target="_blank"
              href="https://cancionesapicors.netlify.app/"
              className="bg-white lg:mr-3 lg:w-30 font-body text-[14px] flex items-center justify-center  text-gray-950 font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              VER PROYECTO
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex-row lg:justify-between lg:pb-20 pb-10 flex justify-center flex-col items-center ">
        <img
          src="/blockbuuster.png"
          alt=""
          className="mb-8 w-10/12 md:w-1/2 lg:2/6 rounded-xl"
          data-aos="fade-right"
        />
        <div data-aos="fade-left" className="lg:pb-20">
          <article className="mb-5 max-w-md">
            <div className="flex justify-center items-center">
              <h3 className="shadow-showTitle py-4 lg:text-34px mb-5 inline-block bg-white  px-2 text-black text-2xl">
                Block Buster
              </h3>
            </div>
            <p className="text-textColor text-base leading-6 font-body font-normal lg:pr-4">
              Sitio web donde encontras peliculas mas valoradas y tambien tiene
              un buscado donde encontraras tu pelicula favorita.
            </p>
          </article>
          <div className="flex lg:flex-row-reverse lg:max-w-340 flex-col text-center ">
            <a
              target="_blank"
              href="https://github.com/sefhirothxd/blockmaster"
              className="flex mb-4 text-textColor lg:mb-0 lg:w-30 items-center justify-center font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              <img className="inline mr-2" src="/icon-github-b.svg" />
              VER CÓDIGO
            </a>
            <a
              target="_blank"
              href="https://blockbuster-two.vercel.app/"
              className="bg-white lg:mr-3 lg:w-30 font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              VER PROYECTO
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex-row-reverse lg:justify-between lg:pb-20 pb-10 flex justify-center flex-col items-center ">
        <img
          src="/kitoperu.png"
          alt=""
          className="mb-8 w-10/12 md:w-1/2 lg:2/6 rounded-xl"
          data-aos="fade-left"
        />
        <div data-aos="fade-right" className="lg:pb-20">
          <article className="mb-5 max-w-md">
            <div className="flex justify-center items-center">
              <h3 className="shadow-showTitle py-4 lg:text-34px mb-5 inline-block bg-white  px-2 text-black text-2xl">
                KITO PERU
              </h3>
            </div>
            <p className="text-textColor text-base leading-6 font-body font-normal lg:pr-4">
              Empresa dedicada a la venta de herramientas industriales.
            </p>
          </article>
          <div className="flex lg:flex-row-reverse lg:max-w-340 flex-col text-center ">
            <a
              target="_blank"
              href="https://github.com/sefhirothxd/kitoperu"
              className="flex mb-4 text-textColor lg:mb-0 lg:w-30 items-center justify-center font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              <img className="inline mr-2" src="/icon-github-b.svg" />
              VER CÓDIGO
            </a>
            <a
              target="_blank"
              href="https://kitoperu.vercel.app/"
              className="bg-white lg:mr-3 lg:w-30 font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
            >
              VER PROYECTO
            </a>
          </div>
        </div>
      </div>
      <MasProyectos />
    </div>
  );
}

export default Proyectos;
