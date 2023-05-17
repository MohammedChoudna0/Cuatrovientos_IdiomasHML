 // Obtener referencia al campo de entrada de fecha de nacimiento y los campos del tutor o los padres
 const fechaNacimientoInput = document.getElementById('fechaNacimiento');
 const camposTutor = document.getElementById('camposTutor'); // ID del contenedor de los campos del tutor o los padres
 
 // Ocultar los campos del tutor o los padres al cargar la página
 camposTutor.style.display = 'none';
 
 // Escuchar el evento de cambio en el campo de entrada de fecha de nacimiento
 fechaNacimientoInput.addEventListener('change', () => {
   const fechaNacimiento = new Date(fechaNacimientoInput.value);
   const hoy = new Date();
 
   // Calcular la diferencia de tiempo en milisegundos entre la fecha actual y la fecha de nacimiento
   const edadMilisegundos = hoy - fechaNacimiento;
 
   // Convertir la diferencia de tiempo a años
   const edadAnios = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
 
   // Mostrar u ocultar los campos del tutor o los padres según la edad
   if (edadAnios < 18) {
     camposTutor.style.display = 'block'; // Mostrar campos del tutor o los padres
   } else {
     camposTutor.style.display = 'none'; // Ocultar campos del tutor o los padres
   }
 });
 



window.onscroll = function() {
    myFunction();
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $(document).ready(function() {
    $('.navbar-burger').click(function() {
      $('.navbar-menu').toggleClass('is-active');
      $('.navbar-burger').toggleClass('is-active');
    });
  });  

  function animateCounter(elementId, finalValue, duration) {
    const startValue = 0;
    const startTime = new Date().getTime();

    function updateCounter() {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= duration) {
        document.getElementById(elementId).textContent = finalValue;
      } else {
        const progress = elapsedTime / duration;
        const currentValue = Math.round(progress * (finalValue - startValue));
        document.getElementById(elementId).textContent = currentValue;

        requestAnimationFrame(updateCounter);
      }
    }

    updateCounter();
  }

  // Función para iniciar la animación del contador cuando el elemento sea visible
  function startCounterWhenVisible(elementId, finalValue, duration) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // El elemento será considerado visible cuando al menos el 50% esté visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Inicia la animación del contador cuando el elemento sea visible
          animateCounter(elementId, finalValue, duration);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const element = document.getElementById(elementId);
    observer.observe(element);
  }

  // Llama a la función startCounterWhenVisible para cada contador con su valor final y duración deseada
  startCounterWhenVisible('stats_counter1', 15, 3000); // Por ejemplo, incrementa hasta 10 en 2 segundos
  startCounterWhenVisible('stats_counter2', 75, 3000); // Incrementa hasta 75 en 3 segundos
  startCounterWhenVisible('stats_counter3', 1000, 2500); // Incrementa hasta 500 en 2.5 segundos
  startCounterWhenVisible('stats_counter4', 2000 , 3500); // Incrementa hasta 1000 en 3.5 segundos

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

  AOS.init({
    offset: 120,
    delay: 0,
    duration: 900,
    easing: 'ease'
  });


  $(document).ready(function(){
    $('.slick-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      infinite: false,
      responsive: [
       {
         breakpoint: 768, // Breakpoint para dispositivos móviles
         settings: {
           slidesToShow: 1,
         }
       }
     ]
    });
  });


// Obtener referencias a los elementos del formulario
function showFileName(event) {
  const input = event.target;
  const fileNameContainer = document.getElementById('file-name');
  fileNameContainer.textContent = input.files[0].name;
}
  

function actualizarNiveles() {
  const idiomaSelect = document.getElementById('idiomaSelect');
  const nivelSelect = document.getElementById('nivelSelect');

  // Obtener el idioma seleccionado
  const idiomaSeleccionado = idiomaSelect.value;

  // Definir los niveles disponibles para cada idioma
  const niveles = {
    ingles: ['A2', 'B1.1', 'B1.2', 'B1', 'B2.1', 'B2.2', 'B2', 'C1', 'Speaking'],
    frances: ['A1', 'B1', 'B2']
};
  // Obtener los niveles disponibles para el idioma seleccionado
  const nivelesDisponibles = niveles[idiomaSeleccionado] || [];

  // Limpiar las opciones anteriores
  nivelSelect.innerHTML = '<option selected disabled hidden>Selecciona..</option>';

  // Agregar las nuevas opciones de nivel
  nivelesDisponibles.forEach(nivel => {
      const opcion = document.createElement('option');
      opcion.text = nivel;
      nivelSelect.add(opcion);
  });
}


