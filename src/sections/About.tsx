import { highlights } from "../data/profile";
import { asset } from "../utils/assets";
import { Icon, type IconName } from "../components/Icon";
import { Section } from "../components/Section";

const icons: IconName[] = ["code", "book", "users", "bolt"];

export function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about">
        <div className="about__text reveal">
          <p>
            Soy Tadeo Oquendo, de Manta, Ecuador. Estudio Ingeniería de Software en la Universidad Laica Eloy Alfaro de
            Manabí (ULEAM) y me apasiona la tecnología y el desarrollo de soluciones digitales.
          </p>
          <p>
            Me enfoco en aprender constantemente, mejorar mis habilidades y construir proyectos propios. Antes de la
            universidad trabajé en atención al cliente en CELLMAX Mobile, donde reforcé la comunicación, la
            responsabilidad y el trabajo en equipo.
          </p>
          <ul className="highlights">
            {highlights.map((h, i) => (
              <li key={h}>
                <Icon name={icons[i]} size={22} />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <img
          className="about__visual reveal"
          src={asset("images/about.webp")}
          alt="Formas geométricas translúcidas con el símbolo de código"
          loading="lazy"
          width={896}
          height={218}
        />
      </div>
    </Section>
  );
}
