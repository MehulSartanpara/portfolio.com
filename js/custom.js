$( document ).ready(function() {

  // ComeBack JS
  $(function() {
    var message = "Hey, come back!";
    var original;
  
    $(window).focus(function() {
      if (original) {
        document.title = original;
      }
    }).blur(function() {
      var title = $('title').text();
      if (title != message) {
        original = title;
      }
      document.title = message;
    });
  });
  
  // Background Effect
  const cursor = document.querySelector('.cursor-position');
  document.addEventListener('mousemove', (e) => {
    const bgX = e.clientX - cursor.offsetWidth / 2;
    const bgY = e.clientY - cursor.offsetHeight / 2;
    cursor.style.backgroundPosition = `${bgX}px ${bgY}px`;
  });

  // Section Tab Active
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", navHighlighter);
  navHighlighter();
  function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight + 170;
    const sectionTop = current.offsetTop - 230;
    sectionId = current.getAttribute("id")
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".portfolio-nav .portfolio-cta[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".portfolio-nav .portfolio-cta[href*=" + sectionId + "]").classList.remove("active");
    }
    });
  }


  // Contact Form
  $('#contactForm').on('submit', function( event ) {
    event.preventDefault();
    $('.portfolio-contact-form #loading').removeClass('hidden');
    $('.portfolio-contact-form button').addClass('font-size-0');
    const Name = $('.contact-name').val();
    const Email = $('.contact-email').val();
    const Message = $('.contact-message').val();
    sendMail(Name, Email, Message);
  });
  function sendMail(Name, Email, Message){
    var params = { from_name : Name, email_id : Email, message : Message }
    emailjs.send('service_3g4lwxx','template_qxv0dpq', params).then(function (res) {
      $('#contactForm')[0].reset();
      $('.portfolio-contact-form #loading').addClass('hidden');
      $('.portfolio-contact-form button').removeClass('font-size-0');
      $('.portfolio-contact-form .success-message').removeClass('hidden');
    });
  }
});