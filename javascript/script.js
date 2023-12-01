let currentIndex = 0;

function showProject(index) {
  const container = document.getElementById('project-container');
  const projectCards = document.querySelectorAll('.project-card');

  currentIndex = index;

  projectCards.forEach((card, i) => {
    card.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
  });
}

function changeProject(index) {
  currentIndex += index;

  const projectCards = document.querySelectorAll('.project-card');

  if (currentIndex < 0) {
    currentIndex = projectCards.length - 1;
  } else if (currentIndex >= projectCards.length) {
    currentIndex = 0;
  }

  showProject(currentIndex);
}

// Autoplay del carrusel
setInterval(() => {
  changeProject(1);
}, 5000);  // Cambia cada 5 segundos, ajusta el valor según tus preferencias


function submitForm(event) {
  event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

  // Obtén los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construye un objeto con los datos del formulario
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Realiza una solicitud Fetch para enviar los datos al servidor
  fetch('process_form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta del servidor aquí (puede no ser necesario dependiendo de tus necesidades)
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
