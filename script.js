// cotação de meodas do dia.
const USD = 5.88;
const EUR = 6.12;
const GBP = 7.29;


const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// Manipulando o input amount para receber apenas números
amount.addEventListener("input", () => {
  const hasCaractersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCaractersRegex, "");
})

// Capturando o evento de envio do formulário
form.onsubmit = (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      coverteCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      coverteCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      coverteCurrency(amount.value, GBP, "£");
      break;
  }
}

// funcão para converter a moeda
function coverteCurrency(amount, price, symbol) {
  try {
    //exibe a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // calcula o valor total
    let total = amount * price;

    // exibe o valor total
    result.textContent = formatCurrencyBRL(total);

    // aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result")

  } catch (error) {
    //remove a classe que exibe o footer
    footer.classList.remove("show-result");

    console.log("erro ao converter a moeda");
    alert("erro ao converter a moeda, tente novamente mais tarde");
  }
}

// formata o valor da moeda em BRL
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    })
}

