
document.addEventListener('DOMContentLoaded', () => {

  // Obtener todos los elementos "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Verificar si hay algún elemento "navbar-burger"
  if ($navbarBurgers.length > 0) {

    // Agregar un evento de clic a cada uno de ellos
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Obtener el objetivo del botón "navbar-burger"
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Cambiar la clase "is-active" en ambos el botón "navbar-burger" y el menú "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
