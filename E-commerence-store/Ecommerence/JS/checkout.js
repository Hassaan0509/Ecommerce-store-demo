showCardMenu = () => {
  let cardPage = document.getElementById("cardMenu");
  cardPage.classList.remove("d-none");
  let Accname = document.getElementById("name");
  let cardNumber = document.getElementById("cardNumber");
  let inputExpiration = document.getElementById("inputExpiration");
  let inputCvv = document.getElementById("inputCvv");
  Accname.setAttribute("Required", "Required");
  cardNumber.setAttribute("Required", "Required");
  inputExpiration.setAttribute("Required", "Required");
  inputCvv.setAttribute("Required", "Required");
};

hideCardMenu = () => {
  let cardPage = document.getElementById("cardMenu");
  cardPage.classList.add("d-none");
  let Accname = document.getElementById("name");
  let cardNumber = document.getElementById("cardNumber");
  let inputExpiration = document.getElementById("inputExpiration");
  let inputCvv = document.getElementById("inputCvv");
  Accname.removeAttribute("Required", "Required");
  cardNumber.removeAttribute("Required", "Required");
  inputExpiration.removeAttribute("Required", "Required");
  inputCvv.removeAttribute("Required", "Required");
};

validationInputField = (attribute) => {
  if (attribute.value === "" && attribute.hasAttribute("Required")) {
    attribute.style.borderColor = "red";
    return false;
  }
  return true;
};

allValidation = (attribute) => {
  attribute.addEventListener("change", function () {
    validationInputField(attribute);
  });
};

promoBtnFunction =()=>
{
  // if()
  // {
  //   document.getElementById("invalid").classList.remove("d-none")
  // }
  // else
  // {
  //   document.getElementById("applied").classList.remove("d-none")
  // }
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let inputPh = document.getElementById("inputPh");
let regexForPh = /^\d{7}$/;
let inputEmail = document.getElementById("inputEmail");
let regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let inputAddress = document.getElementById("inputAddress");
let inputAddress2 = document.getElementById("inputAddress2");
let inputCountry = document.getElementById("inputCountry");
let inputState = document.getElementById("inputState");
let inputZip = document.getElementById("inputZipCode");
let regexForZip = /^\d{4}$/;
let Accname = document.getElementById("name");
let innerTextAccName = Accname.value;
let cardNumber = document.getElementById("cardNumber");
let innerTextCardNumber = cardNumber.value;
let inputExpiration = document.getElementById("inputExpiration");
let regexForCno = /^\d{13,17}$/;
let innerTextExpiration = inputExpiration.value;
let inputCvv = document.getElementById("inputCvv");
let regexForCvv = /^\d{3}$/;
let flexRadioDefault1 = document.getElementById("flexRadioDefault1");
let flexRadioDefault2 = document.getElementById("flexRadioDefault2");

let regexForText = /^[a-z]+$/i;

console.log(regexForText.test("Hassaan"));
allValidation(firstName);
allValidation(lastName);
allValidation(inputPh);
allValidation(inputEmail);
allValidation(inputAddress);
allValidation(inputAddress2);
allValidation(inputCountry);
allValidation(inputState);
allValidation(inputZip);
allValidation(Accname);
allValidation(cardNumber);
allValidation(inputExpiration);
allValidation(inputCvv);

showReview = () => {
  let result =
    validationInputField(firstName) &&
    validationInputField(lastName) &&
    validationInputField(inputPh) &&
    validationInputField(inputEmail) &&
    validationInputField(inputAddress) &&
    validationInputField(inputAddress2) &&
    validationInputField(inputCountry) &&
    validationInputField(inputState) &&
    validationInputField(inputZip) &&
    validationInputField(Accname) &&
    validationInputField(cardNumber) &&
    validationInputField(inputExpiration) &&
    validationInputField(inputCvv);

  if (
    result == true &&
    regexForText.test(firstName.value) &&
    regexForText.test(lastName.value) &&
    regexForPh.test(+inputPh.value) &&
    regexForEmail.test(inputEmail.value) &&
    regexForText.test(inputCountry.value) &&
    regexForZip.test(+inputZip.value)
  ) {
    firstName.setAttribute("Disabled", "Disabled");
    lastName.setAttribute("Disabled", "Disabled");
    inputPh.setAttribute("Disabled", "Disabled");
    inputEmail.setAttribute("Disabled", "Disabled");
    inputAddress.setAttribute("Disabled", "Disabled");
    inputAddress2.setAttribute("Disabled", "Disabled");
    inputCountry.setAttribute("Disabled", "Disabled");
    inputState.setAttribute("Disabled", "Disabled");
    inputZip.setAttribute("Disabled", "Disabled");
    flexRadioDefault1.setAttribute("Disabled", "Disabled");
    flexRadioDefault2.setAttribute("Disabled", "Disabled");

    if (
      regexForText.test(Accname.value) &&
      regexForCno.test(+cardNumber.value) &&
      regexForCvv.test(+inputCvv.value) &&
      inputCvv.hasAttribute("Required")
    ) {
      Accname.setAttribute("Disabled", "Disabled");
      cardNumber.setAttribute("Disabled", "Disabled");
      inputExpiration.setAttribute("Disabled", "Disabled");
      inputCvv.setAttribute("Disabled", "Disabled");
    }

    document.getElementById("checkoutBtn").classList.remove("d-none");
    document.getElementById("reviewBtn").classList.add("d-none");
  }
};

if (!flexRadioDefault1.hasAttribute("Disabled")) {
  let card_menu = document.getElementById("card-menu");
  card_menu.addEventListener("click", showCardMenu);

  let cash = document.getElementById("cash");
  cash.addEventListener("click", hideCardMenu);
}
let form_submit = document.getElementById("reviewBtn");
form_submit.addEventListener("click", showReview);

let item_price = document.querySelectorAll("#item-price");

let total = 0;
for (let i = 0; i < item_price.length; i++) {
  total = total + Number(item_price[i].innerText);
}

document.getElementById("total-price").innerText = total;

let promoBtn = document.getElementById("promoBtn");
promoBtn.addEventListener("click", promoBtnFunction);
