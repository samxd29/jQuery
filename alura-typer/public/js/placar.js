$("botao-placar").click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody"); // .find quer dizer que está dentro do section placar, funciona como uma bolha;
    var usuario = "Samantha";
    var numPalavras = $("#contador-palavras").text();
  
    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);            
    corpoTabela.prepend(linha);            
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
      $(this).parent().parent().remove(); // Como o this é um evento do html e quero trazer para o jQuery é só envolver no $(), comportamento do jQuery;
      //parent() significa subir um andar ou seja fazer alguma coisa com o pai de uma tag;
};