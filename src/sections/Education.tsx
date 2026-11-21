import { languages, softSkills, timeline } from "../data/profile";
import { Section } from "../components/Section";

export function Education() {
  return (
    <Section id="formacion" title="Formación y experiencia">
      <div className="edu">
        <ol className="timeline">
          {timeline.map((t) => (
            <li key={t.title} className="card reveal">
              <span className="eyebrow">{t.kind} · {t.period}</span>
              <h3>{t.title}</h3>
              <p className="muted">{t.place}</p>
              {t.text && <p>{t.text}</p>}
            </li>
          ))}
        </ol>
        <div className="edu__side">
          <div className="card reveal">
            <h3>Idiomas</h3>
            <ul className="skill-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <small>{l.level}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="card reveal">
            <h3>Habilidades personales</h3>
            <ul className="chips">
              {softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
