let number = prompt('Adevinha o número:');
if (parseInt(number) !== 10) {
    throw 'Invalida a tua resposta!';
} else {
    console.log("Você acertou, parabéns!!");
}
