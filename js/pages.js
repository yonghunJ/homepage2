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
           $('#logoImg').attr('src','../images/portfolio/logo.png');
           $('#logoImg').css('width','150px');
           $('.small-disappear').hide()
           
        }
        if($(window).width() > 480 ) {
            $('#logoImg').attr('src','../images/portfolio/logo.png');
            $('#logoImg').css('width','235px');
            $('.small-disappear').show()
        }

        if($(window).width() < 992 ) {
            $('#logoImg').attr('src','../images/portfolio/logo.png');
            $('#logoImg').css('width','235px');
            $('.nav-trigger').css('text-align','-webkit-right')
            $('.bar').css('width','20px')
             
            $('.q-wave_images_text_position').remove();
            $('.q-wave_images_text_position_head').before(`
            <div class="col-md-6 q-wave_images_text_position">
                <img src="../images/portfolio/single-07.jpg" class="fadein">
            </div>`)
        }else{
            $('.q-wave_images_text_position').remove();
            $('.q-wave_images_text_position_head').after(`
            <div class="col-md-6 q-wave_images_text_position">
                <img src="../images/portfolio/single-07.jpg" class="fadein">
            </div>`)
        }

        
    });
});
window.onload = function() {
    //dom not only ready, but everything is loaded
    if($(window).width() < 480 ) {
        $('#logoImg').attr('src','../images/portfolio/logo.png');
        $('#logoImg').css('width','150px');
        $('.small-disappear').hide()
     }
     if($(window).width() > 480 ) {
         $('#logoImg').attr('src','../images/portfolio/logo.png');
         $('#logoImg').css('width','235px');
         $('.small-disappear').show()
          
     }

     if($(window).width() < 992 ) {
        $('#logoImg').attr('src','../images/portfolio/logo.png');
        $('#logoImg').css('width','235px');
        $('.nav-trigger').css('text-align','-webkit-right')
        // $('.nav-trigger').css('width','100%')
        $('.bar').css('width','20px')
         
        $('.q-wave_images_text_position').remove();
        $('.q-wave_images_text_position_head').before(`
        <div class="col-md-6 q-wave_images_text_position">
            <img src="../images/portfolio/single-07.jpg" class="fadein">
        </div>`)
    }else{
        $('.q-wave_images_text_position').remove();
        $('.q-wave_images_text_position_head').after(`
        <div class="col-md-6 q-wave_images_text_position">
            <img src="../images/portfolio/single-07.jpg" class="fadein">
        </div>`)
    }
};