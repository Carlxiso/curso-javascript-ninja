(function (win, doc) {
    'use strict';

    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    /*VARIABLES*/
        var $inputDisplay = doc.querySelector( '[data-js="display"]' );
        var $buttonsNumber = doc.querySelectorAll( '[data-js="buttonNumber"]' );
        console.log( $buttonsNumber );
        var $buttonsOperators = doc.querySelectorAll( '[data-js="button-operator"]' );
        var $operatorsReset = doc.querySelector( '[data-js="button-operator-ce"]' );
        var $buttonEqual = doc.querySelector( '[data-js="button-operator-equal"]' );
    /*VARIABLES*/

    /*INTERACTION THROUGH BUTTONS*/
        Array.prototype.forEach.call( $buttonsNumber, function ( button ) {
            console.log( button );
            button.addEventListener( 'click', handleClickNumber, false );
        });
        Array.prototype.forEach.call( $buttonsOperators, function ( button ) {
            console.log( button );
            button.addEventListener( 'click', handleClickOperators, false)
        })
            $buttonEqual.addEventListener( 'click', handleClickEqual, false);
            $operatorsReset.addEventListener( 'click', handleClickReset, false );
    /*INTERACTION THROUGH BUTTONS*/

    /*CONCATENATION VALUES BUTTONS*/
        function handleClickNumber( event ) {
            console.log( this.value );
            $inputDisplay.value += this.value;
        };

        function handleClickOperators( event ) {
            console.log( this.value );
            $inputDisplay.value = removeLastItemIfIsAnOperator( $inputDisplay.value );
            $inputDisplay.value += this.value;
        }

        function isLastItemOperation( number ) {
            var operators = [ '+', '-', '*', '/' ];
            var lastItem = number.split('').pop();
            return operators.some(function ( operator ) {
                return operator === lastItem;
            });
        };
    /*CONCATENATION VALUES BUTTONS*/

    /*OPERATION EQUAL*/

        function handleClickEqual() {
            $inputDisplay.value = removeLastItemIfIsAnOperator( $inputDisplay.value );
            var allValues = $inputDisplay.value.match( /\d+[+*/-]?/g );
            // console.log($inputDisplay.value.match( /(?:\d+)|[+*/-]/g ) );
            console.log(allValues);
            var result = allValues.reduce(function ( accumulated, actual ) {
                var firstValue = accumulated.slice( 0, -1 );
                var grabOperator = accumulated.split('').pop();
                var lastValue = removeLastItemIfIsAnOperator( actual );
                var lastOperator = isLastItemOperation( actual ) ? actual.split('').pop(): ' ';
                switch ( grabOperator ) {
                    case '+':
                        return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
                    case '-':
                        return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
                    case '*':
                        return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
                    case '/':
                        return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
                    default:
                }
            });
            $inputDisplay.value = result;
            console.log(result);
        };

    /*OPERATION EQUAL*/

    /*RESET DISPLAY*/
        function handleClickReset( event ) {
            $inputDisplay.value = 0;
        };
    /*RESET DISPLAY*/

    /*Remove last Operator*/
        function removeLastItemIfIsAnOperator( number ) {
            if ( isLastItemOperation( number ) ) {
                return number.slice( 0, -1 );
            };
                return number;
        };
    /*Remove last Operator*/






})( window, document ); // END IIFE
