$(function() {
    $('#startBtn').on('click',function(){
        var i = 0;
        var timer = setInterval(function(){
        console.log(i);
        $('#benzen').css({
            '-webkit-transform' : ('rotate('+((i++)*15%360)+'deg)')
        })
            if( i > 65){
                clearInterval(timer);
            }
        },10);
    })
})
