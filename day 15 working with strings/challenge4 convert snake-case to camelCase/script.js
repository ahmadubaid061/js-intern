const text = document.querySelector("textarea");
const button = document.querySelector("button");
const para = document.querySelector("pre");
button.addEventListener("click", function () {
  para.textContent = "";
  const rows = text.value.split("\n");
  let output = "";
  for (const [i, row] of rows.entries()) {
    const [first, last] = row.toLocaleLowerCase().trim().split("_");
    output = `${first}${last.replace(last[0], last[0].toLocaleUpperCase())}`;
    console.log(output);
    para.textContent += `${output.padEnd(20)}${"✅".repeat(i + 1)}\n`;
  }
  text.value = "";
});
