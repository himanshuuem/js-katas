# 🥋 JS Katas

> The JavaScript fundamentals exercises (BMI, FizzBuzz, Fibonacci, leap years, "who's buying lunch", love calculator and more) rewritten as **small, pure, validated and unit-tested functions**, with a live playground to try them.

**🔗 Live playground:** https://himanshuuem.github.io/js-katas/

![JavaScript](https://img.shields.io/badge/ES2023-F7DF1E?logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/node%3Atest-339933?logo=node.js&logoColor=white)
[![test](https://github.com/himanshuuem/js-katas/actions/workflows/test.yml/badge.svg)](https://github.com/himanshuuem/js-katas/actions/workflows/test.yml)

## ✨ What's different from the tutorial versions

| Kata | Upgrade |
|---|---|
| `bmi(weight, height)` | Returns `{ value, category }` with WHO categories and rejects bad input with `TypeError`/`RangeError` |
| `fizzBuzz(limit)` | Returns an array instead of logging, so it's testable |
| `fibonacci(count)` | Uses **BigInt**, so the 100th number is exact |
| `isLeapYear(year)` | One expression covering the 100/400 rules |
| `whoPaysForLunch(names)` | **Injectable randomness**, so tests are deterministic. Trims blank names. |
| `compatibility(a, b)` | **Deterministic** FNV-1a hash: the same pair of names always gets the same score, in either order |
| `chaiSong(cups)` | The "99 bottles" loop exercise, with correct plurals ("1 cup", "no more cups") |
| `lifeInWeeks(age)` | Returns days, weeks and months as data and validates the age range |

The playground page imports the same module, shows thrown errors inline and colour-codes Fizz/Buzz chips.

## 🛠 Tech Stack

Vanilla JavaScript (ES modules, BigInt, `Array.from`, `.at()`) · `node:test` + `node:assert` · GitHub Actions CI · GitHub Pages

## 📁 Structure

```
js-katas/
├── src/
│   ├── katas.js          # Pure functions
│   └── katas.test.js     # Unit tests
├── index.html            # Playground
├── app.js                # Wires forms → functions
├── styles.css
└── .github/workflows/test.yml
```

## 🚀 Run Locally

```bash
git clone https://github.com/himanshuuem/js-katas.git
cd js-katas
npm test      # run the suites
npm start     # open the playground at http://localhost:3000
```

## 📚 Origin

These are the JavaScript ES6 fundamentals coding exercises from [The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/), refactored with input validation, pure functions and tests.

---

Made by [Himanshu](https://github.com/himanshuuem)
