# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( x, y) {
    return x + y;
}
soma(10, 15)

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var x = soma(10, 15) + 5;

// Qual o valor atualizado dessa variável?
30

// Declare uma nova variável, sem valor.
var y;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
    y = 'O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.';
    return y;
}

// Invoque a função criada acima.
addValue()

// Qual o retorno da função? (Use comentários de bloco).
/*O retorno da função é uma string - 'O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.'*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function wildly(a,b,c) {
    if (a === undefined || b === undefined || c === undefined ) {
        return 'Preencha todos os valores corretamente!';
    }
    return a * b * c + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
wildly(1,4)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//  valor retornado = 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
wildly(1,4,7)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
30 // valor retornado pela função wildly

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function functionName(x, y, z) {
        var isx;
        var isy;
        var isz;
        if (x !== undefined && x !== null && x !== ' ') {
         isx = true;
        }
        if (y !== undefined && y !== null && y !== ' ') {
         isy = true;
        }
        if (z !== undefined && z !== null && z !== ' ') {
         isz = true;
        }
        if (isx && isy && isz) {
            return ((x+y)/z);
        } else {
            if (isx && !isy && !isz) {
                return x;
            }
            if (!isx && isy && !isz) {
                return y;
            }
            if (!isx && !isy && isz) {
                return z;
            }
            if (isx && isy && !isz) {
                return (x + y);
            }
            if (isx && !isy && isz) {
                return (x + z);
            }
            if (!isx && isy && isz) {
                return (y + z);
            }
        }
        return false;
    }
    var x = functionName();

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
    var x = functionName(); // o valor de x é false
    var x = functionName(1); // o valor de x é um
    var x = functionName(1,5); // o valor de x é seis
    var x = functionName(2,4,5); // o valor de x é 1.2 (um ponto dois)
```
