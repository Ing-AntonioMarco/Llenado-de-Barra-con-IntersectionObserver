// Seleccionamos la barra
const barra = document.querySelector('.barra');

// Creamos el observador para detectar cuando el contenedor está en el viewport (aparece en la pantalla)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      barra.classList.add('visible'); // Agregamos la clase que activa la animación
    }
  });
}, { threshold: 1 }); // El 100% del elemento debe estar visible para activar la animación

// Aplicamos el observador al contenedor de la barra
observer.observe(document.querySelector('.contenedor'));
 