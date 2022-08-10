showMoreQuestions = () => {
  let moreQuestion = document.querySelectorAll(".height-of-div .d-none");
  if (moreQuestion.length == 0) {
    console.log("No more questions");
  } else if (moreQuestion.length >= 3) {
    for (let i = 0; i < 3; i++) {
      moreQuestion[i].classList.remove("d-none");
    }
  } else {
    for (let i = 0; i < moreQuestion.length; i++) {
      moreQuestion[i].classList.remove("d-none");
    }
  }
  console.log(moreQuestion);
};

let questionBtn = document.getElementById("questionBtn");
questionBtn.addEventListener("click", showMoreQuestions);
