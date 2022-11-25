function onSubmit(event) {
  event.preventDefault();

  var formData = {};
  var { name, email, message } = this.elements;

  formData.name = name.value;
  formData.email = email.value;
  formData.message = message.value;

  console.log('formData', formData);

  this.reset();
}

var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', onSubmit);
