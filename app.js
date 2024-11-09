// ACTIVE STATES

const inputCurrency = document.querySelector(".input-currency");
const spanCurrency = document.querySelector(".currency-span");
const inputYears = document.querySelector(".input-years");
const spanYears = document.querySelector(".years-span");
const inputPercentage = document.querySelector(".input-percentage");
const spanPercentage = document.querySelector(".percentage-span");
const labelOption = document.querySelectorAll('.option'); //selecciono todas las labels


inputCurrency.addEventListener("click", () => {
  spanCurrency.style.backgroundColor = "hsl(61, 70%, 52%)";
  spanCurrency.style.paddingBottom = "20px";
});

inputCurrency.addEventListener("blur", () => {
  spanCurrency.style.backgroundColor = "hsl(202, 86%, 94%)";
});

inputYears.addEventListener("click", () => {
  spanYears.style.backgroundColor = "hsl(61, 70%, 52%)";
});
inputYears.addEventListener("blur", () => {
  spanYears.style.backgroundColor = "hsl(202, 86%, 94%)";
});

inputPercentage.addEventListener("click", () => {
  spanPercentage.style.backgroundColor = "hsl(61, 70%, 52%)";
});
inputPercentage.addEventListener("blur", () => {
  spanPercentage.style.backgroundColor = "hsl(202, 86%, 94%)";
});


labelOption.forEach(label =>{ //bucle
    label.addEventListener('click', () =>{
        labelOption.forEach(label => label.classList.remove('selected')); //elimino la clase selected de todas las labels

        label.classList.add('selected'); //para despues agregar la clase selected a la opcion que clickee
    });
});


//ERROR STATES
