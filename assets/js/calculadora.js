const btnSumar = document.querySelector("btnSumar");
const btnRestar = document.querySelector("btnRestar");
const resultado = document.querySelector("#resultado");

btnSumar.addEventListener("click", function () {
    // console.log("click en sumar");

    const numero1 = parseInt(document.querySelector("#numero1").value);
    const numero2 = parseInt(document.querySelector("#numero2").value);

    const sumar = numero1 + numero2;
    resultado.textContent = sumar;

    if (sumar < 0) {
        resultado.textContent = 0;
    }
});


