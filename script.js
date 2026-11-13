// Interacao do formulario de contato da Nova Tech
// O formulario abre uma conversa no WhatsApp com os dados preenchidos.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-glass');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]')?.value.trim() || '';
    const email = form.querySelector('input[type="email"]')?.value.trim() || '';
    const phone = form.querySelector('input[type="tel"]')?.value.trim() || '';
    const project = form.querySelector('select')?.value || '';
    const details = form.querySelector('textarea')?.value.trim() || '';

    const message = [
      'Ola! Gostaria de solicitar um orcamento pelo site Nova Tech.',
      '',
      'Nome: ' + name,
      'E-mail: ' + email,
      'WhatsApp: ' + phone,
      'Tipo de projeto: ' + project,
      'Descricao: ' + details
    ].join('\n');

    const whatsappUrl = 'https://wa.me/5511953782816?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
});
