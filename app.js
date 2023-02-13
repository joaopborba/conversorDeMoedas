const calculateButton = document.getElementById("calculate-button");


calculateButton.addEventListener("click", () => {
    const valueDollar = document.getElementById("value-dollar").value;
    const valueCotacao = document.getElementById("value-cotacao").value;
    const result = document.getElementById("result");
    const cotacao = valueDollar * valueCotacao;
    result.textContent = `O resultado é: R$${cotacao.toFixed(2)}`;
});