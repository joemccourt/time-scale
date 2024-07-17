const DAY = 86_400;
const YEAR = 3.15e7; // get more precise year

export const marks = [
  {
    scale: 1e-44,
    name: "plank time",
    symbol: "tp",
    description: "Smallest possible measurable unit of time",
    color: { r: 127, g: 255, b: 212 },
  },
  {
    scale: 1e-43,
  },
  {
    scale: 1e-42,
  },
  {
    scale: 1e-41,
  },
  {
    scale: 1e-40,
  },
  {
    scale: 1e-39,
  },
  {
    scale: 1e-38,
  },
  {
    scale: 1e-37,
  },
  {
    scale: 1e-36,
  },
  {
    scale: 1e-35,
  },
  {
    scale: 1e-34,
  },
  {
    scale: 1e-33,
  },
  {
    scale: 1e-32,
  },
  {
    scale: 1e-31,
  },
  {
    scale: 1e-30,
    name: "quectosecond",
    symbol: "qs",
    description: "",
  },
  {
    scale: 1e-29,
  },
  {
    scale: 1e-28,
  },
  {
    scale: 1e-27,
    name: "rontosecond",
    symbol: "rs",
    description: "",
    color: { r: 255, g: 150, b: 0 },
  },
  {
    scale: 1e-26,
  },
  {
    scale: 1e-25,
  },
  {
    scale: 1e-24,
    name: "yoctosecond",
    symbol: "ys",
    description: "",
  },
  {
    scale: 1e-23,
  },
  {
    scale: 1e-22,
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
    scale: 1e-20,
  },
  {
    scale: 1e-19,
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
    scale: 1e-17,
  },
  {
    scale: 12 * 1e-18,
    name: "Fastest laser pulse",
    description: "best timing control of laser pulses",
  },
  {
    scale: 1e-16,
  },
  {
    scale: 1.5e-16,
    name: "Optical clock accuracy",
  },
  {
    scale: 1e-15,
    name: "femtosecond",
    symbol: "fs",
    description: "time for light to travel 300nm",
  },
  {
    scale: 1.15e-15,
    name: "Atomic clock accuracy",
    description: "About 0.1ns per day",
  },
  {
    scale: 1e-14,
  },
  {
    scale: 1e-13,
  },
  {
    scale: 1e-12,
    name: "picosecond",
    symbol: "ps",
    description: "one millionth of a second",
  },
  {
    scale: 1e-11,
  },
  {
    scale: 1e-10,
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
    scale: 1 / 3e8,
    name: "Time for light to travel one meter",
  },
  {
    scale: 1e-8,
  },
  {
    scale: 1e-7,
  },
  {
    scale: 1e-6,
    name: "microsecond",
    symbol: "us",
    description: "one millionth of a second",
  },
  {
    scale: 1e-5,
  },
  {
    scale: 1e-4,
  },
  {
    scale: 1e-3,
    name: "milisecond",
    symbol: "ms",
    description: "1 / 1000 seconds",
    color: { r: 123, g: 255, b: 212 },
  },
  {
    scale: 0.01,
  },
  {
    scale: 1 / 24,
    name: "Move frame",
    description: "24fps",
  },
  {
    scale: 0.1,
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
    description: "one week",
  },
  {
    scale: YEAR / 12,
    name: "month",
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
    scale: 76.3 * YEAR,
    name: "Human life expectency",
    description: "Life expectency in the US",
  },
  {
    scale: 100 * YEAR,
    name: "century",
    description: "one century",
  },
  {
    scale: 122.5 * YEAR,
    name: "max human lifespan",
    description: "Jeanne Calment lived to age 122y and 164d",
  },
  {
    scale: 1000 * YEAR,
    name: "millenium",
    symbol: "ka",
    description: "one millenium",
  },
  {
    scale: 4855 * YEAR,
    name: "Oldest non-clonal tree",
    description: "Methuselah",
  },
  {
    scale: 1e4 * YEAR,
  },
  {
    scale: 1e5 * YEAR,
  },
  {
    scale: 1e6 * YEAR,
    name: "million years",
    symbol: "Ma",
    description: "one million years",
    color: { r: 200, g: 200, b: 0 },
  },
  {
    scale: 1e7 * YEAR,
  },
  {
    scale: 1e8 * YEAR,
  },
  {
    scale: 235 * 1e6 * YEAR,
    name: "Rotation around Milkway",
    description:
      "Time for solar system to make a full rotation around the Milkyway",
  },
  {
    scale: 1e9 * YEAR,
    name: "billion years",
    symbol: "Ga",
    description: "one billion years",
    color: { r: 200, g: 0, b: 0 },
  },
  {
    scale: 2.4 * 1e9 * YEAR,
    name: "Galaxy Collision",
    description:
      "The Milkway will collide with Andromeda in this much time in the future",
    color: { r: 30, g: 200, b: 100 },
  },
  {
    scale: 4.6 * 1e9 * YEAR,
    name: "Age of the Earth",
    description: "The solar system and its planets formed this long ago",
    color: { r: 30, g: 200, b: 100 },
  },
  {
    scale: 7 * 1e9 * YEAR,
    name: "Sun becomes white dwarf",
    description:
      "The sun will become a white dwarf in this much time in the future",
    color: { r: 230, g: 200, b: 100 },
  },
  {
    scale: 13.7 * 1e9 * YEAR,
    name: "Age of Universe",
    description: "Age of universe",
    color: { r: 100, g: 50, b: 50 },
  },
  {
    scale: 1e11 * YEAR,
  },
  {
    scale: 1e12 * YEAR,
    name: "trillion years",
    symbol: "Ta",
    description: "one trillion years",
  },
  {
    scale: 1e13 * YEAR,
  },
  {
    scale: 1e14 * YEAR,
  },
  {
    scale: 1e15 * YEAR,
    name: "quadrillion years",
    symbol: "Pa",
    description: "The solar system falls apart in about one quadrillion years",
  },
  {
    scale: 1e16 * YEAR,
  },
  {
    scale: 1e17 * YEAR,
  },
  {
    scale: 1e18 * YEAR,
  },
  {
    scale: 1e19 * YEAR,
  },
  {
    scale: 1e20 * YEAR,
  },
  {
    scale: 1e21 * YEAR,
  },
  {
    scale: 1e22 * YEAR,
  },
  {
    scale: 1e23 * YEAR,
  },
  {
    scale: 1e24 * YEAR,
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
