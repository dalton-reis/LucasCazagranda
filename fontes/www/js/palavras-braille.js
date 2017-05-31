$(document).ready(function () {
    
    var brailleSimples = new Array('100000', '110000', '100100', '100110', '100010', '110100', '110110', '110010', '010100', '010110',
                                   '101000', '111000', '101100', '101110', '101010', '111100', '111110', '111010', '011100', '011110',
                                   '101001', '111001', '101101', '101111', '101011', '111101', '111111', '111011', '011101', '011111',
                                   '100001', '110001', '100111', '100011', '110101', '110111', '110011', '010101', '010111',
                                   '010000', '011000', '010010', '010011', '010001', '011010', '011011', '011001', '001010', '001011',
                                   '001100', '001110', '001101', '001111', '001000', '001001',
                                   '000111', '000011');
                                   
    var correspondenteS = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                                    'u', 'v', 'x', 'y', 'z', 'ç', 'é', 'á', 'è', 'ú',
                                    'â', 'ê', 'ô', '@', 'à', 'ï', 'ü', 'õ', 'w',
                                    ',', ';', ':', '/', '?', '+', '=', 'x', '*', 'º',
                                    'í', 'ã', 'ó', 'nº', '.', '-',
                                    '|', '$');
    
    var palavras = new Array('joaninha', 'jacaré', 'zebra', 'tigre', 'coração', 'abelha', 'avião', 'baú', 'bola', 'caminhões', 
                             'dado', 'elefante', 'folha', 'gato', 'gênio', 'ilha', 'máscara', 'morango', 'ônibus', 'queijo', 
                             'vassoura', 'xícara', 'kiwi', 'livro', 'ninho', 'olho', 'pato', 'rato', 'sapo', 'triângulo', 
                             'uva', 'tesoura', 'coelho', 'passarinho', 'borboleta', 'peixe', 'macaco', 'leão', 'panda', 'cachorro',
                             'girafa', 'coruja', 'árvore', 'melancia', 'lápis', 'borracha', 'tartaruga', 'cobra', 'chapéu', 'lâmpada');

    $(".point-braille-palavras").click(function () {
        if (document.getElementById($(this).attr('id')).style.backgroundColor === "black") {
            document.getElementById($(this).attr('id')).style.backgroundColor = "transparent";
        } else {
            document.getElementById($(this).attr('id')).style.backgroundColor = "black";
        }
    });
    
    $(".ir").click(function () {
        // Recarrega a página inteira para uma nova palavra ser gerada.
        parent.window.document.location.href = '';
    });
    
    $(".point-braille-palavras-confirmar").click(function () {
        var pAtual = '';
        
        if (document.getElementById('c1p1').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        if (document.getElementById('c1p2').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        if (document.getElementById('c1p3').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        if (document.getElementById('c1p4').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        if (document.getElementById('c1p5').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        if (document.getElementById('c1p6').style.backgroundColor === "black") { pAtual = pAtual + '1'; } else { pAtual = pAtual + '0'; }
        
        if (brailleSimples.indexOf(pAtual) >= 0) {
            var letraBraille = correspondenteS[brailleSimples.indexOf(pAtual)].toLowerCase();
            var palavraBraille = document.getElementById('p').innerHTML.split("");
            for (var i = 0; i < palavraBraille.length; ++i) {
                if (document.getElementById('im' + i.toString()).src.search('interrogacao') > 0) {
                    if (palavraBraille[i] === letraBraille) {
                        //document.getElementById('im' + i.toString()).style.border = "dotted green";
                        document.getElementById('im' + i.toString()).src = 'img/sinais-braille-small/' + GetImagemSinalCorreto(letraBraille.toString()) + '-d.png';
                        LimparCelaBraille();
                    }
                    break;
                }
            }
        }
    });
    
    function LimparCelaBraille() {
        document.getElementById('c1p1').style.backgroundColor = "transparent";
        document.getElementById('c1p2').style.backgroundColor = "transparent";
        document.getElementById('c1p3').style.backgroundColor = "transparent";
        document.getElementById('c1p4').style.backgroundColor = "transparent";
        document.getElementById('c1p5').style.backgroundColor = "transparent";
        document.getElementById('c1p6').style.backgroundColor = "transparent";
    }
    
    function GetNovaPalavraBraille() {
        var intOk = false;        
        var indImg = Math.floor(Math.random() * palavras.length);
        
        var palavra = document.createElement("h");
        palavra.id = 'p';
        palavra.className = "textoLatino";
        palavra.innerHTML = palavras[indImg].toString();
        document.getElementById('divTexto').appendChild(palavra);
    
        document.getElementById('img-palavra').src = "img/palavras-braille/" + GetImagemCorreta(palavras[indImg]).toString() + ".png";
        
        var palavraBraille = palavras[indImg].split("");
        for (var i = 0; i < palavraBraille.length; ++i) {
            var img = document.createElement("img");
            img.id = 'im' + i.toString();
            if ((Math.random() >= 0.5) || ((intOk === false) && (i === palavraBraille.length - 1))) {
                intOk = true;
                img.className = "imagem-small-b";
                img.src = "img/sinais-braille-small/interrogacao-p.png";
            } else {
                img.src = "img/sinais-braille-small/" + GetImagemSinalCorreto(palavraBraille[i].toLowerCase()) + ".png";
            }
            document.getElementById('divBraille').appendChild(img);
        }
    }
    
    function GetImagemCorreta(a) {
        if (a === 'avião') { return 'aviao'; } 
        else if (a === 'coração') { return 'coracao'; } 
        else if (a === 'helicóptero') { return 'helicoptero'; } 
        else if (a === 'xícara') { return 'xicara'; } 
        else if (a === 'maçã') { return 'maca'; } 
        else if (a === 'jacaré') { return 'jacare'; } 
        else if (a === 'máscara') { return 'mascara'; } 
        else if (a === 'baú') { return 'bau'; }
        else if (a === 'triângulo') { return 'triangulo'; } 
        else if (a === 'gênio') { return 'genio'; } 
        else if (a === 'ônibus') { return 'onibus'; }
        else if (a === 'caminhões') { return 'caminhoes'; }
        else if (a === 'ímã') { return 'ima'; }
        else if (a === 'óculos') { return 'oculos'; }
        else if (a === 'leão') { return 'leao'; }
        else if (a === 'árvore') { return 'arvore'; }
        else if (a === 'lápis') { return 'lapis'; }
        else if (a === 'chapéu') { return 'chapeu'; }
        else if (a === 'lâmpada') { return 'lampada'; }
        else return a;
    }
    
    function GetImagemSinalCorreto(a) {
        if (a === '!' || a === '+') { return 'exclamacao'; } 
        else if (a === '$') { return 'cifrao'; } 
        else if (a === ',') { return 'virgula'; } 
        else if (a === '-') { return 'hifen'; } 
        else if (a === ';') { return 'ponto-e-virgula'; } 
        else if (a === '@') { return 'arroba'; } 
        else if (a === '=') { return 'igual'; } 
        else if (a === 'á') { return 'a-agudo'; }
        else if (a === 'à') { return 'a-crase'; } 
        else if (a === 'â') { return 'a-circunflexo'; } 
        else if (a === 'ã') { return 'a-til'; }
        else if (a === 'ç') { return 'cedilha'; }
        else if (a === 'é') { return 'e-agudo'; }
        else if (a === 'ê') { return 'e-circunflexo'; }
        else if (a === 'í') { return 'i-agudo'; }
        else if (a === 'º') { return 'grau'; }
        else if (a === 'ó') { return 'o-agudo'; }
        else if (a === 'ô') { return 'o-circunflexo'; }
        else if (a === 'õ') { return 'o-til'; }
        else if (a === 'ú') { return 'u-agudo'; }
        else if (a === '0') { return 'j'; }
        else if (a === '1') { return 'a'; }
        else if (a === '2') { return 'b'; }
        else if (a === '3') { return 'c'; }
        else if (a === '4') { return 'd'; }
        else if (a === '5') { return 'e'; }
        else if (a === '6') { return 'f'; }
        else if (a === '7') { return 'g'; }
        else if (a === '8') { return 'h'; }
        else if (a === '9') { return 'i'; }
        else if (a === ':') { return 'doispontos'; }
        else if (a === '÷') { return 'divisao'; }
        else if (a === '?') { return 'interrogacao'; }
        else if (a === ' ') { return 'espaco'; }
        else if (a === '.') { return 'ponto'; }
        else if (a === 'x') { return 'multiplicacao'; }
        else if (a === '*') { return 'asterisco'; }
        else if (a === '"') { return 'multiplicacao'; }
        else return a;
    }
    
    GetNovaPalavraBraille();
    
});