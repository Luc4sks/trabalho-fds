/*texto que aparece quando clica no botao&*/
let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent = "Quando tudo parecer impossível, é sinal de que está precisando de uns bons dias de descanso para aliviar a pressão e liberar a sua mente. Depois, verá que os problemas nem eram tão grandes assim.";
});

/*mudando a cor do link quando passa o mouse*/
let link = document.getElementById("meuLink");

link.addEventListener("mouseover", function() {
    link.style.color = "red"; // cor ao passar o mouse
});

link.addEventListener("mouseout", function() {
    link.style.color = "blue"; // cor ao tirar o mouse
});

