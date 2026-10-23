import { test } from "node:test";
import assert from "node:assert/strict";
import { bmi, fizzBuzz, fibonacci, isLeapYear, whoPaysForLunch, compatibility, chaiSong, lifeInWeeks } from "./katas.js";

test("bmi computes value and category", () => {
  assert.deepEqual(bmi(65, 1.8), { value: 20.1, category: "Healthy" });
  assert.equal(bmi(95, 1.7).category, "Obese");
  assert.throws(() => bmi(0, 1.7), RangeError);
  assert.throws(() => bmi("70", 1.7), TypeError);
});

test("fizzBuzz follows the rules", () => {
  const result = fizzBuzz(15);
  assert.equal(result[2], "Fizz");
  assert.equal(result[4], "Buzz");
  assert.equal(result[14], "FizzBuzz");
  assert.equal(result[0], 1);
});

test("fibonacci handles small and large counts", () => {
  assert.deepEqual(fibonacci(1), [0n]);
  assert.deepEqual(fibonacci(6), [0n, 1n, 1n, 2n, 3n, 5n]);
  assert.equal(fibonacci(100).at(-1), 218922995834555169026n);
});

test("isLeapYear covers century rules", () => {
  assert.equal(isLeapYear(2024), true);
  assert.equal(isLeapYear(1900), false);
  assert.equal(isLeapYear(2000), true);
});

test("whoPaysForLunch is deterministic with injected randomness", () => {
  assert.equal(whoPaysForLunch(["Asha", " Ravi ", ""], () => 0.99), "Ravi");
  assert.throws(() => whoPaysForLunch(["  "]), RangeError);
});

test("compatibility is symmetric and case-insensitive", () => {
  const a = compatibility("Asha", "Ravi");
  const b = compatibility("RAVI", "asha");
  assert.deepEqual(a, b);
  assert.ok(a.score >= 0 && a.score <= 100);
});

test("chaiSong ends with no more cups", () => {
  const verses = chaiSong(2);
  assert.equal(verses.length, 2);
  assert.match(verses.at(-1), /no more cups of chai on the table\.$/);
});

test("lifeInWeeks returns remaining time", () => {
  assert.deepEqual(lifeInWeeks(56), { days: 12410, weeks: 1768, months: 408 });
  assert.throws(() => lifeInWeeks(95), RangeError);
});
