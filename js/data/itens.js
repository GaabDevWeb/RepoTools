export const itensLoja = [
  // Armas
  { 
    nome: "Martelo Inflável", 
    preco: 9000, 
    categoria: "armas", 
    imagem: "marteloInflavel.jpg",
    descricao: "Tem ~24 acertos antes de precisar recarregar. Tem ~5% de chance de causar uma explosão, causando 250 pontos de dano."
  },
  { 
    nome: "Espada", 
    preco: 25000, 
    categoria: "armas",
    imagem: "espada.jpg",
    descricao: "Tem 10 acertos antes de precisar recarregar. Arma rápida, causa dano."
  },
  { 
    nome: "Frigideira", 
    preco: 25000, 
    categoria: "armas",
    imagem: "frigideira.jpg",
    descricao: "Tem 12-15 acertos antes de precisar recarregar. Causa dano a jogadores (fora da loja) e monstros, pode derrubar inimigos pequenos."
  },
  { 
    nome: "Taco de Beisebol", 
    preco: 26000, 
    categoria: "armas",
    imagem: "tacoBeisebol.jpg",
    descricao: "Tem 6 acertos até precisar recarregar. Causa breve atordoamento e enorme repulsão. Devido à força, muitos inimigos levam 25 de dano por acerto."
  },
  { 
    nome: "Marreta", 
    preco: 45000, 
    categoria: "armas",
    imagem: "marreta.jpg",
    descricao: "Tem 6 acertos antes de recarregar. Arma pesada, força não facilita o uso. Excelente para empurrar inimigos atordoados."
  },
  { 
    nome: "Pistola Tranquilizante", 
    preco: 16000, 
    categoria: "armas",
    imagem: "pistolaTranquilizante.jpg",
    descricao: "Tem 3 tiros antes de recarregar. Pode atordoar qualquer inimigo por ~15 segundos."
  },
  { 
    nome: "Pistola", 
    preco: 45000, 
    categoria: "armas",
    imagem: "pistola.jpg",
    descricao: "Tem 6 tiros antes de precisar recarregar."
  },
  { 
    nome: "Espingarda", 
    preco: 94000, 
    categoria: "armas",
    imagem: "espingarda.jpg",
    descricao: "Tem 3 tiros antes de recarregar. Dispara 5 projéteis causando 50 de dano cada."
  },
  
  // Upgrades
  { 
    nome: "Força", 
    preco: 7000, 
    categoria: "upgrades",
    imagem: "upgradeForca.jpg",
    descricao: "Aumenta sua Força em 25% (Máximo de 2 em circulação)."
  },
  { 
    nome: "Resistência", 
    preco: 2000, 
    categoria: "upgrades",
    imagem: "upgradeResistencia.jpg",
    descricao: "Aumenta a Resistência máxima em 10 (Máximo de 4 em circulação)."
  },
  { 
    nome: "Saúde", 
    preco: 7000, 
    categoria: "upgrades",
    imagem: "upgradeVida.jpg",
    descricao: "Aumenta a Saúde máxima em 20 (Máximo de 2 em circulação)."
  },
  { 
    nome: "Corrida", 
    preco: 8000, 
    categoria: "upgrades",
    imagem: "upgradeVelocidade.jpg",
    descricao: "Aumenta a velocidade de corrida em 20% (Máximo de 3 em circulação)."
  },
  { 
    nome: "Salto Extra", 
    preco: 11000, 
    categoria: "upgrades",
    imagem: "upgradePuloDuplo.jpg",
    descricao: "Aumenta a quantidade máxima de pulos no ar (Máximo de 1 em circulação)."
  },
  { 
    nome: "Contagem de Jogadores", 
    preco: 11000, 
    categoria: "upgrades",
    imagem: "upgradeRadar.jpg",
    descricao: "Mostra quantos jogadores estão vivos no mapa (Máximo de 1, não reaparece no mesmo save)."
  },
  { 
    nome: "Lançamento de Queda", 
    preco: 5000, 
    categoria: "upgrades",
    imagem: "upgradeLancamento.jpg",
    descricao: "Aumenta a força do lançamento durante quedas (Máximo de 1 em circulação)."
  },
  { 
    nome: "Alcance", 
    preco: 10000, 
    categoria: "upgrades",
    imagem: "upgradeAlcance.jpg",
    descricao: "Aumenta seu alcance de coleta em 30% (Máximo de 3 podem estar em circulação ao mesmo tempo)."
  },

  { 
    nome: "Descanso Agachado", 
    preco: 3500, 
    categoria: "upgrades",
    imagem: "upgradeAsas.jpg",
    descricao: "Aumenta a velocidade de regeneração de resistência enquanto agachado."
  },
  
  // Cura
  { 
    nome: "Pequeno Pacote de Saúde", 
    preco: 4000, 
    categoria: "cura",
    imagem: "kitCuraPequeno.jpg",
    descricao: "Cura 25 de HP."
  },
  { 
    nome: "Pacote de Saúde Médio", 
    preco: 7000, 
    categoria: "cura",
    imagem: "kitCuraMedio.jpg",
    descricao: "Cura 50 de HP."
  },
  { 
    nome: "Pacote de Saúde Grande", 
    preco: 10000, 
    categoria: "cura",
    imagem: "kitCuraGrande.jpg",
    descricao: "Cura 100 de HP."
  },
  
  // Ferramentas
  { 
    nome: "Rastreador Valioso", 
    preco: 15000, 
    categoria: "ferramentas",
    imagem: "detectorTesouros.jpg",
    descricao: "Quando ativado [E], aponta para o tesouro desconhecido mais próximo."
  },
  { 
    nome: "Rastreador de Extração", 
    preco: 6000, 
    categoria: "ferramentas",
    imagem: "detectorExtracao.jpg",
    descricao: "Quando ativado [E], aponta para a zona de extração inativa mais próxima."
  },
  { 
    nome: "Carrinho de Bolso", 
    preco: 17000, 
    categoria: "ferramentas",
    imagem: "carrinhoBolso.jpg",
    descricao: "Uma C.A.R.T. menor que pode ser armazenada no inventário."
  },
  { 
    nome: "Carrinho", 
    preco: 42000, 
    categoria: "ferramentas",
    imagem: "carrinhoGrande.jpg",
    descricao: "A C.A.R.T. grande com a qual você começa o jogo."
  },
  { 
    nome: "Cristal de Energia", 
    preco: 8000, 
    categoria: "ferramentas",
    imagem: "cristalEnergia.jpg",
    descricao: "Cada cristal fornece 5 barras de energia, recarregando completamente um único item."
  },
  { 
    nome: "Drone de Recarga", 
    preco: 4000, 
    categoria: "ferramentas",
    imagem: "droneRecarga.jpg",
    descricao: "Pode ser acoplado a um item recarregável para recarregá-lo (5 barras/s)."
  },
  { 
    nome: "Drone Indestrutível", 
    preco: 23000, 
    categoria: "ferramentas",
    imagem: "droneIndestrutivel.jpg",
    descricao: "Torna o item acoplado indestrutível, prevenindo danos."
  },
  { 
    nome: "Drone de Rolamento", 
    preco: 9000, 
    categoria: "ferramentas",
    imagem: "droneRolamento.jpg",
    descricao: "Faz o jogador/inimigo/item rolar quando acoplado."
  },
  { 
    nome: "Drone de Pena", 
    preco: 15000, 
    categoria: "ferramentas",
    imagem: "dronePena.jpg",
    descricao: "Permite pular mais alto e cair mais devagar. Torna itens e inimigos (atordoados) muito leves."
  },
  { 
    nome: "Drone Zero-G", 
    preco: 23000, 
    categoria: "ferramentas",
    imagem: "droneGravidade.jpg",
    descricao: "Permite pular mais alto e cair mais devagar. Pode ser usado para manter itens no ar."
  },
  { 
    nome: "Balde de Pato", 
    preco: 5000, 
    categoria: "ferramentas",
    imagem: "baldePato.jpg",
    descricao: "Pode ser colocado em cima de um pato para reduzir drasticamente seu movimento."
  },
  
  // Arremessáveis
  { 
    nome: "Granada", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "granada.jpg",
    descricao: "Causa uma pequena explosão que danifica monstros próximos."
  },
  { 
    nome: "Granada Humana", 
    preco: 2000, 
    categoria: "arremessaveis",
    imagem: "granadaHumana.jpg",
    descricao: "Causa uma pequena explosão que danifica monstros e jogadores."
  },
  { 
    nome: "Granada com Fita Adesiva", 
    preco: 2000, 
    categoria: "arremessaveis",
    imagem: "granadaFita.jpg",
    descricao: "Explode e depois projeta 3 Granadas Humanas, causando dano em área."
  },
  { 
    nome: "Granada de Onda de Choque", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaChoque.jpg",
    descricao: "Atordoa monstros ou jogadores quando ativada após 5s."
  },
  { 
    nome: "Orbe de Gravidade Zero", 
    preco: 45000, 
    categoria: "arremessaveis",
    imagem: "orbeGravidade.jpg",
    descricao: "Cria um campo de gravidade zero. Itens mantêm sua inércia dentro do campo."
  },
  { 
    nome: "Pato de Borracha", 
    preco: 16000, 
    categoria: "arremessaveis",
    imagem: "patoBorracha.jpg",
    descricao: "Quando lançado, tem 10% de chance de explodir (250 de dano). Com velocidade suficiente, causa 50 de dano no impacto."
  },
  { 
    nome: "Mina de Choque", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaChoque.jpg",
    descricao: "Ativada com [E]. Após 5s, empurra monstros/jogadores quando acionada."
  },
  { 
    nome: "Mina Explosiva", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaExplosiva.jpg",
    descricao: "Ativada com [E]. Após 5s, causa 200 de dano a monstros quando acionada."
  },
  { 
    nome: "Mina Atordoante", 
    preco: 3000, 
    categoria: "arremessaveis",
    imagem: "minaAtordoante.jpg",
    descricao: "Quando acionada, voa em direção ao monstro, atordoando-o com eletricidade."
  },
  { 
    nome: "Prodzap", 
    preco: 12000, 
    categoria: "arremessaveis",
    imagem: "prodzap.jpg",
    descricao: "Arma beta que causa efeito elétrico (dano/controle não especificado)."
  }
];

