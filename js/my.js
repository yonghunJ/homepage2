$(function() {
    // if($(window).width() <= 480) {
    //   $("#logoImg").each(function() {
    //       console.log("hello")
    //     $(this).attr("src", $(this).attr("src").replace("./images/portfolio/logo.png", "images/310x205/"));
    //     $(this).attr("margin-top", $(this).attr("margin-top").replace("10px", "100px"));
        
    //   });
    // }

    $(window).resize(function() {
        if($(window).width() < 480 ) {
           $('#logoImg').attr('src','./images/portfolio/logo.png');
           $('#logoImg').css('width','150px');
           $('#logodiv').css('text-align','left');
           
        }
        if($(window).width() > 480 ) {
            $('#logoImg').attr('src','./images/portfolio/logo.png');
            $('#logoImg').css('width','235px');
            $('#logodiv').css('text-align','');
            
           
        }
    });
});