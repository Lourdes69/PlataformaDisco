 
  document.getElementById('login-form').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
      event.preventDefault();
    }
  });
  
function mostrarAlerta(mensaje) {
    Swal.fire({
      icon: 'info',
      title: 'Atención',
      text: mensaje,
      confirmButtonText: 'OK'
    });
  } 
  function validarFormulario() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    if (email === '' || password === '') {
      mostrarAlerta('Por favor, complete todos los campos.');
      return false;
    }
    if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d)(?=.*[A-Z]).{6,}/.test(password)) {
        mostrarAlerta('La contraseña debe contener al menos un carácter especial, un número y una letra mayúscula, y tener una longitud mínima de 6 caracteres.');
        return false;
      }
    return true;
  }
 