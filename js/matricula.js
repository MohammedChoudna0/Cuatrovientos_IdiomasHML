(function () {
  const forms = document.querySelectorAll('.formulario');
  const btnVolver = document.getElementById('btn-volver');
  const btnSiguiente = document.getElementById('btn-siguiente');

  let currentFormIndex = 0;

  // Resto del código...
  function showForm(index) {
      forms.forEach((form, i) => {
          if (i === index) {
              form.classList.add('active');
          } else {
              form.classList.remove('active');
          }
      });

      if (index === 0) {
          btnVolver.disabled = true;
      } else {
          btnVolver.disabled = false;
      }

      if (index === forms.length - 1) {
          btnSiguiente.innerHTML = 'Enviar';
      } else {
          btnSiguiente.innerHTML = 'Siguiente';
      }

      currentFormIndex = index;
  }

  btnVolver.addEventListener('click', () => {
      showForm(currentFormIndex - 1);
  });

  btnSiguiente.addEventListener('click', () => {
      const currentForm = forms[currentFormIndex];

      if (currentForm.checkValidity()) {
          if (currentFormIndex === forms.length - 1) {
              // Lógica para enviar los datos del último formulario
              alert('¡Datos enviados correctamente!');
          } else {
              showForm(currentFormIndex + 1);
          }
      } else {
          currentForm.reportValidity();
      }
  });

  showForm(currentFormIndex);
})();


