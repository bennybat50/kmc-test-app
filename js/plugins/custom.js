 $(document).ready(function(){
     var btn1Clicked=false;
     var btn2Clicked=false;
     var btn3Clicked=false;

     $('#btns1').click(function(){
         if(btn1Clicked==false){
            $('#now1').hide();
            $('#title1').css({'color':'white'});
            $('#content1').css({'background-color':'#00294B'});
            $('#later1').show();
            btn1Clicked=true;
         }else {
            $('#now1').show();
            $('#title1').css({'color':'black'});
            $('#content1').css({'background-color':'white'});
            $('#later1').hide();
            btn1Clicked=false;
         }
     })

     $('#btns2').click(function(){
        if(btn2Clicked==false){
           $('#now2').hide();
           $('#title2').css({'color':'white'});
           $('#content2').css({'background-color':'#00294B'});
           $('#later2').show();
           btn2Clicked=true;
        }else {
           $('#now2').show();
           $('#title2').css({'color':'black'});
           $('#content2').css({'background-color':'white'});
           $('#later2').hide();
           btn2Clicked=false;
        }
    })

    $('#btns3').click(function(){
        if(btn3Clicked==false){
           $('#now3').hide();
           $('#title3').css({'color':'white'});
           $('#content3').css({'background-color':'#00294B'});
           $('#later3').show();
           btn3Clicked=true;
        }else {
           $('#now3').show();
           $('#title3').css({'color':'black'});
           $('#content3').css({'background-color':'white'});
           $('#later3').hide();
           btn3Clicked=false;
        }
    })
    
    // <!-- Initializing the loading images lazy -->
        // $('.header-v1').css("top",-110);
        $('#page').css("opacity",0);
      
      //calling jPreLoader function with properties
      $('body').jpreLoader({
        splashID: "#jSplash",
        splashFunction: function() {  //passing Splash Screen script to jPreLoader
          $('#jSplash').hide().fadeIn(100);
        }
      }, function() { //jPreLoader callback function
         // $('.header-v1').animate({"top":0}, 800, function() {
         // });
        $('#page').css("opacity",1);
       
      });
  // <!-- Initializing the navi mobile site -->
  $("#toggle-navi-mobile").click(function(){
            $(".off-canvas-menu").collapse('toggle');
        });

        $("#close-button-navi-mobile").click(function(){
            $(".off-canvas-menu").collapse('hide');
        });
    //Mobile Menu Scroll Enabel
    $(window).load(function(){
        $(".mCustomScrollbar").mCustomScrollbar();

    });
    // --------------------------------------------------
    // Sticky Header
    // --------------------------------------------------
    var a = false,
        b = null;
    $(window).scroll(function() {
        $(window).scrollTop() > 200 ? a || (b = new Waypoint.Sticky({
            element: $("#sticked-menu")
        }), a = true, $("#sticked-menu").addClass("animated slideInDown")) : (b && (b.destroy(), a = false), $("#sticked-menu").removeClass("animated slideInDown"))
    }); 

    // <!-- Intializing Navigation Effect-->
    $('ul.navi-level-1 li').hover
          (
            function()
            {
              $(this).children('ul.navi-level-2').addClass("open-navi-2 animated fadeInUp");
            },
            function()
            {
                    $(this).children('ul.navi-level-2').removeClass("open-navi-2 animated fadeInUp");
                }
          );
    // <!-- Form Search Navi-->
    $('.btn-search-navi').click(function()
        {
            $('.form-search-navi input.form-control').toggleClass("open-search-input animated fadeInUp");
            $('.btn-search-navi .fa-search').toggleClass("fa-remove");
            $('.btn-search-navi').toggleClass("active");
            return false;
        });
                               
         

      // <!-- Intializing Navi Menu-->mobile-menu-transparent
      $("#mobile-menu").mobileMenu({
                MenuWidth: 250,
                SlideSpeed : 400,
                WindowsMaxWidth : 767,
                PagePush : true,
                FromLeft : true,
                Overlay : false,
                CollapseMenu : true,
                ClassName : "mobile-menu"
            });
      // <!-- Intializing Navi Menu-->
      $("#mobile-menu-right").mobileMenu({
                MenuWidth: 250,
                SlideSpeed : 400,
                WindowsMaxWidth : 767,
                PagePush : true,
                FromLeft : false,
                Overlay : false,
                CollapseMenu : true,
                ClassName : "mobile-menu"
            });
       // <!-- Intializing Navi Menu-->
      $("#mobile-menu-transparent").mobileMenu({
                MenuWidth: 250,
                SlideSpeed : 400,
                WindowsMaxWidth : 767,
                PagePush : false,
                FromLeft : true,
                Overlay : true,
                CollapseMenu : true,
                ClassName : "mobile-menu"
            });
      // Button toggle mobile menu

    // Popover bootstrap
    $(function () {
      $('[data-toggle="popover"]').popover()
    });

    // --------------------------------------------------
    // Back To Top
    // --------------------------------------------------
    var offset = 450;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#to-the-top').fadeIn(duration);
        } else {
            jQuery('#to-the-top').fadeOut(duration);
        }
    });
            
    jQuery('#to-the-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    // Intializing Select Box Custom
    $(function () {
        $('.custom-select').fancySelect();
    });
// =====================================================
 });


