window.onload = function()
{
    /*
    var bdw = document.getElementsByTagName("BODY")[0].scrollWidth;
    var maplim = 480;
    console.log(bdw);
    console.log(maplim);
    console.log(bdw>maplim);
    console.log();
    */
    console.log("About image copyright, please type 'copyrightissue()' at console.");
    console.log("關於網站圖片的著作權，請在主控台上輸入 'copyrightissue()' 以取得相關資訊。");
    if( document.getElementsByTagName("body")[0].scrollWidth > 480 )
    {
        var mapOptions =
        {
            zoom:17,
            center: new google.maps.LatLng(51.4985,-0.007),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        var marker = new google.maps.Marker({
            position: {lat: 51.498, lng: -0.01},
            map: map,
            title: 'Our site!'
        });
        
        /*
        $( "#whoarewe" ).click(function()
        {   // Keyword: .toggle() == display: none;
            $( "#ourstory" ).toggle();
            if( $("#ourstory").css("display") == "none"  )
            {$( this ).css( "max-width", "100%" );}
            else{$( this ).css( "max-width", "50%" );}
        });
        
        $( "#ourstory" ).click(function()
        {
            $( "#whoarewe" ).toggle();
            if( $("#whoarewe").css("display") == "none" )
            {$( this ).css( "max-width", "100%" );}
            else{$( this ).css( "max-width", "50%" );}

        });
        */
    }
};

function copyrightissue()
{
    window.location="img/copyright.md";
}