window.onscroll = function () {
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

$(document).ready(function () {
  $('.navbar-burger').click(function () {
    $('.navbar-menu').toggleClass('is-active');
    $('.navbar-burger').toggleClass('is-active');
  });
});


// Obtener los campos de nombre, apellido1 y apellido2
const nombreInput = document.querySelector('input[placeholder="Nombre"]');
const apellido1Input = document.querySelector('input[placeholder="Apellido 1"]');
const apellido2Input = document.querySelector('input[placeholder="Apellido 2"]');

// Escuchar el evento "input" en los campos de nombre, apellido1 y apellido2
nombreInput.addEventListener('input', capitalizeFirstLetter);
apellido1Input.addEventListener('input', capitalizeFirstLetter);
apellido2Input.addEventListener('input', capitalizeFirstLetter);
function capitalizeFirstLetter(event) {
    const input = event.target;
    const value = input.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    input.value = capitalizedValue;
}

const form = document.querySelector('form');

// Obtener referencia al campo de entrada DNI/NIE
const dniInput = document.getElementById('dniInput');

// Expresión regular para validar el formato del DNI/NIE
const dniRegex = /^[XYZ]?\d{1,8}[A-Z]$/i;



// Validar la entrada del DNI/NIE en tiempo real
dniInput.addEventListener('input', () => {
  const dniValue = dniInput.value.trim();
  if (dniRegex.test(dniValue)) {
    dniInput.setCustomValidity(''); // Restablecer mensaje de error personalizado
    dniInput.reportValidity(); // Mostrar el mensaje de validez
  } else {
    dniInput.setCustomValidity('El DNI/NIE no es válido'); // Establecer mensaje de error personalizado
    dniInput.reportValidity(); // Mostrar el mensaje de error personalizado
  }
});



// Obtener referencias a los elementos del formulario
function showFileName(event) {
  const input = event.target;
  const fileNameContainer = document.getElementById('file-name');
  fileNameContainer.textContent = input.files[0].name;
}


// Obtener referencias a los elementos select en el HTML
const idiomaSelect = document.getElementById("idiomaSelect");
const nivelSelect = document.getElementById("nivelSelect");
const franjaSelect = document.getElementById("franjaSelect");

// Definir los niveles disponibles para cada idioma
const niveles = {
  ingles: ["A2 Refuerzo estudiantes FP", "A2", "B1.1", "B1.2", "B1 Refuerzo estudiantes FP", "B1 Preparación Examen Oficial estudiantes FP", "B1 Preparación Examen Oficial", "B2.1", "B2.2", "B2 Preparación Examen Oficial estudiantes FP", "B2 Preparación Examen Oficial", "C1 Preparación Examen Oficial", "Speaking"],
  frances: ["A1 Refuerzo estudiantes FP", "B1 Preparación Examen Oficial", "B2"]
};

// Definir las franjas horarias disponibles para cada nivel
const franjas = {
  "A2 Refuerzo estudiantes FP": ["Lunes y miércoles de 15:30 a 16:30 h","Martes y jueves de 16:30 a 18:00 h"],
  "A2": ["Lunes y miércoles de 16:30 a 18:00 h"],
  "B1.1": ["Lunes y miércoles de 18:00 a 19:30 h","Lunes y miércoles de 19:30 a 21:00 h"],
  "B1.2": ["Martes y jueves de 16:30 a 18:00 h"],
  "B1 Refuerzo estudiantes FP": ["Martes y jueves de 15:30 a 16:30 h"],
  "B1 Preparación Examen Oficial estudiantes FP": ["Lunes y miércoles de 15:30 a 16:30 h","Lunes y miércoles de 19:30 a 21:00 h"],
  "B1 Preparación Examen Oficial": ["Lunes y miércoles de 18:00 a 19:30 h","Martes y jueves de 09:15 a 10:45 h"],
  "B2.1": ["Lunes y miércoles de 19:30 a 21:00 h"],
  "B2.2": ["Martes y jueves de 9:30 a 11:00 h"],
  "B2 Preparación Examen Oficial estudiantes FP": ["Martes y jueves de 15:30 a 16:30 h"],
  "B2 Preparación Examen Oficial": ["Martes y jueves de 18:00 a 19:30 h" ,"Martes y jueves de 09:15 a 10:45 h"],
  "C1 Preparación Examen Oficial": ["Lunes y miércoles de 19:30 a 21:00 h"],
  "Speaking": ["Martes de 19:30 a 20:30 h"],
  "A1 Refuerzo estudiantes FP": ["Martes y jueves de 15:00 a 16:30 h"],
  "B1 Preparación Examen Oficial": ["Martes de 17:00 a 19:00 h"],
  "B2": ["Martes y jueves de 09:15 a 10:45 h"]
};

// Función para actualizar las opciones de niveles según el idioma seleccionado
function actualizarNiveles() {
  // Obtener el idioma seleccionado
  const idioma = idiomaSelect.value;

  // Limpiar las opciones actuales de niveles
  nivelSelect.innerHTML = '<option selected disabled hidden>Selecciona..</option>';

  //
// Verificar si se ha seleccionado un idioma válido
if (idioma !== "Selecciona..") {
  // Obtener los niveles disponibles para el idioma seleccionado
  const nivelesIdioma = niveles[idioma];
  // Generar las opciones de niveles
nivelesIdioma.forEach(nivel => {
  const option = document.createElement("option");
  option.value = nivel;
  option.text = nivel;
  nivelSelect.appendChild(option);
});
}

// Verificar si se ha seleccionado un idioma válido
if (idioma !== "Selecciona..") {
// Obtener los niveles disponibles para el idioma seleccionado
const nivelesIdioma = niveles[idioma];

vbnet

// Generar las opciones de niveles
nivelesIdioma.forEach(nivel => {
  const option = document.createElement("option");
  option.value = nivel;
  option.text = nivel;
  nivelSelect.appendChild(option);
});

}
}

// Función para actualizar las opciones de franjas horarias según el nivel seleccionado
function actualizarFranjas() {
// Obtener el nivel seleccionado
const nivel = nivelSelect.value;

// Limpiar las opciones actuales de franjas horarias
franjaSelect.innerHTML = '<option selected disabled hidden>Selecciona..</option>';

// Verificar si se ha seleccionado un nivel válido
if (nivel !== "Selecciona..") {
// Obtener las franjas horarias disponibles para el nivel seleccionado
const franjasNivel = franjas[nivel];
// Generar las opciones de franjas horarias
franjasNivel.forEach(franja => {
  const option = document.createElement("option");
  option.value = franja;
  option.text = franja;
  franjaSelect.appendChild(option);
});
}
}

// Asignar eventos de cambio a los select
idiomaSelect.addEventListener("change", actualizarNiveles);
nivelSelect.addEventListener("change", actualizarFranjas);


// Obtener referencia al campo de entrada de fecha de nacimiento y los campos del tutor o los padres
 const fechaNacimientoInput = document.getElementById('fechaNacimiento');
 const camposTutor = document.getElementById('camposTutor'); // ID del contenedor de los campos del tutor o los padres
 const camposMayores = document.getElementById('camposMayores'); // ID del contenedor de los campos del tutor o los padres
 const mensajeFechaInvalida = document.getElementById('mensajeFechaInvalida');

 // Ocultar los campos del tutor o los padres al cargar la página
 camposTutor.style.display = 'none';
 mensajeFechaInvalida.style.display = 'none'; 
 // Escuchar el evento de cambio en el campo de entrada de fecha de nacimiento
 fechaNacimientoInput.addEventListener('change', () => {
   const fechaNacimiento = new Date(fechaNacimientoInput.value);
   const hoy = new Date();
 
   // Calcular la diferencia de tiempo en milisegundos entre la fecha actual y la fecha de nacimiento
   const edadMilisegundos = hoy - fechaNacimiento;
 
   // Convertir la diferencia de tiempo a años
   const edadAnios = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
  if (edadAnios < 16){
    mensajeFechaInvalida.style.display = 'block';
    camposTutor.style.display = 'none';
    
  }
   // Mostrar u ocultar los campos del tutor o los padres según la edad
   if (edadAnios < 18 && edadAnios >=16) {
     camposTutor.style.display = 'block'; // Mostrar campos del tutor o los padres
     camposMayores.style.display='none';
     mensajeFechaInvalida.style.display='none';

   } else {
     camposTutor.style.display = 'none'; // Ocultar campos del tutor o los padres
     camposMayores.style.display = 'block';


   }
 });
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


