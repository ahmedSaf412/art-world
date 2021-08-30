let email = document.getElementById('email')
let password = document.getElementById('password')
let errorElement = document.getElementById('error')


let contactForm = document.getElementById("form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()
  let messages = []
  if (email.value === '' || email.value == null) {
      messages.push('Email is required!!')
  }

  if (password.value.length <= 6){
      messages.push('Password must be longer than 6 characters!!')
  }

  if (messages.length > 0){
      errorElement.innerText = messages.join(', ')
  }else{
    e.preventDefault();
    alert("logged in successfully");
window.location.href="home.html";
  }
});




