import { mailtoUrl, profile, whatsappUrl } from "../data/profile";
import { Section } from "../components/Section";
import { Icon } from "../components/Icon";

export function Contact() {
  return (
    <Section
      id="contacto"
      title="Contacto"
      intro="¿Tienes una idea, una oportunidad o quieres conversar? Escríbeme."
    >
      <div className="contact reveal">
        <a className="btn btn--primary btn--lg" href={mailtoUrl}>
          <Icon name="mail" /> Contactar por correo
        </a>
        <a className="btn btn--ghost btn--lg" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" /> Contactar por WhatsApp
        </a>
      </div>
      <p className="contact__detail reveal">
        {profile.email}
      </p>
      {(profile.github || profile.linkedin) && (
        <p className="contact__social reveal">
          {profile.github && (
            <a className="link-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={16} /> GitHub
            </a>
          )}
          {profile.linkedin && (
            <a className="link-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={16} /> LinkedIn
            </a>
          )}
        </p>
      )}
    </Section>
  );
}
