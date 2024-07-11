// import { chooseLog } from "../lib/choose.js";

import { minLog, maxLog, marks } from "../lib/time-marks.js";

// t in minLog unit
// dt in ms
const addTime = (t, dt) => {
  const timeScale = Math.round(
    10 ** (-3 - minLog + 1e-9 * Math.round(1e9 * Math.log10(state.timeScale))),
  );

  return t + BigInt(Math.round(dt)) * BigInt(timeScale);
};

// return [0, 1) of t modulo timeScale
const timeFracScale = (t, timeScale) => {
  const scaleLogFloor = Math.floor(Math.log10(timeScale));
  const scaleBig = BigInt(10n ** BigInt(scaleLogFloor - minLog));

  // for fractional log time scales
  const scaleLogRemainder = Math.log10(timeScale) - scaleLogFloor; // [0, 1)
  const scaleMultiplier = 10 ** scaleLogRemainder; // [1, 10)

  // increase value for conversion into BigInt
  // precision up to 9 digits of remaining scale
  const bigScaleMultiplier = BigInt(Math.floor(scaleMultiplier * 1e9)); // [0, 1e9)

  // int multiplication and then division to get back to correct scale
  const finalScale = (scaleBig * bigScaleMultiplier) / BigInt(1e9);

  // mod by the time scale in the correct space and then divide to get fraction
  const timeModScale = t % finalScale;
  return Number(timeModScale) / Number(finalScale);
};

const colorToString = (c, a = 1) => {
  const { r, g, b } = c;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const formatScale = (scale) => {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "engineering",
  }).format(scale);
};

const formatScaleFactor = (scale) => {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(scale);
};

const MAG_TO_PX = 350;

// log time scale is mapped linearly to window height
const scaleToHeight = (timeScale) => {
  return MAG_TO_PX * (Math.log10(timeScale) - minLog);
};

const heightToScale = (height) => {
  return Math.pow(10, height / MAG_TO_PX + minLog);
};

// const heightToLogScale = (height) => {
//   return height / MAG_TO_PX + minLog;
// };

const stateDefaults = {
  timeScale: 1,
  timesByScale: {},
  time: 0n, // relative to 10n ** -BigInt(minLog)
};

let state = { ...stateDefaults };

const genColorGrad = () => {
  const marksWithColor = marks.filter((m) => m.color);
  const colorsAndStops = marksWithColor
    .map((m) => {
      const fraction = (Math.log10(m.scale) - minLog) / (maxLog - minLog);
      const { r, g, b } = m.color;
      const color = `rgba(${r}, ${g}, ${b}, 0.7)`;
      return `${color} ${100 * fraction}%`;
    })
    .join(", ");

  return `linear-gradient(to bottom, ${colorsAndStops})`;
};

// todo memo for int scales
const getScaleColor = (scale) => {
  const marksWithColor = marks.filter((m) => m.color);
  const grad = marksWithColor.map((m) => {
    return {
      scale: m.scale,
      color: m.color,
    };
  });

  const stopHigher = grad.find((g) => g.scale >= scale) ?? grad.at(-1);
  const stopLower =
    grad.toReversed().find((g) => g.scale <= scale) ?? grad.at(0);

  const alpha =
    (Math.log10(scale) - Math.log10(stopLower.scale)) /
    (Math.log10(stopHigher.scale) - Math.log10(stopLower.scale) || 1);

  return {
    r: alpha * stopHigher.color.r + (1 - alpha) * stopLower.color.r,
    g: alpha * stopHigher.color.g + (1 - alpha) * stopLower.color.g,
    b: alpha * stopHigher.color.b + (1 - alpha) * stopLower.color.b,
  };
};

const resetState = () => {
  state = { ...stateDefaults };

  // Setting canvas size properly
  onResize();
  drawWorld();
};

const onResize = () => {
  const windowW = window.innerWidth;
  const windowH = window.innerHeight;
  const dpr = window.devicePixelRatio;

  // const minDim = Math.min(windowW, windowH);
  const el = document.getElementById("canvas");

  el.style.width = `${windowW}px`;
  el.style.height = `${windowH}px`;
  state.w = windowW;
  state.h = windowH;

  const w = Math.round(state.w * dpr);
  const h = Math.round(state.h * dpr);
  el.width = w;
  el.height = h;

  // const ctxScale = Math.min(w, h) / minDim;
  const ctx = el.getContext("2d");
  ctx.scale(w / state.w, h / state.h);
  state.ctx = ctx;
  drawWorld();
};

