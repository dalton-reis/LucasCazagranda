$(document).ready(function () {
    
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
        else if (a === 'x' && num === true) { return 'multiplicacao'; }
        else if (a === '*') { return 'asterisco'; }
        else if (a === '"') { return 'multiplicacao'; }
        else return a;
    }

    for (var divAtual = 1; divAtual <= 2; ++divAtual) {
        var palavra = document.getElementById('divTexto' + divAtual.toString()).innerHTML.split("");
        var sinal = document.getElementById('let' + divAtual.toString()).innerHTML.toString();
        var num = false;
        document.getElementById('divTexto' + divAtual.toString()).innerHTML = "";

        for (var i = 0; i < palavra.length; ++i) {
            var letra = document.createElement( "h" );
            if (palavra[i] === sinal) {
                if (palavra.length > 17) {
                    letra.className = "light-blue lighten-5 indigo-text darken-4-text center-align textoLatino3";
                } else {
                    letra.className = "light-blue lighten-5 indigo-text darken-4-text center-align textoLatino";
                }
            } else {
                if (palavra.length > 17) {
                    letra.className = "textoLatino3";
                } else {
                    letra.className = "textoLatino";
                }
            }
            letra.innerHTML = palavra[i];
		    document.getElementById('divTexto' + divAtual.toString()).appendChild(letra);

            if (palavra[i].toLowerCase() >= "0" && palavra[i].toLowerCase() <= "9") {
                if ((num === false) || (i > 0 && palavra[i - 1] === " ")) {
                    var imgN = document.createElement("img");
                    imgN.className = "imagem-small";
                    imgN.src = "../img/sinais-braille-small/shift-n.png";
                    document.getElementById('divBraille' + divAtual.toString()).appendChild(imgN);
                    num = true;
                }
            } else if (num === true && palavra[i] === "x") {
                num = true;
            } else if (palavra[i] != " ") {
                num = false;
            }
        
            if (palavra[i] === palavra[i].toUpperCase() && palavra[i].toLowerCase() >= "a" && palavra[i].toLowerCase() <= "z") {
                var imgM = document.createElement("img");
                imgM.className = "imagem-small";
                imgM.src = "../img/sinais-braille-small/shift.png";
                document.getElementById('divBraille' + divAtual.toString()).appendChild(imgM);
            }
            
            var img = document.createElement("img");
		    img.className = "imagem-small";
            img.src = "../img/sinais-braille-small/" + GetImagemSinalCorreto(palavra[i].toLowerCase());
            if (palavra[i] === sinal) {
                img.src = img.src + "-d";
            }
            img.src = img.src + ".png";
		  document.getElementById('divBraille' + divAtual.toString()).appendChild(img);
        }
    }

});