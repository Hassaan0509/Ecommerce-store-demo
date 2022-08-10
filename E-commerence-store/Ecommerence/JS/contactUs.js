let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let sendBtn = document.getElementById("sendBtn");

class Data {
  constructor(name, email, subject, message) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}
let detail = [];
storeData = () => {
  detail[detail.length] = new Data(
    name.value,
    email.value,
    subject.value,
    message.value
  );
  console.log(detail);
};

let contact_form = document.getElementById("contact-form");
contact_form.addEventListener("submit", storeData);
