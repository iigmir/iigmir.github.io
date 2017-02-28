/* MUlti-processing, Still In Construction forever ######### */
$(window).load(function()
{
    $(".flexslider").flexslider(
    {
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a"),
        slideshowSpeed: 5000
    });
    
    $("nav a").click(function()
    {   // click li to change section
        // detect clicked ID
        var click_target = this.href;
        var target_slice = click_target.slice(  click_target.length-5 , click_target.length );
        var selected_id = "#"+target_slice;
        // console.log( selected_id );
        // disappear all section, then show selected section
        $("section").hide();
        $(selected_id).fadeIn();
    });
    
    $("#nvlst-btn").click(function()
    {   // click #nvlst-btn will toggle main element
        if( $("#nvlst-btn i").hasClass("fa-chevron-up") )
        {
            $("#nvlst-btn i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        else
        {
            $("#nvlst-btn i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
        $("main").fadeToggle();
    });
});