import { profile } from "../data/profile";
import { featuredTech } from "../data/skills";
import { asset } from "../utils/assets";
import { Icon } from "../components/Icon";
import { TechIcon } from "../components/TechIcon";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Portafolio · Ingeniería de Software</p>
          <h1 id="hero-title">
            Hola, soy <span>{profile.name}.</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyectos">
              <Icon name="folder" /> Ver mis proyectos <Icon name="arrow" size={16} />
            </a>
            <a className="btn btn--ghost" href="#contacto">
              <Icon name="mail" /> Contactarme
            </a>
          </div>
        </div>
        <img
          className="hero__visual"
          src={asset("images/hero.webp")}
          alt="Composición abstracta de una laptop con código y formas geométricas"
          width={696}
          height={325}
          fetchPriority="high"
        />
      </div>
      <div className="techbar">
        <div className="container techbar__row">
          <span className="techbar__label">Tecnologías que utilizo:</span>
          <ul>
            {featuredTech.map((t) => (
              <li key={t.name}>
                <TechIcon name={t.name} icon={t.icon} /> {t.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
