export const PRIVATE_DOSSIER_PATH = '/comite-sdie-2026';
export const PRIVATE_DOSSIER_HASH = '#/comite-sdie-2026';

export function isPrivateDossierAccess() {
  const hash = window.location.hash;
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  return (
    hash === PRIVATE_DOSSIER_HASH ||
    path === PRIVATE_DOSSIER_PATH ||
    path.endsWith(PRIVATE_DOSSIER_PATH)
  );
}

export function clearPrivateDossierRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const basePath =
    path === PRIVATE_DOSSIER_PATH || path.endsWith(PRIVATE_DOSSIER_PATH)
      ? '/'
      : path;

  window.history.replaceState(null, '', `${basePath}${window.location.search}`);
}
