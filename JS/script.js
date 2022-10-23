let inputAmountElement = document.querySelector(".js-inputAmount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let currentRateElement = document.querySelector(".js-currentRate")
let valueElement = document.querySelector(".js-value");
let valueCurrencyElement = document.querySelector(".js-currency");
let buttonElement = document.querySelector(".js-button");

inputCurrencyElement.addEventListener("change", showCurrentRate);
outputCurrencyElement.addEventListener("change", showCurrentRate);

function showCurrentRate() {
    switch (inputCurrencyElement.value) {
        case "PLN":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    currentRateElement.value = "Wybrałeś te same waluty!";
                    break;
                case "EUR":
                    currentRateElement.value = "Obecny kurs wynosi: 0.21";
                    break;
                case "USD":
                    currentRateElement.value = "Obecny kurs wynosi: 0.21";
                    break;
            }
            break;
        case "EUR":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    currentRateElement.value = "Obecny kurs wynosi: 4.77";
                    break;
                case "EUR":
                    currentRateElement.value = "Wybrałeś te same waluty!";
                    break;
                case "USD":
                    currentRateElement.value = "Obecny kurs wynosi: 0.98";
                    break;
            }
            break;
        case "USD":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    currentRateElement.value = "Obecny kurs wynosi: 4.88";
                    break;
                case "EUR":
                    currentRateElement.value = "Obecny kurs wynosi: 1.02";
                    break;
                case "USD":
                    currentRateElement.value = "Wybrałeś te same waluty!";
                    break;
            }
            break;
    }
}

buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    let valueOfAmountElement = parseFloat(inputAmountElement.value).toFixed(2);
    switch (inputCurrencyElement.value) {
        case "PLN":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    valueElement.innerHTML = valueOfAmountElement;
                    valueCurrencyElement.innerHTML = " PLN";
                    break;
                case "EUR":
                    valueElement.innerHTML = (valueOfAmountElement * 0.21).toFixed(2);
                    valueCurrencyElement.innerHTML = " EUR";
                    break;
                case "USD":
                    valueElement.innerHTML = (valueOfAmountElement * 0.21).toFixed(2);
                    valueCurrencyElement.innerHTML = " USD";
                    break;
            }
            break;
        case "EUR":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    valueElement.innerHTML = (valueOfAmountElement * 4.77).toFixed(2);
                    valueCurrencyElement.innerHTML = " PLN";
                    break;
                case "EUR":
                    valueElement.innerHTML = valueOfAmountElement;
                    valueCurrencyElement.innerHTML = " EUR";
                    break;
                case "USD":
                    valueElement.innerHTML = (valueOfAmountElement * 0.98).toFixed(2);
                    valueCurrencyElement.innerHTML = " USD";
                    break;
            }
            break;
        case "USD":
            switch (outputCurrencyElement.value) {
                case "PLN":
                    valueElement.innerHTML = (valueOfAmountElement * 4.88).toFixed(2);
                    valueCurrencyElement.innerHTML = " PLN";
                    break;
                case "EUR":
                    valueElement.innerHTML = (valueOfAmountElement * 1.02).toFixed(2);
                    valueCurrencyElement.innerHTML = " EUR";
                    break;
                case "USD":
                    valueElement.innerHTML = valueOfAmountElement;
                    valueCurrencyElement.innerHTML = " USD";
                    break;
            }
            break;
    }
});