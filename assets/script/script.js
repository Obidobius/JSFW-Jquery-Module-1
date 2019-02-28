$(document).ready(function(){
    $('.images').click(function(){
    });

$(document).on('click','.mediaDisplay',function(){
        //The element you have selected
    var active = $(this)
        console.log(active)
        //Changed the size of the element you select once its into the display div
    $('#increased').css({  
            width: '100%',
            heigh: 'auto' ,
        });
        //Removed the element in the display div
    $('#increased').empty({
    });
        //Appends the image you selected into the display div
    $('#increased').append(
        '<img col-sm-7 mediaDisplay input" src="'+ active.prop('src') + '" alt="">');
});





});
