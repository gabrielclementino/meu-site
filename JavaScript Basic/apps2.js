
function obterInfo(ladoA, ladoB) {
    const perimetro = ladoA * 2 + ladoB * 2;
    const area = ladoA * ladoB;

    console.log('Retangulo:', ladoA, 'x', ladoB);
    console.log('Perimetro:', perimetro );
    console.log('Area:', area);
    console.log('----------------');

}

// Retangulo 5 x 8

obterInfo(5,8);

// Retangulo 4 x 7

obterInfo(4,7)