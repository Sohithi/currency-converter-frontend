// Example static rates (you can later replace with API)
const rates = {
    USD: { INR: 83.2, EUR: 0.93, JPY: 157.3 },
    INR: { USD: 0.012, EUR: 0.011, JPY: 1.89 },
    EUR: { USD: 1.07, INR: 89.3, JPY: 168.5 },
    JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0059 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;
    const resultBox = document.getElementById('result');

    if (!amount || amount < 0) {
        resultBox.innerText = "Please enter a valid amount.";
        return;
    }

    if (from === to) {
        resultBox.innerText = `Same currency selected. Amount = ${amount}`;
        return;
    }

    const rate = rates[from][to];
    const converted = (amount * rate).toFixed(2);

    resultBox.innerText = `${amount} ${from} = ${converted} ${to}`;
}
