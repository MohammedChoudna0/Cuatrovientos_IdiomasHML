
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

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function() {
  myFunction();
};



// Función para animar el contador de 0 al valor especificado
function animarContador(contadorElemento, valorFinal, duracion) {
  var valorInicial = 0;
  var incremento = Math.ceil(valorFinal / (duracion / 10)); // Incremento cada 10 ms

  var intervalo = setInterval(function() {
    valorInicial += incremento;
    if (valorInicial >= valorFinal) {
      valorInicial = valorFinal;
      clearInterval(intervalo);
    }
    contadorElemento.innerHTML = valorInicial;
  }, 10);
}

// Obtener elementos del contador por su ID
var contadorElemento1 = document.getElementById('stats_counter1');
var contadorElemento2 = document.getElementById('stats_counter2');
var contadorElemento3 = document.getElementById('stats_counter3');
var contadorElemento4 = document.getElementById('stats_counter4');
// Agrega más variables para cada instancia adicional del contador

// Valores y duración del contador
var contadorValor1 = 15; // Valor final del contador 1
var contadorValor2 = 91; // Valor final del contador 2
var contadorValor3 = 1000; // Valor final del contador 1
var contadorValor4 = 2000; // Valor final del contador 2
// Agrega más valores y duraciones para cada instancia adicional del contador

function iniciarAnimacion() {
  // Iniciar la animación del contador para cada instancia
  animarContador(contadorElemento1, contadorValor1, 3500); // Duración: 2.5 segundos
  animarContador(contadorElemento2, contadorValor2,2500); // Duración: 3.5 segundos
  animarContador(contadorElemento3, contadorValor3, 2500); // Duración: 2.5 segundos
  animarContador(contadorElemento4, contadorValor4, 2500);
  // Inicia la animación para cada instancia adicional del contador
}

var seccion = document.getElementById('stats_section');
var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    observer.disconnect();
    iniciarAnimacion();
  }
});

observer.observe(seccion);

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.scroll-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

function openModal() {
  var modal = document.getElementById('modal');
  modal.classList.add('is-active');
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.classList.remove('is-active');
}

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modal');
  document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});


