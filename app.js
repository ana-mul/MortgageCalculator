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

//CLEAR

const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
  inputError.forEach((input) => {
    input.value = "";
  });
});

//ERROR STATES

const errorMsg = document.querySelectorAll(".error-msg");
const containerInputE = document.querySelectorAll(".input-error");
const errorSpan = document.querySelectorAll(".span-error");
const inputError = document.querySelectorAll(".input-error");
const form = document.querySelector(".form-container");

const checkInput = () => {
  let formValid = true;

  inputError.forEach((inputEmpty, index) => {
    if (inputEmpty.type !== "radio") {
      if (inputEmpty.value === "") {
        errorMsg[index].style.display = "block";
        containerInputE[index].style.border = "1px solid hsl(4, 69%, 50%)";
        errorSpan[index].style.backgroundColor = "hsl(4, 69%, 50%)";
        errorSpan[index].style.color = "hsl(0, 0%, 100%)";
        errorSpan[index].style.height = "30px";
        formValid = false;
      } else {
        errorMsg[index].style.display = "none";
        containerInputE[index].style.border = "1px solid hsl(200, 26%, 54%)";
        errorSpan[index].style.backgroundColor = "hsl(202, 86%, 94%)";
        errorSpan[index].style.color = "hsl(200, 24%, 40%)";
        errorSpan[index].style.height = "28px";
      }
    }
  });
  return formValid;
};

//CALCULATE

const monthlySpan = document.querySelector(".result-a");
const totalSpan = document.querySelector(".result-b");
const interestOnly = document.getElementById("interest-only");
const repayment = document.getElementById("repayment");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const interestRateInput = document.getElementById("interest-rate");
const containerResult = document.querySelector(".right-container-hide");
const containerShow = document.querySelector(".right-container");

const calculateInterest = () => {
  //aca convierto los valores del input en numero
  const amount = Number(amountInput.value);
  const term = Number(termInput.value);
  const interestRate = Number(interestRateInput.value) / 100;

  //calculo interes
  let monthlyInterest = interestRate / 12;
  let totalMonth = term * 12;
  let monthPayment = amount * monthlyInterest;
  let totalPayment = monthPayment * totalMonth;

  //cambiar h3
  document.getElementById("h3-hide-a").textContent = "Your Monthly Interest";
  document.getElementById("h3-hide-b").textContent = "Total Interest Paid Over Term";

  //muestro resultados
  monthlySpan.textContent = `$ ${monthPayment.toFixed(2)}`;
  totalSpan.textContent = `$ ${totalPayment.toFixed(2)}`;

  //cambiar el display de los contenedores
  containerShow.style.display = "none";
  containerResult.style.display = "flex";

  return { monthPayment, totalPayment };
};

const calculateRepayment = () => {
  //convierto valores
  const amount = Number(amountInput.value);
  const term = Number(termInput.value);
  const interestRate = Number(interestRateInput.value) / 100;

  //calculo repayment
  let totalMonth = term * 12;
  let monthlyPayment = (amount * interestRate)*((1 + interestRate) ** totalMonth) / ((1 + interestRate) ** totalMonth -1);
  let totalRepayment = monthlyPayment * totalMonth;

  //muestro resultados
  monthlySpan.textContent = `$ ${monthlyPayment.toFixed(2)}`;
  totalSpan.textContent = `$ ${totalRepayment.toFixed(2)}`;

  //cambiar display
  containerShow.style.display = 'none';
  containerResult.style.display = 'flex';
  console.log (monthlyPayment, totalRepayment);

  return (monthlyPayment, totalRepayment);

}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isSelectedInterest =  document.querySelector('input[id="interest-only"]:checked');
  const isSelectedRepayment = document.querySelector('input[id="repayment"]:checked');

  if (isSelectedInterest && checkInput()){
    const resultInterest = calculateInterest();
  } else if (isSelectedRepayment && checkInput) {
    const resultRepayment = calculateRepayment();
  }
});



