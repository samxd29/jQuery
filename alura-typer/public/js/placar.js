$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody"); // .find quer dizer que está dentro do section placar, funciona como uma bolha;
    var usuario = "Samantha";
    var numPalavras = $("#contador-palavras").text();
  
    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);            
    corpoTabela.prepend(linha);  
    $(".placar").slideDown(500); 
    scrollPlacar();         
}

function scrollPlacar() {
  var posicaoPlacar = $(".placar").offset().top; // offset pegar a posicao que eu quero que o scroll vai, no caso o número da para ver no console;
  // Obtenha as coordenadas atuais do primeiro elemento ou defina as coordenadas de cada elemento, no conjunto de elementos correspondentes, em relação ao documento.
  $("html,body").animate(
    //Queremos que a página inteira scrolle para baixo, página inteira, em outras palavras, significa que queremos que o body inteiro seja animado.
    // O animate recebe dois parâmetros, um objeto que contém as propriedades CSS a serem animadas e os seus valores, e o tempo de duração da animação.
    {
      scrollTop: posicaoPlacar + "px" //Além das propriedades de estilo, algumas propriedades sem estilo, como scrollTope scrollLeft, assim como propriedades personalizadas, podem ser animadas.
    },1000);
}
  
function novaLinha(usuario, palavras) {
    var linha = $("<tr>"); // elemnto criado com jQuery; 
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href","#"); // attr chamar um atributo e seu valor;
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
  
    link.append(icone);
    
    colunaRemover.append(link);
  
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
  
    return linha;
    
}
  
function removeLinha() {
      event.preventDefault(); // Quando se tem uma tag a ela vai ou redirecionar a outro link ou redirecionar a um identificador, o event.preventDefault vai remover esse;
      var linha = $(this).parent().parent(); // Como o this é um evento do html e quero trazer para o jQuery é só envolver no $(), comportamento do jQuery;
      linha.fadeOut();// o fadeOut é um efeito do jQuery que vai esmaecendo;
      setTimeout(function(){ // O método setTimeout () chama uma função ou avalia uma expressão após um número especificado de milissegundos.
          linha.remove();
      },1000);
      
      //parent() significa subir um andar ou seja fazer alguma coisa com o pai de uma tag;
      
};

function mostraPlacar() {
    $(".placar").stop().slideToggle(600); // a função stop interrompe uma aplicação para seguir com outra, neste caso, ele vai frear um "bug" da animação
    // que é se o usuário ficar apertando o botão de aparecer e desaparecer vai ficar no loppin infinito;
}