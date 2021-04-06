var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();
        
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    var cronometroID = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    }, 1000);
  });
}

function finalizaJogo() {
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado");
  inserePlacar();
}

function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input", function () {
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length); // pedaço da frase contando desde a incial até o todo.
    if (digitado == comparavel) {
      campo.addClass("borda-correto");
      campo.removeClass("borda-errado");
    } else {
      campo.addClass("borda-errado");
      campo.removeClass("borda-correto");
    }
  });
}




function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);

    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-errado");
    campo.removeClass("borda-correto");
};
