function menuButton(){
  const menu = document.getElementById("sideNav");
   if (window.getComputedStyle(menu).display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
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
  var visible = document.querySelector(".contact-message");
  visible.classList.add("show-message");
  setTimeout(function(){ visible.classList.add("hide-message")}, 3000);

}


