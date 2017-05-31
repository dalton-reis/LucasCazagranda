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
                                    ',', ';', ':', '/', '?', '! (Exclamação) ou + (Adição)', '=', '" (aspas duplas) ou x (multiplicação)', '*', 'º',
                                    'í', 'ã', 'ó', 'nº', '.', '-',
                                    '|', '$');
    
    var brailleComposto = new Array('000101', '001111', '110001001000', '000001001110', '001001001001', '010101101010', '111011001000', '000001011111',
                                    '000010111000', '000111010000', '110101100011', '000010010011');
    
    var correspontenteC = new Array('Maiúscula', 'Número', '(', ')', '_ (Travessão)', 'Círculo', '[', ']', '{', '}', 'Raiz quadrada', 'Traço de fração');
    
    var brailleNumero = new Array('100000', '110000', '100100', '100110', '100010', '110100', '110110', '110010', '010100', '010110');
    
    var correspondenteN = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');

    $(".point-braille").click(function () {
        if (document.getElementById($(this).attr('id')).style.backgroundColor === "black") {
            document.getElementById($(this).attr('id')).style.backgroundColor = "transparent";
        } else {
            document.getElementById($(this).attr('id')).style.backgroundColor = "black";
        }
        
        var pAtualC1 = '';
        
        if (document.getElementById('c1p1').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        if (document.getElementById('c1p2').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        if (document.getElementById('c1p3').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        if (document.getElementById('c1p4').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        if (document.getElementById('c1p5').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        if (document.getElementById('c1p6').style.backgroundColor === "black") { pAtualC1 = pAtualC1 + '1'; } else { pAtualC1 = pAtualC1 + '0'; }
        
        var pAtualC2 = '';
        
        if (document.getElementById('c2p1').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        if (document.getElementById('c2p2').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        if (document.getElementById('c2p3').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        if (document.getElementById('c2p4').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        if (document.getElementById('c2p5').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        if (document.getElementById('c2p6').style.backgroundColor === "black") { pAtualC2 = pAtualC2 + '1'; } else { pAtualC2 = pAtualC2 + '0'; }
        
        document.getElementById('sinal-braille').innerHTML = pAtualC1 + ' - ' + pAtualC2;
        
        // Identificando pontos braille.    
        if ((pAtualC1 === '000000') && (pAtualC2 === '000000')) {
            document.getElementById('sinal-braille').innerHTML = 'Espaço';
        } else if (brailleComposto.indexOf(pAtualC1) >= 0) {
            if ((brailleSimples.indexOf(pAtualC2) < 0) && (pAtualC2 === '000000')) {
                document.getElementById('sinal-braille').innerHTML = correspontenteC[brailleComposto.indexOf(pAtualC1)];
            } else if (brailleSimples.indexOf(pAtualC2) >= 0) {
                
                // Tratamento dos sinais compostos.
                if (pAtualC1 === '000101') { // Letra maíuscula
                    document.getElementById('sinal-braille').innerHTML = correspondenteS[brailleSimples.indexOf(pAtualC2)].toUpperCase();
                    
                    if (document.getElementById('sinal-braille').innerHTML.length > 15) {
                        document.getElementById('sinal-braille').style.fontSize = '300%';
                    } else {
                        document.getElementById('sinal-braille').style.fontSize = '400%';
                    }
                } else if (pAtualC1 === '001111') { // Número
                    if (brailleNumero.indexOf(pAtualC2) >= 0) {
                        document.getElementById('sinal-braille').innerHTML = correspondenteN[brailleNumero.indexOf(pAtualC2)];
                    } else {
                        document.getElementById('sinal-braille').innerHTML = 'Sinal sem correspondência';
                    }
                } else {
                    document.getElementById('sinal-braille').innerHTML = 'Sinal composto sem tratamento';
                }
                
            } else {
                document.getElementById('sinal-braille').innerHTML = 'Sinal sem correspondência';
            }
        } else if (brailleComposto.indexOf(pAtualC1 + pAtualC2) >= 0) {
            document.getElementById('sinal-braille').innerHTML = correspontenteC[brailleComposto.indexOf(pAtualC1 + pAtualC2)];
        }else if (((brailleSimples.indexOf(pAtualC1) >= 0) && (brailleSimples.indexOf(pAtualC2) < 0) && (pAtualC2 === '000000')) ||
                   ((brailleSimples.indexOf(pAtualC2) >= 0) && (brailleSimples.indexOf(pAtualC1) < 0) && (pAtualC1 === '000000'))) {
            if (brailleSimples.indexOf(pAtualC1) >= 0) {
                document.getElementById('sinal-braille').innerHTML = correspondenteS[brailleSimples.indexOf(pAtualC1)];
            } else {
                document.getElementById('sinal-braille').innerHTML = correspondenteS[brailleSimples.indexOf(pAtualC2)];
            }
            
            if (document.getElementById('sinal-braille').innerHTML.length > 15) {
                document.getElementById('sinal-braille').style.fontSize = '300%';
            } else {
                document.getElementById('sinal-braille').style.fontSize = '400%';
            }
        } else {
            document.getElementById('sinal-braille').innerHTML = 'Sinal sem correspondência';
        }
	});

});