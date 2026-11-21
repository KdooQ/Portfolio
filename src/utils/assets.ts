// Resuelve rutas de public/ respetando la base configurada en vite.config.ts.
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
