"use client";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  correo: string;
  message: string;
};

const FormContacto = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (e) => {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(e),
    });
    const data = await res.json();

    if (data.status === 200) {
      toast.success("Mensaje enviado correctamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Error al enviar el mensaje", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    reset();
  };

  return (
    <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="pl-4 mb-2 text-textColor text-base font-body font-bold">
        Nombre completo <span className="text-red-600">*</span>
      </h4>
      <input
        {...register("name", { required: true, minLength: 3 })}
        name="name"
        className="py-3 mb-4 px-4 rounded-lg w-full"
        type="text"
        placeholder="juan"
      />
      {errors.name && errors.name.type === "required" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Por favor, ingrese su nombre.
        </span>
      )}
      {errors.name && errors.name.type === "minLength" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Ingrese más de 2 caracteres.
        </span>
      )}
      <h4 className="pl-4 mb-2 text-textColor text-base font-body font-bold">
        Correo electrónico <span className="text-red-600">*</span>
      </h4>
      <input
        {...register("correo", {
          required: true,
          minLength: 3,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
        })}
        name="correo"
        type="email"
        className=" mb-4 py-3 px-4 rounded-lg w-full"
        placeholder="juan@gmail.com"
      />
      {errors.correo && errors.correo.type === "required" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Por favor, ingrese su correo.
        </span>
      )}
      {errors.correo && errors.correo.type === "pattern" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Por favor, ingrese un correo valido.
        </span>
      )}
      {errors.correo && errors.correo.type === "minLength" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Ingrese más de 2 caracteres.
        </span>
      )}
      <h4 className="pl-4  mb-2 text-textColor text-base font-body font-bold">
        Mensaje <span className="text-red-600">*</span>
      </h4>
      <textarea
        {...register("message", { required: true, minLength: 3 })}
        name="message"
        className="py-3 px-4 rounded-lg w-full mb-6"
        id=""
        cols={30}
        rows={5}
      ></textarea>
      {errors.message && errors.message.type === "required" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Por favor, deje un mensaje
        </span>
      )}
      {errors.message && errors.message.type === "minLength" && (
        <span className="text-red-600 inline-block mb-5 font-body font-bold">
          Ingrese más de 2 caracteres.
        </span>
      )}
      <button
        type="submit"
        className="bg-white font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3 hover:bg-black hover:text-white transition duration-300 ease-in-out"
      >
        ENVIAR MENSAJE
      </button>
    </form>
  );
};

export default FormContacto;
