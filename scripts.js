function validateForm() {
  var p = event.target.children;
  if (p.fullName.value == "") {
    message("A name is required!!");
    return false;
  }
  if (p.email.value == "") {
    message("An e-mail is required!!");
    return false;
  }
  if (p.message.value == "") {
    message("A message is required!!");
    return false;
  }
  return true;
}

function message(m) {
  document.getElementById("error").innerHTML = m;
}

const nav = document.querySelector(".nav-mobile");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  nav.classList.add("nav-mobile-visible");
  close.classList.add("close-show");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-mobile-visible");
  close.classList.remove("close-show");
});
