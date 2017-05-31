$(document).ready(function () {
    
    $(".point-maquina").addEventListener('touchmove', function (event) {
        var i = 0;
        for (i = 0; i < event.targetTouches; i + 1) {
            var touch = event.targetTouches[i];
            document.getElementById('latinText').innerHTML = 'touched ' + touch.identifier;
        }
    }, false);
    
    $(".point-maquina").click(function (event) {
        var i = 0;
        for (i = 0; i < event.targetTouches; i + 1) {
            var touch = event.targetTouches[i];
            document.getElementById('latinText').innerHTML = 'touched ' + touch.identifier;
        }
    });


});