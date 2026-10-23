/**
 * Small, pure functions inspired by the JavaScript fundamentals exercises.
 * Every function validates its input and throws a RangeError/TypeError instead of returning nonsense.
 */

const assertFiniteNumber = (value, name) => {
  if (typeof value !== "number" || !Number.isFinite(value)) throw new TypeError(`${name} must be a finite number`);
};

const assertPositiveInteger = (value, name) => {
  if (!Number.isInteger(value) || value < 1) throw new RangeError(`${name} must be a positive integer`);
};

/** Body-mass index with the WHO category. */
export function bmi(weightKg, heightM) {
  assertFiniteNumber(weightKg, "weight");
  assertFiniteNumber(heightM, "height");
  if (weightKg <= 0 || heightM <= 0) throw new RangeError("weight and height must be positive");
  const value = Math.round((weightKg / heightM ** 2) * 10) / 10;
  let category = "Obese";
  if (value < 18.5) category = "Underweight";
  else if (value < 25) category = "Healthy";
  else if (value < 30) category = "Overweight";
  return { value, category };
}

/** Classic FizzBuzz, returned as an array instead of printed. */
export function fizzBuzz(limit = 100) {
  assertPositiveInteger(limit, "limit");
  return Array.from({ length: limit }, (_, i) => {
    const n = i + 1;
    return (n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n;
  });
}

/** First `count` Fibonacci numbers, starting 0, 1. Uses BigInt so long sequences stay exact. */
export function fibonacci(count) {
  assertPositiveInteger(count, "count");
  const sequence = [0n, 1n].slice(0, count);
  while (sequence.length < count) sequence.push(sequence.at(-1) + sequence.at(-2));
  return sequence;
}

/** Gregorian leap-year rule. */
export function isLeapYear(year) {
  if (!Number.isInteger(year)) throw new TypeError("year must be an integer");
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Pick who pays for lunch. `random` is injectable so the result can be tested deterministically. */
export function whoPaysForLunch(names, random = Math.random) {
  const cleaned = names.map((name) => String(name).trim()).filter(Boolean);
  if (cleaned.length === 0) throw new RangeError("add at least one name");
  return cleaned[Math.floor(random() * cleaned.length)];
}

/**
 * A deterministic "compatibility score": the same pair of names always gives the same score,
 * regardless of order or letter case (unlike the random version from the course).
 */
export function compatibility(nameA, nameB) {
  const normalise = (name) => String(name).toLowerCase().replace(/[^a-z]/g, "");
  const [a, b] = [normalise(nameA), normalise(nameB)].sort();
  if (!a || !b) throw new RangeError("both names need at least one letter");
  let hash = 2166136261;
  for (const char of `${a}+${b}`) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  const score = (hash >>> 0) % 101;
  let verdict = "Opposites attract… sometimes.";
  if (score > 70) verdict = "You go together like chai and rain.";
  else if (score > 40) verdict = "A solid friendship, with potential.";
  return { score, verdict };
}

/** Lyrics generator for the "99 bottles" loop exercise — now about cups of chai. */
export function chaiSong(cups) {
  assertPositiveInteger(cups, "cups");
  const plural = (n) => (n === 1 ? "1 cup" : n === 0 ? "no more cups" : `${n} cups`);
  const verses = [];
  for (let n = cups; n > 0; n--) {
    verses.push(`${plural(n)} of chai on the table, ${plural(n)} of chai. Take one down, pass it around, ${plural(n - 1)} of chai on the table.`);
  }
  return verses;
}

/** Days, weeks and months left until a target age (the "life in weeks" exercise). */
export function lifeInWeeks(currentAge, targetAge = 90) {
  assertFiniteNumber(currentAge, "age");
  if (currentAge < 0 || currentAge >= targetAge) throw new RangeError(`age must be between 0 and ${targetAge}`);
  const yearsLeft = targetAge - currentAge;
  return { days: Math.round(yearsLeft * 365), weeks: Math.round(yearsLeft * 52), months: Math.round(yearsLeft * 12) };
}
