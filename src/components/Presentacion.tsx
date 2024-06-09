import Image from 'next/image';

const Presentacion = () => {
	return (
		<div className="flex flex-col md:flex-row-reverse  md:justify-between w-full ">
			<figure
				data-aos="fade-left"
				className="border-2 lg:w-72 lg:self-center h-72 w-72 self-center my-10 md:my-36  flex items-end  overflow-hidden border-white rounded-full"
			>
				<Image
					src="/mifoto.webp"
					alt="persona con fondo morado y verde"
					className=" object-cover "
					width={500}
					height={500}
				/>
			</figure>
			<article
				data-aos="fade-right"
				className="flex flex-col  font-body max-w-lg md:pt-20 md:w-96 lg:w-full "
			>
				<p className="text-5xl pb-5 font-bold text-textColor">¡Hola a todos!</p>
				<h1 className="text-5xl font-bold pb-8 text-textColor">Soy Bryan</h1>
				<p className="leading-8 text-textColor text-xl text-justify ">
					Desarrollador Full Stack altamente capacitado, con experiencia probada
					en la resolución efectiva de problemas complejos. En constante
					búsqueda de nuevos retos y oportunidades para impulsar el desarrollo
					de la empresa y fomentar el crecimiento profesional tanto a nivel
					individual como organizacional.
				</p>
				<div className="flex justify-start gap-x-4 mt-8">
					<a
						href="https://www.facebook.com/bveraca"
						target="_blank"
						className="bg-slate-200 rounded  border-2 border-black h-12 w-12 flex justify-center items-center"
					>
						<Image src="/icon-face.svg" alt="facebook" width={15} height={15} />
					</a>
					<a
						href="https://github.com/sefhirothxd"
						target="_blank"
						className="bg-slate-200 rounded border-2 border-black h-12 w-12 flex justify-center items-center"
					>
						<Image src="/icon-github.svg" alt="github" width={30} height={30} />
					</a>
					<a
						href="https://www.linkedin.com/in/bryanvera"
						target="_blank"
						className="bg-slate-200 rounded border-2 border-black h-12 w-12 flex justify-center items-center"
					>
						<Image src="/linkedin.svg" alt="linkedin" width={30} height={30} />
					</a>
					<a
						href="https://twitter.com/bveracachay"
						target="_blank"
						className="bg-slate-200 rounded border-2 border-black h-12 w-12 flex justify-center items-center"
					>
						<Image
							src="/icon-twitter.svg"
							alt="twitter"
							width={30}
							height={30}
						/>
					</a>
				</div>
			</article>
		</div>
	);
};

export default Presentacion;
