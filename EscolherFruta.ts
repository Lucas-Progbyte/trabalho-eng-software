import prompt from "prompt-sync";

const teclado = prompt();

console.log("===== ESCOLHA UMA FRUTA =====");
console.log("1 - Maçã");
console.log("2 - Banana");
console.log("3 - Laranja");
console.log("4 - Morango");

const opcao: number = +teclado("Escolha uma fruta: ");

switch (opcao) {
    case 1:
        console.log("Você escolheu Maçã!");
        break;

    case 2:
        console.log("Você escolheu Banana!");
        break;

    case 3:
        console.log("Você escolheu Laranja!");
        break;

    case 4:
        console.log("Você escolheu Morango!");
        break;

    default:
        console.log("Opção inválida!");
}