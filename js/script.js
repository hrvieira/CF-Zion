var tituloElement = document.querySelector('.titulo');

tituloElement.textContent = tituloElement.textContent.toUpperCase();

// Obtém uma NodeList de todos os elementos com a classe 'itemLista'
var listaItens = document.querySelectorAll('.itemLista');

listaItens.forEach(function(item) {
  item.addEventListener('click', function() {
    
    var itemId = item.id;

    switch (itemId) {
      case 'sobreCFZion':
        window.location.href = 'https://www.canva.com/design/DAFwfs76n7Y/VVxLryV_YLkNTD9ocI9FxA/edit';
        break;
      case 'agendarAula':
        window.location.href = 'https://app.tecnofit.com.br/ng/online-scheduling';
        break;
      case 'gympassItem':
        window.location.href = 'https://www.gympass.com/negocios/cf-zion-rj';
        break;
      case 'CAT':
        window.location.href = 'https://api.whatsapp.com/send?phone=5521975584574';
        break;
      default:
        break;
    }
  });
});
