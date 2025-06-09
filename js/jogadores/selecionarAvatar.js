export function selecionarAvatar(avatar) {
  // Marca o radio
  const radio = document.querySelector(`input[name="avatar"][value="${avatar}"]`);
  if (radio) radio.checked = true;

  // Remove seleção anterior
  document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selecionado'));

  // Adiciona classe ao selecionado
  const opt = Array.from(document.querySelectorAll('.avatar-option')).find(div =>
    div.querySelector(`input[name="avatar"][value="${avatar}"]`)
  );
  if (opt) opt.classList.add('selecionado');
}
window.selecionarAvatar = selecionarAvatar;