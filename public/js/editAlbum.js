// Función para editar el álbum
const editAlbum = async (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const albumData = getInputValues();

  try {
    // Obtener el ID del álbum de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('album');

    // Realizar la solicitud PUT para editar el álbum
    await axios.put(`/api/album/${albumId}`, albumData);

    // Mostrar una alerta de éxito
    swal({
      title: '¡Álbum editado!',
      text: '¡Has modificado el álbum!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    // Redirigir al usuario a la vista individual del álbum
    window.location.href = `./albums/album.html${albumId}`;
  } catch (error) {
    // Mostrar una alerta de error en caso de error
    swal({
      title: 'Error',
      text: 'Ocurrió un error al editar el álbum. Por favor, inténtalo de nuevo más tarde.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
};
