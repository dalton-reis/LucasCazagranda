$(document).ready(function () {
    
    function GetQueryString(a) {
        a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split("&"));

        if (typeof a === "string") {
            a = a.split("#").join("&").split("&");
        }

        var b = {};
        
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }

        return b;
    }
    
    function GetPalavraCorreta(a) {
        if (a === 'aviao') { return 'avião'; } 
        else if (a === 'coracao') { return 'coração'; } 
        else if (a === 'helicoptero') { return 'helicóptero'; } 
        else if (a === 'xicara') { return 'xícara'; } 
        else if (a === 'maca') { return 'maçã'; } 
        else if (a === 'jacare') { return 'jacaré'; } 
        else if (a === 'mascara') { return 'máscara'; } 
        else if (a === 'bau') { return 'baú'; }
        else if (a === 'triangulo') { return 'triângulo'; } 
        else if (a === 'genio') { return 'gênio'; } 
        else if (a === 'onibus') { return 'ônibus'; }
        else if (a === 'caminhoes') { return 'caminhões'; }
        else if (a === 'ima') { return 'ímã'; }
        else if (a === 'oculos') { return 'óculos'; }
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
        else if (a === 'x' && num === true) { return 'multiplicacao'; }
        else if (a === '*') { return 'asterisco'; }
        else if (a === '"') { return 'multiplicacao'; }
        else return a;
    }

    // uso
    var qs = GetQueryString();
    var num = false;
    var palavra = GetPalavraCorreta(qs["palavra"]).split("");
    for (var i = 0; i < palavra.length; ++i) {
        var letra = document.createElement( "h" );
        if (palavra[i] === qs["sin"]) {
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
		document.getElementById('divTexto').appendChild(letra);

        if (palavra[i].toLowerCase() >= "0" && palavra[i].toLowerCase() <= "9") {
            if ((num === false) || (i > 0 && palavra[i - 1] === " ")) {
                var imgN = document.createElement("img");
                imgN.className = "imagem-small";
                imgN.src = "../img/sinais-braille-small/shift-n.png";
                document.getElementById('divBraille').appendChild(imgN);
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
            if (qs["sin"] === "Letra Maiúscula") {
                imgM.src = "../img/sinais-braille-small/shift-d.png";
            } else {
                imgM.src = "../img/sinais-braille-small/shift.png";
            }
            document.getElementById('divBraille').appendChild(imgM);
        }
        
        var img = document.createElement("img");
		img.className = "imagem-small";
        img.src = "../img/sinais-braille-small/" + GetImagemSinalCorreto(palavra[i].toLowerCase());
        switch(palavra[i]) {
            case '0': img.src = "../img/sinais-braille-small/j"; break;
            case '1': img.src = "../img/sinais-braille-small/a"; break;
            case '2': img.src = "../img/sinais-braille-small/b"; break;
            case '3': img.src = "../img/sinais-braille-small/c"; break;
            case '4': img.src = "../img/sinais-braille-small/d"; break;
            case '5': img.src = "../img/sinais-braille-small/e"; break;
            case '6': img.src = "../img/sinais-braille-small/f"; break;
            case '7': img.src = "../img/sinais-braille-small/g"; break;
            case '8': img.src = "../img/sinais-braille-small/h"; break;
            case '9': img.src = "../img/sinais-braille-small/i"; break;
            case ':': img.src = "../img/sinais-braille-small/doispontos"; break;
            case '÷': img.src = "../img/sinais-braille-small/divisao"; break;
            case '?': img.src = "../img/sinais-braille-small/interrogacao"; break;
            case ' ': img.src = "../img/sinais-braille-small/espaco"; break;
            case '.': img.src = "../img/sinais-braille-small/ponto"; break;
            case '+': img.src = "../img/sinais-braille-small/!"; break;    
            case 'x': if (num) { img.src = "../img/sinais-braille-small/multiplicacao"; } break;
            case '*': img.src = "../img/sinais-braille-small/asterisco"; break;
            case '"': img.src = "../img/sinais-braille-small/multiplicacao"; break;
        }
        if (palavra[i] === qs["sin"]) {
            img.src = img.src + "-d";
        }
        img.src = img.src + ".png";
		document.getElementById('divBraille').appendChild(img);
    }

    document.getElementById('let').innerHTML = qs["sin"];    
    document.getElementById('img').src = "../img/palavras-braille/" + qs["palavra"] + ".png";
    
});