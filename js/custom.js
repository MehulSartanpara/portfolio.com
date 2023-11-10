const cursor = document.querySelector('.cursor-position');
document.addEventListener('mousemove', (e) => {
  const bgX = e.clientX - cursor.offsetWidth / 2;
  const bgY = e.clientY - cursor.offsetHeight / 2;
  cursor.style.backgroundPosition = `${bgX}px ${bgY}px`;
});

function sendMail(){
  var params = {
    from_name : $('.contact-name').val(),
    email_id : $('.contact-email').val(),
    message : $('.contact-message').val()
  }
  emailjs.send('service_3g4lwxx','template_qxv0dpq', params).then(function (res) {
    location.reload();
  });
}