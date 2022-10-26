var div = document.getElementById('log');
var textos = ['Apresentação: O que é um técnico?','Turma 22 TGPSI','Grupo 5', 'Jeremias Rivarola',
 'Pedro Bonner', 'Daniel Araújo',
  'Pedro Elias'];
 
function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 700); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 110);
}
 
function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 97);
}
 
function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);
