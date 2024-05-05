
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
