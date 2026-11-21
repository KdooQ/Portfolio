import { skillCategories } from "../data/skills";
import { Section } from "../components/Section";
import { TechIcon } from "../components/TechIcon";

export function Skills() {
  return (
    <Section
      id="tecnologias"
      title="Tecnologías y habilidades"
      intro="Herramientas y áreas en las que trabajo, practico y sigo aprendiendo."
    >
      <div className="grid grid--skills">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="card reveal">
            <h3>{cat.title}</h3>
            <ul className="skill-list">
              {cat.items.map((s) => (
                <li key={s.name}>
                  {s.icon && <TechIcon name={s.name} icon={s.icon} invert={s.invert} />}
                  <span>{s.name}</span>
                  {s.level && <small>{s.level}</small>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
