AOS.init({
  offset: 120,
  delay: 0,
  duration: 900,
  easing: 'ease'
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
  
  //LUCIA BOTON SUBIR 
(function ($) {
  $(document).ready(function () {
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({
        scrollTop: 0
      }, duration);
      return false;
    });
  });
})(jQuery);
//FIN BOTON



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


  //HIDALGO 
  
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


