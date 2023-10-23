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
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  nav.classList.add("nav-mobile-visible");
  close.classList.add("close-show");
  body.classList.add("body-no-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-mobile-visible");
  close.classList.remove("close-show");
  body.classList.remove("body-no-scroll");
});

const categoriesItems = document.querySelectorAll(".categories-collapse");
const categoriesMenu = document.querySelector(".categories-collapse-wrapper");

categoriesMenu.addEventListener("click", () => {
  categoriesItems.forEach((item) => {
    item.classList.toggle("active");
  });
});
