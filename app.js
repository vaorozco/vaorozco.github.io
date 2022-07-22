alert('Welcome to my portfolio! Responsive design in progress');
function openNav(){
    document.getElementById("sideNav").style.width = "50%";
}

function closeNav(){
    document.getElementById("sideNav").style.width = "0%";
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
    return false
}