const drawWorld = () => {
  const { ctx, time, timeScale, w, h } = state;
  ctx.clearRect(0, 0, w, h);

  const drawScales = [3 * Math.floor(minLog / 3)];

  while (drawScales.at(-1) <= maxLog + 3) {
    drawScales.push(drawScales.at(-1) + 3);
  }

  const ringWidth = 10;
  ctx.lineWidth = ringWidth - 1;
  ctx.strokeStyle = `rgba(0, 0, 0, 0.3)`;

  drawScales.forEach((s, i) => {
    const div = 10 ** s;

    const powDiff = Math.abs(s - Math.log10(timeScale));

    const fillColor = getScaleColor(div);
    // console.log(div, fillColor);
    ctx.strokeStyle = s === 0 ? "black" : colorToString(fillColor);

    const tooFast = timeScale / div > 10000;
    // const tooSlow = timeScale / div < 1e-3;
    ctx.globalAlpha = 1 / Math.max(1, powDiff - 3) ** (tooFast ? 2 : 1);

    const x = w / 2;
    const y = h / 2;
    const r = 0 + ringWidth * i;

    // console.log(BigInt(10n ** (s + minLog)));
    const timeFloat = timeFracScale(time, div);

    const angle = -2 * Math.PI * (timeFloat - Math.floor(timeFloat));
    if (tooFast) {
      const steps = 2;
      const rOffset = Math.random() * Math.PI * 2;
      for (let i = 0; i < steps * 2; i++) {
        const aOffset = (2 * i * Math.PI) / steps / 2 + rOffset;
        const aWidth = Math.PI / steps / 2;
        ctx.beginPath();
        ctx.arc(x, y, r, angle - aOffset, angle - aOffset + aWidth);
        ctx.stroke();
      }
    } else {
      ctx.beginPath();
      ctx.arc(x, y, r, angle - Math.PI, angle);
      ctx.stroke();
    }
  });
};

const onScroll = () => {
  // const scrollDiv = document.getElementById("scrollContainer");
  const cursorDiv = document.getElementById("cursorText");
  const scale = heightToScale(window.scrollY + window.innerHeight / 2);
  state.timeScale = scale;

  cursorDiv.innerHTML = `${formatScaleFactor(scale)} s/s`;
  cursorDiv.style.backgroundColor = colorToString(getScaleColor(scale), 0.7);
  drawWorld();
};

// const BG_COLOR = "#ffffff";
const init = () => {
  document.body.style.background = genColorGrad();

  const scrollDiv = document.getElementById("scrollContainer");
  document.addEventListener("scroll", onScroll);
  const maxHeight = scaleToHeight(10 ** maxLog);
  scrollDiv.style.height = `${maxHeight}px`;

  const marksContainer = document.getElementById("marksContainer");
  marks.forEach((m) => {
    const markDiv = document.createElement("div");
    const markHeight = scaleToHeight(m.scale);
    markDiv.style.top = `${markHeight}px`;
    markDiv.style.transform = "translate(0%, -50%)";

    const markVal = document.createElement("div");
    markVal.classList.add("val");
    markVal.innerHTML = `${formatScale(m.scale)}s`;
    markDiv.appendChild(markVal);

    const markName = document.createElement("div");
    markName.classList.add("name");
    markName.innerHTML = m.name ?? "";
    markDiv.appendChild(markName);

    const markSymbol = document.createElement("div");
    markSymbol.classList.add("symbol");
    markSymbol.innerHTML = m.symbol ?? "";
    markDiv.appendChild(markSymbol);

    const markDesc = document.createElement("div");
    markDesc.classList.add("desc");
    markDesc.innerHTML = m.description ?? "";
    markDiv.appendChild(markDesc);

    marksContainer.appendChild(markDiv);
  });

  window.scrollTo(0, scaleToHeight(1) - window.innerHeight / 2);

  // init state
  onResize();
  resetState();
  drawWorld();

  // // create events
  // const coinFlipButton = document.getElementById("flipCoin");
  // const playButton = document.getElementById("play");
  // const resetButton = document.getElementById("reset");
  // coinFlipButton.addEventListener("click", onCoinFlip);
  // playButton.addEventListener("click", onPlayPause);
  // resetButton.addEventListener("click", resetState);

  // const pInput = document.getElementById("p");
  // const nInput = document.getElementById("n");
  // const speedInput = document.getElementById("speed");
  // pInput.addEventListener("change", () => resetState());
  // nInput.addEventListener("change", () => resetState());
  // speedInput.addEventListener("click", setSpeed);

  let lastTime = performance.now();
  const timeUpdate = (dt) => {
    state.time = addTime(state.time, dt - lastTime);

    const clockDiv = document.getElementById("clock");

    const clockText = marks
      .filter((m) => m.symbol)
      .map((m, i, arr) => {
        const thisScale = m.scale;
        const higherScale = arr[i + 1]?.scale ?? thisScale * 1000;
        const scaleRatio = higherScale / thisScale;

        const numDigits = Math.ceil(Math.log10(scaleRatio));

        const timeFloat = timeFracScale(state.time, higherScale);
        const timeFloor = Math.floor(scaleRatio * timeFloat);

        return `${timeFloor.toFixed(0).padStart(numDigits, "0")}${m.symbol}`;
      })
      .toReversed()
      .join(" ");

    clockDiv.innerHTML = String(clockText);

    // console.log(state.time, dt);
    // todo dirty flag
    drawWorld();
  };

  const loop = () => {
    requestAnimationFrame((dt) => {
      // console.log(dt);
      timeUpdate(dt);
      lastTime = dt;
      loop();
    });
  };

  loop();
};

// global events
window.addEventListener("load", init);
window.addEventListener("resize", onResize);
