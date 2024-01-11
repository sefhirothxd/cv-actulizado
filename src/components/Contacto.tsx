import FormContacto from "./FormContacto";
const Contacto = () => {
  return (
    <div className="py-20 max-w-550 mx-auto ">
      <div className="mb-4" id="hablemos">
        <h3 className="md:block text-center w-full  lg:text-34px py-4 shadow-showTitle mb-5 inline-block bg-white px-2 text-gray-950 text-2xl">
          HABLEMOS
        </h3>
        <p className="md:text-center text-textColor text-base leading-6 font-body font-normal">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto conmigo.
        </p>
      </div>
      <FormContacto />
    </div>
  );
};

export default Contacto;
