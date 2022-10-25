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

    const writeValueCurrentRate = (rate) => {
        const currentRateElement = document.querySelector(".js-currentRate");
        
        if (writeInputCurrency().value === writeOutputCurrency().value) {
            return currentRateElement.value = rate;
        }
        return currentRateElement.value = rate;
    }

    const showCurrentRate = () => {
        switch (writeInputCurrency().value) {
            case "PLN":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate("Wybrałeś te same waluty!");
                    case "EUR":
                        return writeValueCurrentRate("Obecny kurs wynosi: 0.21");
                    case "USD":
                        return writeValueCurrentRate("Obecny kurs wynosi: 0.21");
                }
            case "EUR":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate("Obecny kurs wynosi: 4.77");
                    case "EUR":
                        return writeValueCurrentRate("Wybrałeś te same waluty!");
                    case "USD":
                        return writeValueCurrentRate("Obecny kurs wynosi: 0.98");
                }
            case "USD":
                switch (writeOutputCurrency().value) {
                    case "PLN":
                        return writeValueCurrentRate("Obecny kurs wynosi: 4.88");
                    case "EUR":
                        return writeValueCurrentRate("Obecny kurs wynosi: 1.02");
                    case "USD":
                        return writeValueCurrentRate("Wybrałeś te same waluty!");
                }
        }
    }

    const writeButton = () => {
        return buttonElement = document.querySelector(".js-button");
    }

    const calculateCurrency = (rate, value) => {
        const valueElement = document.querySelector(".js-value");
        const valueCurrencyElement = document.querySelector(".js-currency");
        const valueOfAmountElement = parseFloat(document.querySelector(".js-inputAmount").value).toFixed(2);

        valueElement.innerHTML = (valueOfAmountElement * rate).toFixed(2);
        return valueCurrencyElement.innerHTML = value;
    }

    const onButtonClick = () => {
        writeButton().addEventListener("click", (event) => {
            event.preventDefault();

            switch (writeInputCurrency().value) {
                case "PLN":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            return calculateCurrency(1, " PLN");
                        case "EUR":
                            return calculateCurrency(0.21, " EUR");
                        case "USD":
                            return calculateCurrency(0.21, " USD");
                    }
                case "EUR":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            return calculateCurrency(4.77, " PLN");
                        case "EUR":
                            return calculateCurrency(1, " EUR");
                        case "USD":
                            return calculateCurrency(0.98, " USD");
                    }
                case "USD":
                    switch (writeOutputCurrency().value) {
                        case "PLN":
                            return calculateCurrency(4.88, " PLN");
                        case "EUR":
                            return calculateCurrency(1.02, " EUR");
                        case "USD":
                            return calculateCurrency(1, " USD");
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