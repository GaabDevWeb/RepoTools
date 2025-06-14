export function atualizarRankingJogadores() {
  console.log("Atualizando ranking de jogadores...");
  const rankingDiv = document.getElementById('ranking-jogadores');
  if (!rankingDiv) {
    console.error("Elemento ranking-jogadores não encontrado!");
    return;
  }

  // Ordena os jogadores por total gasto
  const ordenados = [...window.jogadores].sort((a, b) => {
    const totalA = parseInt(a.total) || 0;
    const totalB = parseInt(b.total) || 0;
    return totalB - totalA;
  });

  console.log("Jogadores ordenados:", ordenados);

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
    const total = jogador ? parseInt(jogador.total) || 0 : 0;
    podioHtml += `
      <div class="ranking-top" style="color:${i === 0 ? 'var(--accent)' : i === 1 ? 'silver' : '#cd7f32'}">
        ${medalhas[i] || ''}
        <span>
          <strong>${jogador ? jogador.nome : '-'}</strong>
          <span class="titulo-podio">${jogador ? titulos[i] : ''}</span>
        </span>
        <span class="valor-gasto">${jogador ? '$' + total.toLocaleString() : '-'}</span>
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

  // Adiciona evento de clique para mostrar/esconder o ranking
  const rankingIcone = document.getElementById('ranking-icone');
  if (rankingIcone) {
    rankingIcone.onclick = () => {
      rankingDiv.style.display = rankingDiv.style.display === 'none' ? 'block' : 'none';
    };
  }

  // Esconde o ranking inicialmente
  rankingDiv.style.display = 'none';
}

// Adiciona a função ao objeto window para acesso global
window.atualizarRankingJogadores = atualizarRankingJogadores;
