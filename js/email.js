const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_t5x6v8q';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        title: 'Enviado correctamente',
        icon: 'info',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
    });
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});