document.getElementById('contact-form')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    'Olá, Dr. Diego. Gostaria de solicitar informações sobre atendimento jurídico.',
    '',
    `Nome: ${data.get('nome')}`,
    `Telefone: ${data.get('telefone')}`,
    `Assunto: ${data.get('assunto')}`,
    `Mensagem: ${data.get('mensagem')}`
  ].join('\n');
  window.open(`https://wa.me/5598984079574?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
