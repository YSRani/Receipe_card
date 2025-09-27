const toggleIngredients = document.getElementById("toggleIngredients");
const ingredients = document.getElementById("ingredients");
const toggleSteps = document.getElementById("toggleSteps");
const steps = document.getElementById("steps");

toggleIngredients.addEventListener("click", () => {
  ingredients.classList.toggle("hidden");
  toggleIngredients.textContent = ingredients.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

toggleSteps.addEventListener("click", () => {
  steps.classList.toggle("hidden");
  toggleSteps.textContent = steps.classList.contains("hidden")
    ? "Show Steps"
    : "Hide Steps";
});

// Cooking step highlight + progress bar
const startBtn = document.getElementById("startCooking");
const nextBtn = document.getElementById("nextStep");
const stepItems = steps.querySelectorAll("li");
const progress = document.getElementById("progress");

let currentStep = -1;

startBtn.addEventListener("click", () => {
  stepItems.forEach(step => step.style.background = "");
  currentStep = 0;
  stepItems[currentStep].style.background = "#e0e0ff";
  progress.style.width = `${(1 / stepItems.length) * 100}%`;
});

nextBtn.addEventListener("click", () => {
  if (currentStep >= 0 && currentStep < stepItems.length - 1) {
    stepItems[currentStep].style.background = "";
    currentStep++;
    stepItems[currentStep].style.background = "#e0e0ff";
    progress.style.width = `${((currentStep + 1) / stepItems.length) * 100}%`;
  }
});
