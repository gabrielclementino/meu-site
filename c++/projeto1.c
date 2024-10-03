// #include <stdio.h>

// int main() {
//     float valores[20];
//     int i;
//     float max, min;

//     printf("Digite 20 valores:\n");
//     for (i = 0; i < 20; i++) {
//         printf("Valor %d: ", i + 1);
//         scanf("%f", &valores[i]);
//     }

//     max = valores[0];
//     min = valores[0];

//     for (i = 1; i < 20; i++) {
//         if (valores[i] > max) {
//             max = valores[i];
//         }
//         if (valores[i] < min) {
//             min = valores[i];
//         }
//     }

//     printf("Valor máximo: %.1fW\n", max);
//     printf("Valor mínimo: %.1fW\n", min);

//     return 0;
// }

// #include <stdio.h>
// #include <string.h>
// #include <math.h>

// struct principal {
//     char nome[50];
//     int idade;
//     float mediaNotas;
// };

// int main() {

//     double raizQuadrada = sqrt(9);
//     printf("Raiz quadrada de 9 e igual a....%.2f\n" ,raizQuadrada);

    // struct principal principal1;
  
    // strcpy(principal1.nome, "Gabriel");
    // principal1.idade = 30;
    // principal1.mediaNotas = 9.9;

    // printf("Nome.....: %s\n", principal1.nome);
    // printf("Idade.....: %d\n", principal1.idade);
    // printf("Media das Notas.....: %.1f\n", principal1.mediaNotas);

    // // float nota1, nota2;
    // // float media;

    // // printf("Digite a primeira nota...: ");
    // // scanf("%f", &nota1);

    // // printf("Digite a segunda nota...: ");
    // // scanf("%f", &nota2);

    // // media = (nota1 + nota2) / 2;

    // // printf("A média do aluno é...: %.2f\n", media);

    // printf("Fim do programa...!\n");


//     return 0;
// }



// #include <stdio.h>

// int main (){

//     int matA[4][4];

//     for(int i = 0; i < 4 ; i++){

//         for (int j = 0; j < 4; j++){

//         scanf("%d", &matA[i][j]);
//         }
//          printf("\n");
//     }
//     for(int i = 0; i < 4 ; i++){

//         for (int j = 0; j < 4; j++){
//              printf("%d ", matA[i][j]);
//         }
//          printf("\n");
    
//     }
//     return 0;
// }


// senhas aleatorias

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int gerarSenha(){
    char frase[40]="";
    int i, cont = 0;
    printf("\n Digite uma frase para gerar senha senha....: ");

    fflush(stdin);

    // usar fgtes para ler a frase
    fgets(frase, 40, stdin);


    // contar quantas vezs o "a" ou "b" aparecem na frase
    
    for(i = 0; i < 40 ; i++){
        if(frase[i]=='a' || frase[i]=='b'){
            cont++;}
    }
    srand(cont); // passando uma 'semente' para a geração aleatoria
    return rand() * rand();

}

void main(){
    int senha;
    senha = gerarSenha();
    printf("Sua senha e = %d", senha);
}