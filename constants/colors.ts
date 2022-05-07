const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

type typeColor = {
  [key: string]: string;
};

const light: Object = {
  text: "#000",
  background: "#fff",
  tint: tintColorLight,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorLight,
};

const dark: Object = {
  text: "#fff",
  background: "#000",
  tint: tintColorDark,
  tabIconDefault: "#ccc",
  tabIconSelected: tintColorDark,
};

const typeColors: typeColor = {
  bug: "#92BC2C",
  dark: "#595761",
  dragon: "#0C69C8",
  electric: "#EDD53E",
  fairy: "#EC8CE5",
  fighting: "#CE4265",
  fire: "#FB9B51",
  flying: "#90A7DA",
  ghost: "#516AAC",
  grass: "#5FBC51",
  ground: "#DC7545",
  ice: "#70CCBD",
  normal: "#9298A4",
  poison: "#A864C7",
  psychic: "#F66F71",
  rock: "#C5B489",
  steel: "#52869D",
  water: "#559EDF",
};

export {
  light,
  dark,
  typeColors,
};
