# @tegan/create-modular-scale

## Install

```sh
npm install @tegan/create-modular-scale
```

## Usage

### Signature

```js
/**
 * @param {number} base.
 * @param {number|string} ratio
 */
function createModularScale(base = 1, ratio = "golden")
```

If ratio is a string, it must be one of the keys in the following object. If a string is used that does not match any of the available ratios, the default `"golden"` will be used.

```js
const ratios = {
  minorSecond: 0.9375, // 15 / 16
  majorSecond: 0.888888888888889, // 8 / 9
  minorThird: 0.833333333333333, // 5 / 6
  majorThird: 0.8, // 4 / 5
  perfectFourth: 0.75, // 3 / 4
  augmentedFourth: 0.707106781186548, // 1 / Math.sqrt(2)
  perfectFifth: 0.666666666666667, // 2 / 3
  minorSixth: 0.625, // 5 / 8
  golden: 0.618046971569839, // 1 / 1.618
  majorSixth: 0.6, // 3 / 5
  minorSeventh: 0.5625, // 9 / 16
  majorSeventh: 0.533333333333333, // 8 / 15
  octave: 0.5, // 1 / 2
  majorTenth: 0.4, // 2 / 5
  majorEleventh: 0.375, // 3 / 8
  majorTwelfth: 0.333333333333333, // 1 / 3
  doubleOctave: 0.25 // 1 / 4
};
```

### Example

```js
import createModularScale from "@tegan/create-modular-scale";

// Using a base of 16px
const pixelScale = createModularScale(16, "golden");
pixelScale(-1); //=> 15.38195302843016
pixelScale(0); //=> 16
pixelScale(1); //=> 16.61804697156984
pixelScale(2); //=> 17.23609394313968

// Scale relative to 1 rem;
const remScale = createModuleScale(1, "golden");
remScale(-1); //=> 0.381953028430161
remScale(0); //=> 1
remScale(1); //=> 1.618046971569839
remScale(2); //=> 2.236093943139678
```
