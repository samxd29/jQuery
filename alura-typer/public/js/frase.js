$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numerosAleatorios = Math.floor(Math.random() * data.length); // Relembrando Math.random gera aleatorio; Math.floor arendonda o numero para baixo;
    frase.text(data[numerosAleatorios].texto); // o text() é para mudar a frase e o .texto para falar onde eu quero que pegue a requisição;
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numerosAleatorios].tempo);
}