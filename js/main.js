import { itensLoja } from "./data/itens.js";
import { configurarListeners } from "./eventos/listeners.js";
import { toggleFavorito } from "./loja/toggleFavorito.js";
import { atualizarPrecoItem } from "./loja/atualizarPrecoItem.js";
import { toggleFiltro } from "./loja/toggleFiltro.js";
import "./jogadores/removerJogador.js";
import "./jogadores/selecionarAvatar.js";

window.itensLoja = itensLoja; 
window.jogadores = [];
window.filtrosAtivos = ["todos"];
window.filtroAtivo = "todos";
window.MAX_JOGADORES = 6;
window.draggedItem = null;

// Função para pegar o código da sala da URL
function getCodigoSala() {
    const params = new URLSearchParams(window.location.search);
    return params.get('sala') || '';
}

// Função para pegar o modo da URL
function getModo() {
    const params = new URLSearchParams(window.location.search);
    return params.get('modo') || 'single';
}

document.addEventListener('DOMContentLoaded', async () => {
    // Exibe o código da sala no topo, se existir
    const codigoSala = getCodigoSala();
    if (codigoSala) {
        let divTopo = document.getElementById('codigo-sala-topo');
        if (!divTopo) {
            divTopo = document.createElement('div');
            divTopo.id = 'codigo-sala-topo';
            divTopo.style.marginBottom = '16px';
            divTopo.style.fontSize = '1.1em';
            divTopo.style.color = '#ffd700';
            const h2 = document.querySelector('h2');
            if (h2) h2.insertAdjacentElement('afterend', divTopo);
            else document.body.insertBefore(divTopo, document.body.firstChild);
        }
        divTopo.textContent = `Código da sala: ${codigoSala}`;
    }

    // Detecta modo e carrega multiplayer se necessário
    const modo = getModo();
    if (modo === 'multi') {
        // Carrega sincronização multiplayer dinamicamente
        const { iniciarSyncSala } = await import('./multiplayer/syncSala.js');
        iniciarSyncSala(codigoSala);
    }

    configurarListeners();
});

window.getModo = getModo;