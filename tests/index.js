const test = require("tape");
const createModularScale = require("../dist/create-modular-scale.cjs.js");

test("returns a function", t => {
  const modularScale = createModularScale();
  t.equal(typeof modularScale, "function");
  t.end();
});

test("has default base of 1", t => {
  const modularScale = createModularScale();
  t.equal(modularScale(0), 1);
  t.end();
});

test("has default ratio of 'golden'", t => {
  const modularScale = createModularScale();
  t.equal(modularScale(1), 1.618046971569839);
  t.end();
});

test("accepts custom base", t => {
  const customBase = 16;
  const modularScale = createModularScale(customBase);
  t.equal(modularScale(0), customBase);
  t.end();
});

test("accepts numeric ratio", t => {
  const modularScale = createModularScale(1, 0.5);
  t.equal(modularScale(1), 1.5);
  t.end();
});

test("rejects non-string, non-numeric ratio", t => {
  t.throws(
    () => createModularScale(1, { value: 0.5 }),
    "Ratio is not a number",
    "Rejects objects"
  );
  t.throws(
    () => createModularScale(1, () => 0.5),
    "Ratio is not a number",
    "Rejects functions"
  );
  t.end();
});

test("defaults to golden ratio when unknown string ratio used", t => {
  const goldenScale = createModularScale(1, "golden");
  const unknownScale = createModularScale(1, "unknown ratio");
  t.equal(
    goldenScale(1),
    unknownScale(1),
    "unknown scales are equal to golden scales"
  );
  t.end();
});

test("accepts known custom ratios", t => {
  const ratios = {
    minorSecond: 0.9375,
    majorSecond: 0.888888888888889,
    minorThird: 0.833333333333333,
    majorThird: 0.8,
    perfectFourth: 0.75,
    augmentedFourth: 0.707106781186548,
    perfectFifth: 0.666666666666667,
    minorSixth: 0.625,
    golden: 0.618046971569839,
    majorSixth: 0.6,
    minorSeventh: 0.5625,
    majorSeventh: 0.533333333333333,
    octave: 0.5,
    majorTenth: 0.4,
    majorEleventh: 0.375,
    majorTwelfth: 0.333333333333333,
    doubleOctave: 0.25
  };

  Object.keys(ratios).forEach(ratio => {
    const scale = createModularScale(1, ratio);
    t.equal(scale(1), ratios[ratio] + 1, `accepts ${ratio}`);
  });
  t.end();
});
