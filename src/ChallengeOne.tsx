import {Link} from "react-router-dom";

import RoundItem from "./components/RoundItem";
import "./ChallengeOne.css";

const marketing = [
  {text: "PROTOTYPING", color: "#015aff"},
  {text: "BRANDING", color: "#b302fe"},
  {text: "DESIGN", color: "#00ff43"},
  {text: "STRATEGY", color: "#ff2b03"},
];

const brands = [
  {url: "./challenge-1/brand1.webp", name: "ecooxygen"},
  {url: "./challenge-1/brand2.webp", name: "techcube"},
  {url: "./challenge-1/brand3.webp", name: "touch"},
  {url: "./challenge-1/brand4.webp", name: "cloudbar"},
  {url: "./challenge-1/brand5.webp", name: "growth"},
];

function ChallengeOne() {
  return (
    <div className="container d-grid">
      <header className="d-flex py-3 mb-5">
        <Link className="align-self-center" to={"/"}>
          <img alt="Home logo del primer challenge" src="./challenge-1/logo.webp" />
        </Link>
        <img
          alt="Icono del menu"
          className="rounded-circle border border-black border-2 p-3 ms-auto"
          src="./challenge-1/menu.webp"
        />
      </header>
      <main className="m-3 mb-5">
        <section className="d-flex flex-wrap justify-content-evenly m-5 gap-4">
          {marketing.map((item) => (
            <RoundItem key={item.text} color={item.color} text={item.text} />
          ))}
        </section>
      </main>
      <section>
        <h2 className="fw-bold text-center pt-2 my-5">
          We worked with the world&rsquo;s biggest brands
        </h2>
        <div className="d-flex justify-content-around align-items-center flex-wrap gap-3 pt-2 px-3 mb-5">
          {brands.map((brand) => (
            <img key={brand.name} alt={brand.name} src={brand.url} />
          ))}
        </div>
      </section>
      <footer>
        <p>
          Datos de contacto: <strong>nicopedranti@gmail.com</strong>
        </p>
        <p>
          Entrego el challenge n°1, utilizando Vite con React y TypeScript. Disfruto mucho este tipo
          de desafíos donde se debe replicar una imagen o diseño con exactitud. Personalmente, no
          soy muy fan de Bootstrap, ya que utiliza con frecuencia la propiedad !important en sus
          clases, lo que a veces dificulta la personalización con CSS propio. Prefiero usar Tailwind
          en su lugar. El repositorio está preparado para abordar los otros tres desafíos, pero por
          ahora entrego el primero, con el cual estoy satisfecho con el resultado.
        </p>
      </footer>
    </div>
  );
}

export default ChallengeOne;
