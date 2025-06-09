export function mostrarModalJogador() {
  document.getElementById('modal-jogador').style.display = 'flex';
}

export function abrirModalJogador() {
  document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selecionado'));
  document.querySelectorAll('input[name="avatar"]').forEach(radio => radio.checked = false);

  const uploadLabel = document.querySelector('.avatar-option label[for="upload-avatar"]');
  if (uploadLabel) {
    uploadLabel.style.backgroundImage = '';
    uploadLabel.style.color = '';
  }

  document.getElementById('foto-jogador').value = '';
  document.getElementById('modal-jogador').style.display = 'flex';
}

document.getElementById('adicionar-jogador').onclick = abrirModalJogador;

window.handleAvatarUpload = function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    document.querySelectorAll('input[name="avatar"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selecionado'));

    document.getElementById('foto-jogador').value = e.target.result;

    const uploadButton = document.querySelector('.avatar-option label[for="upload-avatar"]');
    uploadButton.style.backgroundImage = `url(${e.target.result})`;
    uploadButton.style.backgroundSize = 'cover';
    uploadButton.style.backgroundPosition = 'center';
    uploadButton.style.color = 'transparent';
    uploadButton.parentElement.classList.add('selecionado');
  };
  reader.readAsDataURL(file);
};
