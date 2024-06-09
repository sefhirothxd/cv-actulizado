import Image from 'next/image';
import Link from 'next/link';

function Header() {
	return (
		<div className="bg-transparent flex justify-between pt-4 items-center w-full ">
			<div>
				<Image
					src="/logo.webp"
					width={100}
					height={100}
					alt="Logo bryan vera"
				/>
			</div>
			<nav className="hidden md:block">
				<ul className="flex justify-center items-center gap-6 text-sm text-textColor font-body font-bold">
					<li>
						<a href="#">HOLA</a>
					</li>
					<li className="opacity-50">
						<Link href="#proyectos">PROYECTOS</Link>
					</li>
					<li className="opacity-50">
						<a href="#hablemos">HABLEMOS</a>
					</li>
				</ul>
			</nav>
			<div className="bg-white font-bold py-3 px-6  border-gray-950 text-gray-950 border-solid rounded-full border-2 shadow-caja">
				<a href="CV_BryanVera.pdf" className="lg:hidden" target="_blank">
					CURRÍCULIM
				</a>
				<a href="CV_BryanVera.pdf" className="lg:block hidden" target="_blank">
					DESCARGAR CURRÍCULIM
				</a>
			</div>
		</div>
	);
}

export default Header;
