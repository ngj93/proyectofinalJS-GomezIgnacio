const arreglo = [
  { name: "Dolar", abrev: "USD" },
  { name: "Euro", abrev: "EUR" },
  { name: "Pesos", abrev: "ARS" },
  { name: "Peso mexicano", abrev: "MXN" },
  { name: "Moneda Brasilera", abrev: "BRL" },
  { name: "Moneda Egipcia", abrev: "EGP" },
  { name: "Dolar Bahameno", abrev: "BSD" },
  { name: "Dolar australiano", abrev: "AUD" },
];


arreglo.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});


const abrev = document.getElementById("abrev");
const disponibles = document.createElement("table");
arreglo.forEach((element) => {
  fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    .then((res) => res.json())
    .then((data) => {
      const tasa = data.rates[element.abrev];

      disponibles.innerHTML += `
      <tr>
      <td>${element.abrev}</td>
      <td>${element.name}</td>
      <td>U$D ${tasa}</td>
      
      </tr>`;
    });
});
abrev.append(disponibles);
