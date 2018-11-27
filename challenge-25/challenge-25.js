(function () {
    'use strict';
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D

    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories

    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */

    function onEvents( element, event, callback ) {
        document.querySelector( element )
        .addEventListener( event, callback, false);
    };

    onEvents( '[data-js="linkMouserOver"]', 'mouseover', function ( event ) {
        event.preventDefault();
        event.target.style.color = 'orange';

    });

    onEvents( '[data-js="linkMouserOver"]', 'mouseout', function ( event ) {
        event.target.style.color = 'red';
    });

    function selectEvent( element, event, callback) {
        document.querySelector( element )
        .addEventListener( event, callback, false);
    };

    selectEvent( '[data-js="selectText"]', 'select', function (  ) {
        alert('Selection changed');
    });

    function insertTextInput( element, event, callback ) {
        document.querySelector( element )
        .addEventListener( event, callback, false);
    };

    insertTextInput( '[data-js="insertData"]', 'input', function ( event ) {
        event.value = this.value;
    });

    function inputFocus( element, event, callback ) {
        document.querySelector( element )
        .addEventListener( event, callback, true);
    };

    inputFocus( '[data-js="form"]', 'focus', function ( event ) {
        event.target.style.background = 'yellow';
    });

    inputFocus( '[data-js="form"]', 'blur', function ( event ) {
        event.target.style.background = '';
    });

    function transitions( element, callback, event ) {
        document.querySelector( event )
        addEventListener( event, callback, false );
    };

    transitions( '[data-js="squareRotation"]', 'transitionrun', function () {
        console.log('transition fired');
    });


})();
