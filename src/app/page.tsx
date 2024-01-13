import Header from "../components/Header";
import Presentacion from "../components/Presentacion";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main
      className="min-h-screen md:px-12 px-[10px]  max-w-7xl mx-auto"
      id="main"
    >
      <Header />
      <Presentacion />
      <Proyectos />
      <Contacto />
      <Footer />
      <ToastContainer />
    </main>
  );
}
