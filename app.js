import { bmi, fizzBuzz, fibonacci, isLeapYear, whoPaysForLunch, compatibility, chaiSong, lifeInWeeks } from "./src/katas.js";

const runners = {
  bmi: ({ weight, height }) => {
    const { value, category } = bmi(Number(weight), Number(height));
    return `BMI ${value} → ${category}`;
  },
  compatibility: ({ a, b }) => {
    const { score, verdict } = compatibility(a, b);
    return `${score}% · ${verdict}`;
  },
  lunch: ({ names }) => `🍛 ${whoPaysForLunch(names.split(","))} is paying today!`,
  leap: ({ year }) => (isLeapYear(Number(year)) ? `${year} is a leap year ✓` : `${year} is not a leap year`),
  life: ({ age }) => {
    const { days, weeks, months } = lifeInWeeks(Number(age));
    return `Until 90: ${days.toLocaleString()} days · ${weeks.toLocaleString()} weeks · ${months} months`;
  },
  fibonacci: ({ count }) => fibonacci(Number(count)).join(", "),
  fizzbuzz: ({ limit }) => fizzBuzz(Number(limit)),
  chai: ({ cups }) => chaiSong(Number(cups)).join("\n\n"),
};

function renderOutput(output, result) {
  if (Array.isArray(result)) {
    output.replaceChildren(...result.map((item) => {
      const chip = document.createElement("span");
      chip.textContent = item;
      if (typeof item === "string") chip.dataset.word = item;
      return chip;
    }));
  } else {
    output.textContent = result;
  }
}

document.querySelector(".grid").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const output = form.querySelector("output");
  output.classList.remove("error");
  try {
    const values = Object.fromEntries(new FormData(form));
    renderOutput(output, runners[form.dataset.kata](values));
  } catch (error) {
    output.classList.add("error");
    output.textContent = `${error.name}: ${error.message}`;
  }
});

// Run every kata once so the page isn't empty.
document.querySelectorAll(".kata").forEach((form) => form.requestSubmit());
