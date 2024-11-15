// ACTIVE STATES

const inputCurrency = document.querySelector(".input-currency");
const spanCurrency = document.querySelector(".currency-span");
const inputYears = document.querySelector(".input-years");
const spanYears = document.querySelector(".years-span");
const inputPercentage = document.querySelector(".input-percentage");
const spanPercentage = document.querySelector(".percentage-span");
const labelOption = document.querySelectorAll(".option"); //selecciono todas las labels

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

labelOption.forEach((label) => {
  //bucle
  label.addEventListener("click", () => {
    labelOption.forEach((label) => label.classList.remove("selected")); //elimino la clase selected de todas las labels

    label.classList.add("selected"); //para despues agregar la clase selected a la opcion que clickee
  });
});

//ERROR STATES

const errorMsg = document.querySelectorAll(".error-msg");
const containerInputE = document.querySelectorAll('.input-error');
const errorSpan = document.querySelectorAll('.span-error');
const inputError = document.querySelectorAll(".input-error");
const form = document.querySelector(".form-container");

const checkInput = () => {
  let formValid = true;

  inputError.forEach((inputEmpty, index) => {
    if (inputEmpty.type !== 'radio') {
      if (inputEmpty.value ===''){
        errorMsg[index].style.display = "block";
        containerInputE[index].style.border = '1px solid hsl(4, 69%, 50%)';
        errorSpan[index].style.backgroundColor = 'hsl(4, 69%, 50%)';
        errorSpan[index].style.color = 'hsl(0, 0%, 100%)';
        errorSpan[index].style.height = '30px';
        formValid = false;
      } else {
        errorMsg[index].style.display = "none";
        containerInputE[index].style.border = '1px solid hsl(200, 26%, 54%)';
        errorSpan[index].style.backgroundColor = 'hsl(202, 86%, 94%)';
        errorSpan[index].style.color = 'hsl(200, 24%, 40%)';
        errorSpan[index].style.height = '28px';
      }
  }});
  return formValid;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput();
});

//RESULT


