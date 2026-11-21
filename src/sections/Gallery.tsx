import { useState } from "react";
import { gallery } from "../data/gallery";
import { asset } from "../utils/assets";
import { Section } from "../components/Section";
import { Modal } from "../components/Modal";
import { Icon } from "../components/Icon";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const img = index === null ? null : gallery[index];

  return (
    <Section id="galeria" title="Galería" intro="Capturas, interfaces y procesos de desarrollo.">
      <ul className="grid grid--gallery">
        {gallery.map((g, i) => (
          <li key={g.src} className="reveal">
            <button className="gallery__item" onClick={() => setIndex(i)} aria-label={`Ampliar: ${g.alt}`}>
              <img src={asset(g.src)} alt={g.alt} loading="lazy" width={1280} height={720} />
            </button>
          </li>
        ))}
      </ul>
      <Modal open={img !== null} onClose={() => setIndex(null)} label="Imagen ampliada" className="modal--lightbox">
        {img && (
          <figure className="lightbox">
            <button className="modal__close" onClick={() => setIndex(null)} aria-label="Cerrar">
              <Icon name="close" />
            </button>
            <img src={asset(img.src)} alt={img.alt} />
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        )}
      </Modal>
    </Section>
  );
}
