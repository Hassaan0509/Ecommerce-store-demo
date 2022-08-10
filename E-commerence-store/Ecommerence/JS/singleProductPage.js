shOwReviewPage = () => {
  let rateAndReviewPage = document.getElementById("rateAndReviewPage");
  rateAndReviewPage.classList.remove("d-none");
};

removeRateAndReviewBtn = () => {
  let rateAndReviewPage = document.getElementById("rateAndReviewPage");
  rateAndReviewPage.classList.add("d-none");
};

shOwQuestionPage = () => {
  let QuestionPage = document.getElementById("QuestionPage");
  QuestionPage.classList.remove("d-none");
};

HideQuestionPage = () => {
  let QuestionPage = document.getElementById("QuestionPage");
  QuestionPage.classList.add("d-none");
};

let totalReviews = 50;
let review = [];
let totalReview = [20, 10, 7, 9, 4];
for (let i = 0; i < totalReview.length; i++) {
  review[i] = (totalReview[i] * 100) / totalReviews;
}
console.log(review);

let value = document.querySelectorAll(".reviews");
for (let i = 0; i < review.length; i++) {
  value[i].style.width = `${review[i]}%`;
}

let noOfReviews = document.querySelectorAll(".noOfReviews");
for (let i = 0; i < totalReview.length; i++) {
  noOfReviews[i].innerText = totalReview[i];
}

let rateAndReview = document.getElementById("rateAndReview");
rateAndReview.addEventListener("click", shOwReviewPage);

let RateAndReviewBtn = document.getElementById("RateAndReviewBtn");
RateAndReviewBtn.addEventListener("click", removeRateAndReviewBtn);

let askQuestion = document.getElementById("askQuestion");
askQuestion.addEventListener("click", shOwQuestionPage);
let QuestionBtn = document.getElementById("QuestionBtn");
QuestionBtn.addEventListener("click", HideQuestionPage);
