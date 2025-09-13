let model = document.querySelector(".model");
let btnshowmodel = document.querySelectorAll(".show-model");
let btnclosemodel = document.querySelector(".close-model");

btnshowmodel.forEach((btn) => {
  btn.addEventListener("click", function () {
    model.classList.remove("hidden");
  });
});

btnclosemodel.addEventListener("click", function () {
  model.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    model.classList.add("hidden");
  }
});
