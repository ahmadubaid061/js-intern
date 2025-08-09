(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = header.style.color === "red" ? "blue" : "red";
  });
})();
