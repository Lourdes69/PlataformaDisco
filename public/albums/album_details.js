// Obtener el ID del álbum de la URL
function getAlbumIdFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const albumId = urlParams.get('id');
    console.log("ID del álbum desde la URL:", albumId); // Verifica el ID del álbum
    return albumId;
}

// Función para obtener los detalles del álbum desde el servidor
function getAlbum(id) {
    console.log("ID del álbum:", id); // Verifica el ID del álbum
    axios.get(`/api/album/${id}`) // Asegúrate de que esta URL sea correcta
        .then(response => {
            console.log("Datos del álbum recibidos:", response.data); // Verifica los datos del álbum
            renderAlbum(response.data);
        })
        .catch(error => {
            console.error("Error al obtener el álbum:", error); // Imprime el error
        });
}

// Renderizar los detalles del álbum
function renderAlbum(album) {
    const div = document.getElementById("view-album");
    div.innerHTML = ''; // Limpiar cualquier contenido previo

    const h1 = document.createElement('h1');
    h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4', 'font-bold');
    h1.textContent = album.titulo;
    div.appendChild(h1);

    const p = document.createElement('p');
    p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2');
    p.textContent = album.descripcion;
    div.appendChild(p);

    if (album.canciones.length) {
        album.canciones.map((song, index) => {
            renderSong(song, index);
        });
    }
}

// Renderizar cada canción del álbum
function renderSong(song, index) {
    const div = document.getElementById("view-album");

    const songDiv = document.createElement('div');
    songDiv.classList.add('song-item', 'flex', 'justify-between', 'items-center', 'text-white', 'p-4', 'border-b', 'border-gray-700');

    const songInfo = document.createElement('div');
    songInfo.classList.add('song-info', 'flex', 'flex-col');

    const songTitle = document.createElement('h2');
    songTitle.classList.add('text-xl', 'font-semibold');
    songTitle.textContent = `${index + 1}. ${song.titulo}`;

    const songDuration = document.createElement('p');
    songDuration.classList.add('text-sm');
    songDuration.textContent = `Duración: ${song.duracion}`;

    // Puedes agregar un elemento de audio si tienes una URL para la canción
    // const audio = document.createElement('audio');
    // audio.setAttribute('controls', 'controls');
    // audio.classList.add('mt-2');
    // audio.src = song.url;

    songInfo.appendChild(songTitle);
    songInfo.appendChild(songDuration);
    // songInfo.appendChild(audio);

    songDiv.appendChild(songInfo);
    div.appendChild(songDiv);
}

// Cuando el contenido de la página se carga, obtenemos el ID del álbum y lo mostramos
document.addEventListener('DOMContentLoaded', function() {
    const albumId = getAlbumIdFromURL();
    getAlbum(albumId);
});
