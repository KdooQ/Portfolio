# Portafolio · Tadeo Oquendo

Portafolio profesional de Ingeniería de Software. Sitio estático hecho con **React + TypeScript + Vite**, sin backend, publicado en **GitHub Pages**.

## Tecnologías
React 19 · TypeScript · Vite · HTML5 · CSS3 · Git/GitHub · GitHub Actions. Sin librerías extra (iconos propios en SVG, modales con `<dialog>` nativo).

## Requisitos
- Node.js 20.19 o superior (recomendado 22) y npm
- Git

## Ejecución local
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # compila a dist/
npm run preview  # prueba la versión compilada
```
Haz commit de `package-lock.json` (se crea con el primer `npm install`): el workflow lo necesita.

## Estructura
```
src/
  components/  Header, Modal, ProjectCard, ProjectModal, Icon, TechIcon, Section
  sections/    Hero, About, Skills, Projects, Gallery, Education, Contact, Footer
  data/        profile.ts, skills.ts, projects.ts, gallery.ts   <- aquí editas contenido
  types/       tipos de TypeScript
  utils/       assets.ts (rutas), useReveal.ts (animaciones)
  styles/      global.css
public/
  favicon.svg
  images/ hero.webp, about.webp, projects/<slug>/, gallery/
.github/workflows/deploy.yml
```

## Agregar un proyecto (solo 1 archivo + imágenes)
1. Crea la carpeta `public/images/projects/mi-proyecto/` y copia ahí su portada y capturas (idealmente `.webp`, máx. ~200 KB c/u).
2. Abre `src/data/projects.ts` y copia el objeto de ejemplo dentro del arreglo `projects`:
```ts
{
  id: "mi-proyecto",
  slug: "mi-proyecto",
  title: "Mi proyecto",
  description: "Frase corta para la tarjeta.",
  longDescription: "Descripción completa que se ve al pulsar «Ver proyecto».",
  coverImage: "images/projects/mi-proyecto/cover.webp",
  gallery: ["images/projects/mi-proyecto/1.webp"],
  technologies: ["TypeScript", "Python"],
  features: ["Qué hace 1", "Qué hace 2"],
  status: "terminado",          // "demo" | "en-desarrollo" | "terminado"
  featured: true,
  githubUrl: "https://github.com/KdooQ/mi-proyecto",
  demoUrl: "https://kdooq.github.io/mi-proyecto/",   // opcional
}
```
- **Modificar descripción / tecnologías / enlaces:** edita los campos del objeto.
- **Eliminar:** borra el objeto (y su carpeta de imágenes).
- Sin `githubUrl` o `demoUrl`, el botón correspondiente no aparece.
- Borra el «Proyecto de ejemplo» cuando agregues el real.

## Cambiar imágenes
- Hero y «Sobre mí»: reemplaza `public/images/hero.webp` y `about.webp` (mismo nombre).
- Galería: pon la imagen en `public/images/gallery/` y añade una línea en `src/data/gallery.ts`.
- Rutas siempre **sin `/` inicial** (`images/...`).

## Modificar mi información y enlaces
Todo está en `src/data/profile.ts`: nombre, descripción, correo, WhatsApp, mensaje inicial, formación y experiencia.
- **LinkedIn:** pega la URL en `linkedin` (vacío = oculto). Igual con `github`.
- **Tecnologías:** `src/data/skills.ts` (agrega un objeto; `icon` es un slug de [devicon.dev](https://devicon.dev); `level` solo si quieres mostrar nivel).

## Publicar en GitHub Pages
1. Sube el proyecto a `https://github.com/KdooQ/Portfolio` (rama `main`):
```bash
git add .
git commit -m "Portafolio con React + Vite"
git push origin main
```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml` y republica. La URL será `https://kdooq.github.io/Portfolio/`.

`vite.config.ts` usa `base: "./"` (rutas relativas), así funciona igual en `USUARIO.github.io`, en `USUARIO.github.io/REPO/` y con dominio propio: no hay que cambiar nada al renombrar el repositorio.

## Dominio propio (opcional, más adelante)
1. Compra o activa el dominio (p. ej. el de GitHub Education).
2. Settings → Pages → *Custom domain* y escríbelo.
3. En tu proveedor DNS: registro `CNAME` de `www` hacia `kdooq.github.io` (o registros `A` de GitHub para el dominio raíz; ver docs de GitHub Pages).
4. Si el dominio vence, quítalo en Pages: el sitio sigue en `kdooq.github.io/Portfolio/`.

## Problemas frecuentes
- **Página en blanco tras publicar:** Pages debe tener *Source: GitHub Actions*, no «Deploy from a branch».
- **El workflow falla en `npm ci`:** falta `package-lock.json` en el repositorio.
- **Imagen no aparece:** revisa mayúsculas/minúsculas y que la ruta no empiece con `/`.
- **Logos de tecnologías muestran una letra:** no hay internet o el slug de devicon es incorrecto.
- **`npm run build` falla por tipos:** el error indica el archivo y la línea; casi siempre es un campo faltante en `projects.ts`.
