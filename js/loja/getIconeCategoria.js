export function getIconeCategoria(categoria) {
  const icones = {
    'armas': 'fa-gun',
    'upgrades': 'fa-arrow-up',
    'cura': 'fa-heart',
    'ferramentas': 'fa-screwdriver-wrench',
    'arremessaveis': 'fa-bomb'
  };
  return icones[categoria] || 'fa-list';
}
