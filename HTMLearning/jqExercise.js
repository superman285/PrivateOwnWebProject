$(function() {
    $('#foreach-children').on('click',function(){
        $('.children').each(function(index){
            if(index%2) {
                $(this).css("background-color","orangered");
            } else {
                $(this).css("background-color","forestgreen");
            }
        });
    });
});

$('#prev').on('click', function() {
    $('#children').prev().addClass('new');
});
$('#prevAll').on('click', function() {
    $('#children').prevAll().addClass('new');
});
$('#prevUntil').on('click', function() {
    $('#children').prevUntil('#oldestChildren').addClass('new');
});
