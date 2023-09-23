import Image from 'next/image';
import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center px-12 max-w-7xl mx-auto">
			<Header />
			<Presentacion />
			<Proyectos />
			<Contacto />
			<Footer />
		</main>
	);
}
