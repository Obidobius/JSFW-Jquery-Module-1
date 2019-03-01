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
            heigh: 'auto',
            opacity:'1',
        });   
        //Finds the ID in the div you want to fade out. You add a function with what functions you want to be triggered after
            $('#increased').find('.input').fadeOut(
                600,
                function(){
                    //Create the new image you have selected to be displayed in the div
                    let newImg =  $('<img class="col-sm-7 input" src="'+ active.prop('src') + '" alt="">')
                    $(newImg).css({
                        display: 'none',
                    })
                    //Empty the current div to display new images
                    $('#increased').empty({
                    });
                    //Takes the new image into the div
                    $('#increased').append(newImg);
                    $(newImg).fadeIn(500);    
                }
            );
    });
});


