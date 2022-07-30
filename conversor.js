const monedaDe = document.getElementById("moneda-uno");
const monedaPara = document.getElementById("moneda-dos");
const cantDe = document.getElementById("cantidad-uno");
const cantPara = document.getElementById("cantidad-dos");
const cambio = document.getElementById("cambio");
const tasa = document.getElementById("tasa");


function calculate() {
  const moneda1 = monedaDe.value;
  const moneda2 = monedaPara.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); 
      const tasa = data.rates[moneda2];

      cambio.innerText = `1 ${moneda1} = ${tasa} ${moneda2}`;

      cantPara.value = (cantDe.value * tasa).toFixed(2);
    });
}


monedaDe.addEventListener("change", calculate);
cantDe.addEventListener("input", calculate);
monedaPara.addEventListener("change", calculate);
cantPara.addEventListener("input", calculate);


tasa.addEventListener("click", () => {
  const temp = monedaDe.value;
  monedaDe.value = monedaPara.value;
  monedaPara.value = temp;
  calculate();
});

calculate();
