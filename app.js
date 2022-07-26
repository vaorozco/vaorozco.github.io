function menuButton() {
  var menu = document.querySelector(".sideNav");
  if (menu.style.visiblity = "hidden") {
    menu.classList.toggle('show-sideNav');
  }
}

function submitForm() {
  const form = document.getElementById('form')
  const formData = new FormData(form)
  const url = 'https://formsubmit.co/825c3f0ee6edf063cc01f5ea2ad854a4'
  fetch(
    url,
    {
      method: 'POST',
      body: formData
    }
  )
  form.reset();
  showMessage();
  return false
}

function showMessage() {
  var message = document.querySelector(".contact-message");
  message.classList.add("show-message");
  setTimeout(function () { message.classList.add("hide-message") }, 3000);
}
