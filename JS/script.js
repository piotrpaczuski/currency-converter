{
    const writeInputCurrency = () => {
        return document.querySelector(".js-inputCurrency");
    }

    const writeOutputCurrency = () => {
        return document.querySelector(".js-outputCurrency");
    }

    const changeCurrentRate = () => {
        writeInputCurrency().addEventListener("change", showCurrentRate);
        writeOutputCurrency().addEventListener("change", showCurrentRate);
    }

    const writeValueCurrentRate = () => {
        const currentRateElement = document.querySelector(".js-currentRate");
        
        if (writeInputCurrency().value === writeOutputCurrency().value) {
            return currentRateElement.value = "Wybrałeś te same waluty!"
        }
        else if (writeInputCurrency().value === "PLN" && (writeOutputCurrency().value === "EUR" || writeOutputCurrency().value === "USD")) {
            return currentRateElement.value = "Obecny kurs wynosi: 0.21";
        }
        else if (writeInputCurrency().value === "EUR" && writeOutputCurrency().value === "PLN") {
            return currentRateElement.value = "Obecny kurs wynosi: 4.77";
        }
        else if (writeInputCurrency().value === "EUR" && writeOutputCurrency().value === "USD") {
            return currentRateElement.value = "Obecny kurs wynosi: 0.98";
        }
        else if (writeInputCurrency().value === "USD" && writeOutputCurrency().value === "PLN") {
            return currentRateElement.value = "Obecny kurs wynosi: 4.88";
        }
        else if (writeInputCurrency().value === "EUR" && writeOutputCurrency().value === "PLN") {
            return currentRateElement.value = "Obecny kurs wynosi: 1.02";
        }
    }

    const showCurrentRate = () => {
        switch (writeInputCurrency().value) {
            case "PLN":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate();
                    case "EUR":
                        return writeValueCurrentRate();
                    case "USD":
                        return writeValueCurrentRate();
                }
            case "EUR":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate();
                    case "EUR":
                        return writeValueCurrentRate();
                    case "USD":
                        return writeValueCurrentRate();
                }
            case "USD":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate();
                    case "EUR":
                        return writeValueCurrentRate();
                    case "USD":
                        return writeValueCurrentRate();
                }
        }
    }

    const writeButton = () => {
        return buttonElement = document.querySelector(".js-button");
    }

    const onButtonClick = () => {
        writeButton().addEventListener("click", (event) => {
            event.preventDefault();
            const valueElement = document.querySelector(".js-value");
            const valueCurrencyElement = document.querySelector(".js-currency");
            const valueOfAmountElement = parseFloat(document.querySelector(".js-inputAmount").value).toFixed(2);

            switch (writeInputCurrency().value) {
                case "PLN":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            valueElement.innerHTML = valueOfAmountElement;
                            return valueCurrencyElement.innerHTML = " PLN";
                        case "EUR":
                            valueElement.innerHTML = (valueOfAmountElement * 0.21).toFixed(2);
                            return valueCurrencyElement.innerHTML = " EUR";
                        case "USD":
                            valueElement.innerHTML = (valueOfAmountElement * 0.21).toFixed(2);
                            return valueCurrencyElement.innerHTML = " USD";
                    }
                case "EUR":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            valueElement.innerHTML = (valueOfAmountElement * 4.77).toFixed(2);
                            return valueCurrencyElement.innerHTML = " PLN";
                        case "EUR":
                            valueElement.innerHTML = valueOfAmountElement;
                            return valueCurrencyElement.innerHTML = " EUR";
                        case "USD":
                            valueElement.innerHTML = (valueOfAmountElement * 0.98).toFixed(2);
                            return valueCurrencyElement.innerHTML = " USD";
                    }
                case "USD":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            valueElement.innerHTML = (valueOfAmountElement * 4.88).toFixed(2);
                            return valueCurrencyElement.innerHTML = " PLN";
                        case "EUR":
                            valueElement.innerHTML = (valueOfAmountElement * 1.02).toFixed(2);
                            return valueCurrencyElement.innerHTML = " EUR";
                        case "USD":
                            valueElement.innerHTML = valueOfAmountElement;
                            return valueCurrencyElement.innerHTML = " USD";
                    }
            }
        });
    }

    const init = () => {
        onButtonClick();
        changeCurrentRate();
    }

    init();
}