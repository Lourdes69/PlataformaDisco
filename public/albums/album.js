
  function togglePlayPause(button) {
    let audio = button.parentElement.querySelector('.audio');
    let playPauseIcon = button.querySelector('.play-pause-icon');

    // Pausar todas las demás canciones antes de reproducir esta
    document.querySelectorAll('.custom-audio-controls .audio').forEach(function(otherAudio) {
      if (otherAudio !== audio && !otherAudio.paused) {
        otherAudio.pause();
        let otherPlayPauseIcon = otherAudio.parentElement.querySelector('.play-pause-icon');
        otherPlayPauseIcon.textContent = '►'; // Cambia el ícono a play
      }
    });

    // Reproducir o pausar por cada  canción
    if (audio.paused) {
      audio.play();
      playPauseIcon.textContent = '❚❚';
    } else {
      audio.pause();
      playPauseIcon.textContent = '►';
    }
  }

  document.querySelectorAll('.custom-audio-controls').forEach((control, index) => {
    let audio = control.querySelector('.audio');
    let playPauseButton = control.querySelector('.play-pause-button');
    let playPauseIcon = playPauseButton.querySelector('.play-pause-icon');
    let musicInfo = control.querySelector('.music-info');
    let timeDisplay = control.querySelector('.time-display');

    // Nombre de la música
    let nombreMusica = musicInfo.textContent;

    // Actualizar el tiempo transcurrido
    audio.addEventListener('timeupdate', function() {
      // Verifica si el audio que se está reproduciendo es el mismo que el que desencadenó el evento 'timeupdate'
      if (this === audio) {
        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        timeDisplay.textContent = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
      }
    });

    // Mostrar el nombre de la música
    musicInfo.textContent = nombreMusica;
  });



  //Favorito de albums
let iconos = document.querySelectorAll('.fav-icono');
iconos.forEach(function(icono) {
  let marcar = false;

  icono.addEventListener('click', function() {
    if (marcar) {
      icono.style.color = '';
      marcar = false;
    } else {
      icono.style.color = 'red';
      marcar = true;
    }
  });
});

// Obtener todos los álbumes desde el servidor
const getAlbums = async () => {
  try {
    const response = await axios.get('/api/album'); 
    console.log('Petición al servidor');
    response.data.forEach((album) => {
      renderAlbums(album);
    });

    // Muestra el mensaje de éxito después de que todos los álbumes se hayan renderizado
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: '¡Los álbumes se cargaron correctamente!',
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error al cargar los álbumes!',
    });
  }
};

// Renderizar cada álbum
const renderAlbums = (album) => {
  console.log(album);
  const div = document.getElementsByClassName('grid grid-cols-3 gap-4 mt-12 py-30 ml-80')[0];
  const newDiv = document.createElement('div');
  newDiv.classList.add('mb-20');
  const img = document.createElement('img');
  img.classList.add("rounded-lg", "object-cover", "w-[300px]" );
  img.src = album.portada ? album.portada : 'https://imgur.com/0uSALUr.png';
  img.addEventListener('click', () => redirect(album._id));
  newDiv.appendChild(img);

  const h2 = document.createElement('h2');
  h2.classList.add("text-white",  "text-2xl");
  h2.textContent = album.año;
  newDiv.appendChild(h2);

  div.appendChild(newDiv);
};

// Función para redirigir a la página de detalles del álbum
const redirect = (id) => {
  window.location.href = `/albums/album_details.html?id=${id}`;
};

document.addEventListener('DOMContentLoaded', getAlbums);
