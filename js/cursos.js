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

//desplegable
window.onload = function () {
  var moduleInfo = document.getElementsByClassName("module-info");
  for (var i = 0; i < moduleInfo.length; i++) {
    moduleInfo[i].style.display = "none";
  }
}
function showInfo(element) {
  var moduleInfoId = element.id + "-info";
  var moduleElement = document.getElementById(moduleInfoId);
  if (moduleElement.style.display == "none") {
    moduleElement.style.display = "block";
    element.innerHTML = "-";
  } else {
    moduleElement.style.display = "none";
    element.innerHTML = "+";
  }
}

/*Calendario*/
$(document).ready(function () {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    defaultView: 'month',
    editable: false,
    eventLimit: true,
    events: [
      {
        title: 'Examen Oxford B1',
        start: '2023-06-01T10:00:00',
        end: '2023-06-01T12:00:00'
      },
      {
        title: 'Examen Oxford B2',
        start: '2023-05-31T10:00:00',
        end: '2023-05-31T12:00:00'
      },
      {
        title: 'Examen Oxford C1',
        start: '2023-05-30T10:00:00',
        end: '2023-05-30T12:00:00'
      },
      {
        title: 'Exámenes DELF',
        start: '2023-05-29T10:00:00',
        end: '2023-05-29T12:00:00'
      },
      {
        title: 'Exámenes DALF',
        start: '2023-06-01T10:00:00',
        end: '2023-06-01T12:00:00'
      },
      {
        title: 'Inicio de Curso 2024',
        start: '2023-09-10T8:30:00',
        end: '2023-09-10T19:00:00'
      },
      {
        title: 'Fin de Curso',
        start: '2023-06-15T8:30:00',
        end: '2023-06-15T19:30:00'
      }
    ]
  });
});
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
