var tituloElement = document.querySelector('.titulo');

tituloElement.textContent = tituloElement.textContent.toUpperCase();

document.addEventListener('DOMContentLoaded', function() {
  
  var lista = document.getElementById('minhaLista');

  var itens = lista.getElementsByClassName('itemLista');

  for (var i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function() {
      var url = this.getAttribute('data-url');

      window.location.href = url;
    });
  }
});
