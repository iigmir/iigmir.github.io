console.log("Codename:Havana");

var pb_object =
{
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 6,
    from: {color: '#FFEA82', a:0},
    to: {color: '#ED6A5A', a:1}, // '#ED6A5A'
    // Set default step function for all animate calls
    step: function(state, circle)
    {
        circle.path.setAttribute('stroke', state.color);
    }
};

function pb_html_id( phi_ipt )
{
    return document.getElementById(phi_ipt);
}

var pbobj_web_design = pb_object;
var pbobj_html_css   = pb_object;
var pbobj_graphic_design = pb_object;
var pbobj_ui_ux = pb_object;

window.onload = function()
{
    var pb_web_design = new ProgressBar.Circle( pb_html_id( "web_design" ),
    {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#FFEA82', a:0},
        to: {color: '#ED6A5A', a:1}, // '#ED6A5A'
        // Set default step function for all animate calls
        step: function(state, circle)
        {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    var pb_html_css   = new ProgressBar.Circle( pb_html_id( "html_css" ),
    {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#FFEA82', a:0},
        to: {color: '#AE4863', a:1}, // '#ED6A5A'
        // Set default step function for all animate calls
        step: function(state, circle)
        {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    var pb_graphic_design = new ProgressBar.Circle( pb_html_id( "graphic_design" ),
    {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#FFEA82', a:0},
        to: {color: '#A4d8A1', a:1}, // '#ED6A5A'
        // Set default step function for all animate calls
        step: function(state, circle)
        {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    var pb_ui_ux = new ProgressBar.Circle( pb_html_id( "ui_ux" ),
    {
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#FFEA82', a:0},
        to: {color: '#123456', a:1}, // '#ED6A5A'
        // Set default step function for all animate calls
        step: function(state, circle)
        {
            circle.path.setAttribute('stroke', state.color);
        }
    });
    
    document.addEventListener('scroll', function(e)
    {
        // scrollHeight
        if ( document.documentElement.scrollTop >= 2100 )
        {
            pb_web_design.animate(0.95);
            pb_html_css.animate(0.75);
            pb_graphic_design.animate(0.70);
            pb_ui_ux.animate(0.85);
        }
        // console.log( document.documentElement.scrollTop );
    });
};