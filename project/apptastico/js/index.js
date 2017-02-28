$(document).ready(function()
{
    $("#owl-example").owlCarousel(
    {
        navigation: true,
        navigationText:
        [
            "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
            "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
        ],
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
    
    var test_twitter;
    function delayedAlert() { test_twitter = window.setTimeout( detect_tw , 5000); }
    function detect_tw()
    {
        if( $("#twitter-widget-0").length )
        {
            // console.log("Twitter get");
            $("#toggle_twitter").text( "Click here to toggle Twitter timeline" );
            $("#toggle_twitter").click(function()
            {
                $( "#twitter-widget-0" ).toggle();
            });
        }
        else
        {
            // console.log("Twitter lost");
            $("#toggle_twitter").text( "I'm afraid that the website did't get Twitter. Maybe Twitter is down, or browser blocks Twitter." );
        }
    }
    function clearAlert() { window.clearTimeout(test_twitter); }
    delayedAlert();
});