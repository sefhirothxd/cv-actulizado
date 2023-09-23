'use client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contacto = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	const onSubmit = async (data) => {
		console.log(data);
		await axios
			.post('https://expresscrud-production.up.railway.app/sendEmail', data)
			.then((res) => {
				console.log(data.name);
				toast.success(`El mensaje fue enviado.Gracias ${data.name}`);
			})
			.catch((err) => console.log(err));
		reset();
	};

	return (
		<div className="py-20 max-w-550 mx-auto ">
			<div className="mb-4" id="hablemos">
				<h3 className="md:block md:text-center lg:text-34px py-4 shadow-showTitle mb-5 inline-block bg-greenLight px-2 text-black text-2xl">
					HABLEMOS
				</h3>
				<p className="md:text-center text-textColor text-base leading-6 font-body font-normal">
					Si está interesado en trabajar conmigo en su próximo proyecto, no dude
					en ponerse en contacto conmigo.
				</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h4 className="pl-4 mb-2 text-textColor text-base font-body font-bold">
					Nombre completo <span className="text-red-600">*</span>
				</h4>
				<input
					{...register('name', { required: true, minLength: 3 })}
					name="name"
					className="py-3 mb-4 px-4 rounded-lg w-full"
					type="text"
					placeholder="juan"
				/>
				{errors.name && errors.name.type === 'required' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Por favor, ingrese su nombre.
					</span>
				)}
				{errors.name && errors.name.type === 'minLength' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Ingrese más de 2 caracteres.
					</span>
				)}
				<h4 className="pl-4 mb-2 text-textColor text-base font-body font-bold">
					Correo electrónico <span className="text-red-600">*</span>
				</h4>
				<input
					{...register('email', {
						required: true,
						minLength: 3,
						pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					})}
					name="email"
					type="text"
					className=" mb-4 py-3 px-4 rounded-lg w-full"
					placeholder="juan@gmail.com"
				/>
				{errors.email && errors.email.type === 'required' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Por favor, ingrese su correo.
					</span>
				)}
				{errors.email && errors.email.type === 'pattern' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Por favor, ingrese un correo valido.
					</span>
				)}
				{errors.email && errors.email.type === 'minLength' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Ingrese más de 2 caracteres.
					</span>
				)}
				<h4 className="pl-4  mb-2 text-textColor text-base font-body font-bold">
					Mensaje <span className="text-red-600">*</span>
				</h4>
				<textarea
					{...register('message', { required: true, minLength: 3 })}
					name="message"
					className="py-3 px-4 rounded-lg w-full mb-2"
					id=""
					cols="30"
					rows="5"
				></textarea>
				{errors.message && errors.message.type === 'required' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Por favor, deje un mensaje
					</span>
				)}
				{errors.message && errors.message.type === 'minLength' && (
					<span className="text-red-600 inline-block mb-5 font-body font-bold">
						Ingrese más de 2 caracteres.
					</span>
				)}
				<button
					type="submit"
					className="bg-greenLight font-body text-14px font-bold border-textColor border-2 rounded-full w-full py-3"
				>
					ENVIAR MENSAJE
				</button>
			</form>
		</div>
	);
};

export default Contacto;
