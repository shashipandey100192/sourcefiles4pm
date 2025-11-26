$(document).ready(function(){

    $(".first button").click(function(){

        // $(".first p").hide();
        $(".first p").toggle(8000);

    });

    $(".second button").click(function(){
        // $(".second p").fadeOut();
        // $(".second p").fadeToggle(5000);
        $(".second p").fadeTo(500,0.5);
    });


    $(".third h5").click(function(){
        // $("#more").slideDown();
        var a = $(this).text();
        $("#more").slideToggle();
        if(a=="more")
        {
           $(".third h5").text("less"); 
        }
        else
        {
             $(".third h5").text("more"); 
        }
    });


    $("#one").click(function(){
        $(this).animate({'margin-left':500,fontSize:100},500,function(){
            $(this).animate({marginLeft:0,fontSize:30})
        });
    })



})