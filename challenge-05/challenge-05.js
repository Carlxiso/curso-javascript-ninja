/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [28, 83900, 2789, 'string', 19890];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function functionArray(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
functionArray(qualquer)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function functionAnother(arr, index) {
    return arr [ index ];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayFive = [28, null, true, 'string', 19890];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
 functionAnother(arrayFive, 0);
 functionAnother(arrayFive, 1);
 functionAnother(arrayFive, 2);
 functionAnother(arrayFive, 3);
 functionAnother(arrayFive, 4);



/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
 var livros = {
     'nomeDoLivro1': {
                        quantidadePaginas: 100,
                        autor: 'Fernando Pessoa',
                        editora: 'Porto Editora'
                        },
     'nomeDoLivro2': {
                        quantidadePaginas: 200,
                        autor: 'António Lobo Antunes',
                        editora: 'Dom Quixote'
                        },
    'nomeDoLivro3': {
                        quantidadePaginas: 150,
                        autor: 'José Saramago',
                        editora: 'Porto Editora'
                        }
                };
    if ( !bookName ) {
            return livros;
    }

    return livros[ bookName ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro nomeDoLivro2 tem ' + book('nomeDoLivro2').quantidadePaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro nomeDoLivro3 é ' + book('nomeDoLivro3').autor + " !"

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro nomeDoLivro1 foi publicado pela editora ' + book('nomeDoLivro1').editora + " !"
