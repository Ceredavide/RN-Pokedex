// l'id relativo al pokemon si trova all'interno dell'url,
// quindi lo estraggo splittando l'array e prendendo la parte contentente l'id

export default (initialUrl: string) => {
  let match = initialUrl.split("/");
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match[6]}.png`;
};
