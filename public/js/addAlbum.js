// Obtener los valores del formulario
const getInputValues = () => {
  const title = document.getElementById('title').value;
  const yearOfRelease = document.getElementById('yearOfRelease').value;
  const description = document.getElementById('description').value;
  const img = document.getElementById('img').value;

  return { title, yearOfRelease, description, img };
};

// Función para agregar un álbum
const addAlbum = async (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const albumData = getInputValues();

  try {
    // Realizar la solicitud POST para agregar el álbum
    await axios.post('/api/album', albumData);

    // Mostrar una alerta de éxito
    swal({
      title: '¡Álbum agregado!',
      text: '¡Has agregado un nuevo álbum!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    // Redirigir al usuario a la vista de álbumes
    window.location.href = './albums/album.html';
  } catch (error) {
    // Mostrar una alerta de error en caso de error
    swal({
      title: 'Error',
      text: 'Ocurrió un error al agregar el álbum. Por favor, inténtalo de nuevo más tarde.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};

// Función para cancelar la operación y redirigir al usuario
const cancelAdd = () => {
  // Redirigir al usuario a la vista de álbumes
  window.location.href = './albums/album.html';
};

// Agregar evento al formulario de agregar álbum
document.getElementById('addAlbumForm').addEventListener('submit', addAlbum);

// Agregar evento al botón de cancelar
document.getElementById('cancelButton').addEventListener('click', cancelAdd);
