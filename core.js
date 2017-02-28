$(document).ready(function()
{
    console.log("Codename: Guitar Hero");
    function guitar_hero()
    {
        console.log("I love flag. My favourite flag is United Kingdom.");
        console.log("However, use flag to represent lang is really, really, a bad idea. Seriously.");
        console.log("You can read this site: http://www.flagsarenotlanguages.com");
    }
    
    function position_value_check()
    {
        if ( position_value<0 )
        {
            position_value = nav_list_length;
            return;
        }
        else if ( position_value>nav_list_length )
        {
            position_value = 0;
            return;
        }
        else
        {
            return;
        }
    }
    
    function page_action()
    {
        nav_past = $("section").eq( position_value );
        $(nav_current).addClass("fadeOutLeft").one(animationEnd, function()
        {
            $(this).removeClass("fadeOutLeft").hide();
            nav_past.show().addClass("fadeInRight").one(animationEnd, function()
            {
                $(this).removeClass("fadeInRight");
				nav_current = $(this);
			});
        });
    }
    function lr_press_event( lpe_input )
    {   // lpe_input only accept two values: 1 or -1
        $("nav li *").removeClass("selected_link");
        position_value = position_value + lpe_input;
        position_value_check();
        $("nav li a")[position_value].className = "selected_link";
        page_action();
    }
    
    // init section
    var nav_past;
    var position_value = 0;
    var nav_current = $("section").eq(position_value);
    var nav_list_length = $( "nav ul li" ).length - 1;
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $( "section" ).hide();
    $( "section" ).addClass("animated");
    $( nav_current ).show();
    
    $( "nav li a" ).click(function()
    {
        $("nav li *").removeClass("selected_link");
        $(this).addClass("selected_link");
        position_value = $(this).parent("li").index();
        page_action();
    });
    
    $( "h1 a" ).click(function()
    {
        $("nav li *").removeClass("selected_link");
        $("nav li a")[0].className = "selected_link";
        position_value = 0;
        page_action();
    });
    
    $( ".decoration .right" ).click(function() { lr_press_event(  1 ); });
    $( ".decoration .left"  ).click(function() { lr_press_event( -1 ); });
    
    $( this ).keydown(function(kke)
    {
        if (kke.key == "ArrowLeft")
        {
            lr_press_event( -1 );
        }
        else if (kke.key == "ArrowRight")
        {
            lr_press_event(  1 );
        }
    });
});