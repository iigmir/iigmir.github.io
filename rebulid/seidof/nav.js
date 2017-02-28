$(document).ready(function()
{
    $("nav > ul > li").click(function() { $("ul li", this).animate({ height: 'toggle' }); });
});