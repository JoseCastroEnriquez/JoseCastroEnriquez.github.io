let teta;
let ynD;
let Qmax;
let S = 0.02;
let D;
let V;
let resultado = document.querySelectorAll(".resultado");
let yc;
let g = 9.81; 
let operacion;
let tata;
// Calculo de tirante critico.

function calcYn() {
    Qmax = document.querySelectorAll(".entrada")[0].value / 1000;
    D = parseFloat(document.querySelectorAll(".entrada")[1].value);
    V = parseFloat(document.querySelectorAll(".entrada")[2].value);

    teta = (Qmax * 0.012) / ((D**(8/3))*(S**(1/2)));
    ynD = (1.56*(teta**0.4666)*(1-0.565*((0.3353-teta)**0.4971))*D);
    console.log("Qmx: " + Qmax + " S: " + S + " D: " + D + " V: " + V)
    console.log("Yn: " + ynD); 

    teta = (Qmax * 0.012) / ((D**(8/3))*(S**(1/2)));

    while (true) {
        tata = Math.random() * 2*Math.PI;
        A = ((tata-Math.sin(tata))*D**2)/8;
        T = D * Math.sin(tata/2);
        operacion = Qmax / (Math.sqrt(g*(A/T))*A);
        
        if (operacion <= 1  && operacion>=0.9999) {
            console.log("teta:  " + tata)
            yc = (D / 2)*(1-Math.cos(tata/2));
            console.log("Yc: " + yc.toFixed(4));
            break
        }
    }

    resultado[0].classList.add("estiloResultado");
    resultado[0].innerHTML = "YC: " + yc.toFixed(5) + "<br>" + "Yn: " + ynD.toFixed(5)
}

document.querySelector(".calcular").addEventListener('click', calcYn);
