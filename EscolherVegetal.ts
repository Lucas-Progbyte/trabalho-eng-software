import prompt from "prompt-sync";

const teclado = prompt();

console.log("===== ESCOLHA UM VEGETAL =====");
console.log("1 - Cenoura");
console.log("2 - Brócolis");
console.log("3 - Alface");
console.log("4 - Tomate");

const opcao: number = +teclado("Escolha um vegetal: ");

switch (opcao) {
    case 1:
        console.log("Você escolheu Cenoura!");
        break;

    case 2:
        console.log("Você escolheu Brócolis!");
        break;

    case 3:
        console.log("Você escolheu Alface!");
        break;

    case 4:
        console.log("Você escolheu Tomate!");
        break;

    default:
        console.log("Opção inválida!");
}