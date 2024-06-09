import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="pb-6 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-10 xl:gap-28 lg:items-center">
			<div className="flex  justify-center items-center gap-x-4 mb-8 lg:mb-0">
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
					<Image src="/icon-twitter.svg" alt="twitter" width={30} height={30} />
				</a>
			</div>
			<div className="text-center lg:flex xl:pl-16">
				{/* <p className="text-textColor lg:mr-4 text-base font-body font-normal mb-2">
          Hecho por Bryan Vera
        </p> */}
				<p className="text-textColor text-base font-body tex font-normal">
					Copyright 2021 - Todos los derechos reservados.
				</p>
			</div>
			<div className="hidden lg:block">
				<Link href={'#main'}>
					<Image
						src="/logo.webp"
						width={100}
						height={100}
						alt="Logo bryan vera"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
