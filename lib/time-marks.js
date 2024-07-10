const DAY = 86_400;
const YEAR = 3.15e7; // get more precise year

export const marks = [
  {
    scale: 1e-44,
    name: "Plank time",
    // symbol: "tp",
    description: "Smallest possible measurable unit of time",
    color: { r: 127, g: 255, b: 212 },
  },
  {
    scale: 1e-30,
    name: "quectosecond",
    symbol: "qs",
    description: "",
  },
  {
    scale: 1e-27,
    name: "rontosecond",
    symbol: "rs",
    description: "",
    color: { r: 255, g: 150, b: 0 },
  },
  {
    scale: 1e-24,
    name: "yoctosecond",
    symbol: "ys",
    description: "",
  },
  {
    scale: 156 * 1e-24,
    name: "higgs lifetime",
    description: "mean lifetime of a Higgs Boson",
  },
  {
    scale: 1e-21,
    name: "zeptosecond",
    symbol: "zs",
    description: "",
  },
  {
    scale: 247 * 1e-21,
    name: "hydrogen width",
    description: "measured travel time of a photon across a hydrogen molecule",
  },
  {
    scale: 1e-18,
    name: "attosecond",
    symbol: "as",
    color: { r: 0, g: 0, b: 212 },
  },
  {
    scale: 12 * 1e-18,
    name: "fasest laser pulse",
    description: "best timing control of laser pulses",
  },
  {
    scale: 1e-15,
    name: "femtosecond",
    symbol: "fs",
    description: "time for light to travel 300nm",
  },
  {
    scale: 1e-12,
    name: "picosecond",
    symbol: "ps",
    description: "one millionth of a second",
  },
  {
    scale: 109 * 1e-12,
    name: "cesium-133",
    description:
      "hyperfine transition period of cesium-133, the base definition of a second",
  },
  {
    scale: 1e-9,
    name: "nanosecond",
    symbol: "ns",
    description: "one billionth of a second",
    color: { r: 255, g: 0, b: 212 },
  },
  {
    scale: 1e-6,
    name: "microsecond",
    symbol: "us",
    description: "one millionth of a second",
  },
  {
    scale: 1e-3,
    name: "milisecond",
    symbol: "ms",
    description: "1 / 1000 seconds",
    color: { r: 123, g: 255, b: 212 },
  },
  {
    scale: 1,
    name: "second",
    symbol: "s",
    description: "definition of second",
    color: { r: 255, g: 255, b: 255 },
  },
  {
    scale: 60,
    name: "minute",
    symbol: "m",
    description: "60s",
  },
  {
    scale: 3600,
    name: "hour",
    symbol: "h",
    description: "an hour",
    color: { r: 123, g: 0, b: 212 },
  },
  {
    scale: DAY,
    name: "day",
    symbol: "d",
    description: "one day",
  },
  {
    scale: DAY * 7,
    name: "week",
    // symbol: "wk",
    description: "one week",
  },
  {
    scale: YEAR / 12,
    name: "month",
    // symbol: "mo",
    description: "avg month length",
  },
  {
    scale: YEAR,
    name: "year",
    symbol: "y",
    description: "one year",
    color: { r: 0, g: 150, b: 0 },
  },
  {
    scale: 10 * YEAR,
    name: "decade",
    description: "10 years",
  },
  {
    scale: 100 * YEAR,
    name: "century",
    description: "one century",
  },
  {
    scale: 1000 * YEAR,
    name: "millenium",
    symbol: "ka",
    description: "one millenium",
  },
  {
    scale: 1e6 * YEAR,
    name: "million years",
    symbol: "Ma",
    description: "one million years",
    color: { r: 200, g: 200, b: 0 },
  },
  {
    scale: 1e9 * YEAR,
    name: "billion years",
    symbol: "Ga",
    description: "one billion years",
    color: { r: 200, g: 0, b: 0 },
  },
  {
    scale: 13.7 * 1e9 * YEAR,
    name: "Age of Universe",
    description: "Age of universe",
    color: { r: 100, g: 50, b: 50 },
  },
  {
    scale: 1e12 * YEAR,
    name: "one trillion years",
    symbol: "Ta",
    description: "one trillion years",
  },
  {
    scale: 1e15 * YEAR,
    name: "one quadrillion years",
    symbol: "Pa",
    description: "one quadrillion years",
  },
  {
    scale: 1e34,
    name: "proton decay",
    description: "Minimum verified limit of proton decay",
    color: { r: 150, g: 0, b: 0 },
  },
  {
    scale: 1e67,
    name: "black hole decay",
    description: "Time for a black hole of one solar mass to evaporate",
    color: { r: 0, g: 0, b: 0 },
  },
];

export const minLog = -45;
export const maxLog = 70;
