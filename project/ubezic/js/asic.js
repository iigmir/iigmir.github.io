/* MUlti-proces's-ing, Still In Construction FOREVER######### */
/* mU's sic forever######### */
/* ラブライブ! <br /> School idol project <br /> μ'sic forever!!! */
$(window).load(function()
{
    $('.flexslider').flexslider(
    {
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a"),
        slideshowSpeed: 5000
    });
    
    $("a").click(function()
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
});