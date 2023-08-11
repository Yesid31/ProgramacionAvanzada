//Entradas
let coordenadaxPlanetaUno = 10;
let coordenadayplanetaUno = -50;

let coordenadaxPlanetaDos = 80;
let coordenadayplanetaDos = 0;

//PROCESO DEL PROBLEMA

let distanciaCalculada = Math.sqrt(
  Math.pow(coordenadaxPlanetaDos - coordenadaxPlanetaUno, 2) +
  Math.pow(coordenadayplanetaDos - coordenadayplanetaUno, 2)
);

console.log("La Distancia Calculada es" + distanciaCalculada);
console.log(`La distancia calculada es ${distanciaCalculada}`);
