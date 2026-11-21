import { mailtoUrl, profile, whatsappUrl } from "../data/profile";
import { Icon } from "../components/Icon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <nav aria-label="Contacto" className="footer__links">
          <a href={mailtoUrl}>
            <Icon name="mail" size={16} /> {profile.email}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={16} /> GitHub
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
