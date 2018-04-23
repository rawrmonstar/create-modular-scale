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

export default function createModularScale(base = 1, ratio = "golden") {
  if (typeof ratio === "string") {
    ratio = ratios[ratio] || ratios.golden;
  }

  if (typeof ratio !== "number") {
    throw new Error("Ratio is not a number");
  }

  return function modularScale(modifier) {
    return base + modifier * ratio;
  };
}
