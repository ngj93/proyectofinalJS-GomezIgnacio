const monedaDe = document.getElementById("moneda-uno");
const monedaPara = document.getElementById("moneda-dos");
const cantDe = document.getElementById("cantidad-uno");
const cantPara = document.getElementById("cantidad-dos");
const cambio = document.getElementById("cambio");
const tasa = document.getElementById("tasa");

//Con esta funcion traemos la info de la api para calcular las tasas/valores entre las 2 monedas
function calculate() {
  const moneda1 = monedaDe.value;
  const moneda2 = monedaPara.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); //acá podes ver que en rates, te trae el valor de la moneda 1 en relacion a todas las monedas existentes, nosotros necesitamos el rate para la moneda 2
      const tasa = data.rates[moneda2];

      cambio.innerText = `1 ${moneda1} = ${tasa} ${moneda2}`;

      cantPara.value = (cantDe.value * tasa).toFixed(2);
    });
}

//Acá ejecutamos la funcion calculate cuando cambie la moneda y cuando haya un valor en el input
monedaDe.addEventListener("change", calculate);
cantDe.addEventListener("input", calculate);
monedaPara.addEventListener("change", calculate);
cantPara.addEventListener("input", calculate);

// esto lo que hace es invertir las monedad de lugar si era eur a dol pasa a ser dol a eur.
tasa.addEventListener("click", () => {
  const temp = monedaDe.value;
  monedaDe.value = monedaPara.value;
  monedaPara.value = temp;
  calculate();
});

calculate();
