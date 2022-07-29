const arreglo = [
    { name:'Dolar', abrev:'USD'},
    { name:'Euro', abrev:'EUR'},
    { name:'Pesos', abrev:'ARS'},
    { name:'Peso mexicano', abrev:'MXN'},
    { name:'Moneda Brasilera', abrev:'BRL'},
    { name:'Moneda Egipcia', abrev:'EGP'},
    { name:'Dolar Bahameno', abrev:'BSD'},
    { name:'Dolar australiano', abrev:'AUD'}
];
arreglo.sort(function(a, b) {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b 
    return 0;

});




