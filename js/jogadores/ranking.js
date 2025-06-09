export function atualizarRankingJogadores() {
  const rankingDiv = document.getElementById('ranking-jogadores');
  const ordenados = [...window.jogadores].sort((a, b) => b.total - a.total);

  const medalhas = [
    '<span class="medalha medalha-ouro"><i class="fa-solid fa-crown"></i></span>',
    '<span class="medalha medalha-prata"><i class="fa-solid fa-medal"></i></span>',
    '<span class="medalha" style="color:#cd7f32"><i class="fa-solid fa-award"></i></span>'
  ];

  const titulos = [
    'Magnata',
    'Gastador',
    'Pão duro'
  ];

  let podioHtml = '';
  for (let i = 0; i < 3; i++) {
    const jogador = ordenados[i];
    podioHtml += `
      <div class="ranking-top" style="color:${i === 0 ? 'var(--accent)' : i === 1 ? 'silver' : '#cd7f32'}">
        ${medalhas[i] || ''}
        <span>
          <strong>${jogador ? jogador.nome : '-'}</strong>
          <span class="titulo-podio">${jogador ? titulos[i] : ''}</span>
        </span>
        <span class="valor-gasto">${jogador ? '$' + jogador.total.toLocaleString() : '-'}</span>
      </div>
    `;
  }

  rankingDiv.innerHTML = `
    <div class="ranking-box">
      <h3><i class="fa-solid fa-ranking-star"></i> Ranking de Gastos</h3>
      <div class="ranking-destaques">
        ${podioHtml}
      </div>
    </div>
  `;
}
