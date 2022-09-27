// variables
const num = document.querySelectorAll("span");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");
const mainContainer = document.querySelector(".container-1");
const resultContainer = document.querySelector(".container-2");
const arr = [];
// functions
const addGrey = function (target) {
  target.classList.add("addGrey");
  target.style.color = "hsl(0, 0%, 100%)";
};
const removeGrey = function () {
  num.forEach(function (num) {
    num.classList.remove("addGrey");
  });
};

// Event Listener
num.forEach(function (num) {
  num.addEventListener("click", function (e) {
    removeGrey();
    addGrey(e.target);
    const value = e.target.textContent;
    arr.push(value);
  });
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (arr.length === 0) return;
  mainContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  const lastElement = arr.pop();
  result.textContent = `You Selected ${lastElement} out of 5`;
});
