import { useState } from "react";

interface Props {
  name: string;
  icon?: string;
  invert?: boolean;
  size?: number;
}

// Logo desde devicon (CDN). Si no carga o no hay slug, muestra la inicial.
export function TechIcon({ name, icon, invert, size = 22 }: Props) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span className="tech-fallback" style={{ width: size, height: size }} aria-hidden="true">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <img
      className={invert ? "tech-icon tech-icon--invert" : "tech-icon"}
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
