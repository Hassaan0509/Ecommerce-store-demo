disableScroll = () => {
  document.getElementById("body").style.display = "block";
  document.body.style.overflow = "hidden";
};

enableScroll = () => {
  document.body.style.overflow = "auto";
};

showProfile = () => {
  console.log(123);
  let myProfile = document.getElementById("myProfile");
  myProfile.classList.remove("d-none");
  disableScroll();
  removeCart();
  removeOrder();
  removeLoginPage();
  removeSignupPage();
};

showOrder = () => {
  console.log(123);
  let myOrders = document.getElementById("myOrders");
  myOrders.classList.remove("d-none");
  disableScroll();
  removeCart();
  removeLoginPage();
  removeSignupPage();
  removeProfile();
};

showSignupPage = () => {
  console.log(123);
  let signupPage = document.getElementById("signupPage");
  signupPage.classList.remove("d-none");
  disableScroll();
  removeCart();
  removeOrder();
  removeLoginPage();
  removeProfile();
};

showLoginPage = () => {
  console.log(123);
  let loginPage = document.getElementById("loginPage");
  loginPage.classList.remove("d-none");
  disableScroll();
  removeCart();
  removeOrder();
  removeSignupPage();
  removeProfile();
};

showCart = () => {
  console.log(123);
  let cartPage = document.getElementById("myCart");
  cartPage.classList.remove("d-none");
  disableScroll();
  removeOrder();
  removeLoginPage();
  removeSignupPage();
  removeProfile();
};

removeCart = () => {
  console.log(123);
  let cartPage = document.getElementById("myCart");
  cartPage.classList.add("d-none");
};

removeProfile = () => {
  console.log(123);
  let profilePage = document.getElementById("myProfile");
  profilePage.classList.add("d-none");
};

removeOrder = () => {
  console.log(123);
  let orderPage = document.getElementById("myOrders");
  orderPage.classList.add("d-none");
};

removeSignupPage = () => {
  console.log(123);
  let signupPage = document.getElementById("signupPage");
  signupPage.classList.add("d-none");
};

removeLoginPage = () => {
  console.log(123);
  let signupPage = document.getElementById("loginPage");
  signupPage.classList.add("d-none");
};

shOwDropDown = () => {
  console.log(123);
  let DropDown = document.getElementById("DropDown");
  DropDown.classList.remove("d-none");
  DropDown.classList.add("d-block");
};

hideDropDown = () => {
  console.log(123);
  let DropDown = document.getElementById("DropDown");
  DropDown.classList.add("d-none");
  DropDown.classList.remove("d-block");
};

let profile = document.getElementById("profile");
profile.addEventListener("click", showProfile);

let order = document.getElementById("orders");
order.addEventListener("click", showOrder);

let signup = document.getElementById("signup");
signup.addEventListener("click", showSignupPage);

let log = document.getElementById("login");
log.addEventListener("click", showLoginPage);

let cart = document.getElementById("cart");
cart.addEventListener("click", showCart);

let profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", removeProfile);
profileBtn.addEventListener("click", enableScroll);

let orderBtn = document.getElementById("ordersBtn");
orderBtn.addEventListener("click", removeOrder);
orderBtn.addEventListener("click", enableScroll);

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", removeSignupPage);
signupBtn.addEventListener("click", enableScroll);

let logBtn = document.getElementById("loginBtn");
logBtn.addEventListener("click", removeLoginPage);
logBtn.addEventListener("click", enableScroll);

let loginHere = document.getElementById("loginHere");
loginHere.addEventListener("click", showLoginPage);

let cartBtn = document.getElementById("cartBtn");
cartBtn.addEventListener("click", removeCart);
cartBtn.addEventListener("click", enableScroll);

let accDropDown = document.getElementById("accDropDown");
accDropDown.addEventListener("mouseover", shOwDropDown);
accDropDown.addEventListener("mouseout", hideDropDown);

let DropDown = document.getElementById("DropDown");
DropDown.addEventListener("mouseover", shOwDropDown);
DropDown.addEventListener("mouseout", hideDropDown);

let continueShopping = document.getElementById("continue");
continueShopping.addEventListener("click", removeCart);
continueShopping.addEventListener("click", enableScroll);
