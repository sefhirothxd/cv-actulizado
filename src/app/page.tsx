import Header from '../components/Header';
import Presentacion from '../components/Presentacion';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen  px-12 max-w-7xl mx-auto">
			<Header />
			<Presentacion />
			<Proyectos />
			<Contacto />
			<Footer />
		</main>
	);
}
