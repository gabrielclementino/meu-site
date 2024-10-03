let meuDinheiro = 0;
const coxinha = 5;
const pastel = 7;

meuDinheiro = meuDinheiro - coxinha;

console.log('Valor do meu dinheiro:', meuDinheiro);

const tenhoDinheiroSuficiente = meuDinheiro > pastel;
console.log('tenhoDinheiroSuficiente', tenhoDinheiroSuficiente);

if (tenhoDinheiroSuficiente) {
    console.log('Posso comprar ambos! :D');
} else {
    console.log('Nao posso comprar ambos');
}