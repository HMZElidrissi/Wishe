function validateForm() {
  var p = event.target.children;
  if (p.fullName.value == "") {
    message("A name is required!!");
    return false;
  }
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(p.email.value)) {
    message("This is not a valid email!!");
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

function calculate_prices() {
  const productPrice = document.querySelectorAll(".product-price");
  const shippingFee = document.querySelectorAll(".shipping-fee");
  const quantities = document.querySelectorAll("span.quantity");
  const totalPrices = document.querySelector("#total-prices");
  const totalFees = document.querySelector("#total-fees");
  const total = document.querySelector("#total");
  let totalP = 0;
  let totalF = 0;

  productPrice.forEach((item, index) => {
    const qtt = parseInt(quantities[index].textContent);
    const price = parseFloat(item.textContent.replace("$", ""));
    totalP += price * qtt;
  });

  shippingFee.forEach((item, index) => {
    const qtt = parseInt(quantities[index].textContent);
    const shipFee = parseFloat(item.textContent.replace("Shipping: $", ""));
    totalF += shipFee * qtt;
  });

  totalPrices.textContent = "USD " + totalP.toFixed(2);
  totalFees.textContent = "USD " + totalF.toFixed(2);
  total.textContent = "USD " + (totalP + totalF).toFixed(2);
}

function subtract(el) {
  let quantity = el.nextElementSibling.querySelector("span.quantity");
  let currentQtt = parseInt(quantity.textContent);

  if (currentQtt > 0) {
    currentQtt--;
    quantity.textContent = currentQtt;
    calculate_prices();
  }
}

function add(el) {
  let quantity = el.previousElementSibling.querySelector("span.quantity");
  let currentQtt = parseInt(quantity.textContent);

  currentQtt++;
  quantity.textContent = currentQtt;
  calculate_prices();
}

function add_mobile(el) {
  let quantity = el
    .closest(".item-shipping-options")
    .querySelector("span.quantity");
  let currentQtt = parseInt(quantity.textContent);

  currentQtt++;
  quantity.textContent = currentQtt;
}

function subtract_mobile(el) {
  let quantity = el
    .closest(".item-shipping-options")
    .querySelector("span.quantity");
  let currentQtt = parseInt(quantity.textContent);

  if (currentQtt > 0) {
    currentQtt--;
    quantity.textContent = currentQtt;
  }
}

function show_sidebar() {
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector(".close-sidebar");

  sidebar.classList.add("sidebar-visible");
  closeSidebar.classList.add("close-sidebar-show");
  body.classList.add("body-no-scroll");
}

function close_sidebar() {
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector(".close-sidebar");

  sidebar.classList.remove("sidebar-visible");
  closeSidebar.classList.remove("close-sidebar-show");
  body.classList.remove("body-no-scroll");
}
