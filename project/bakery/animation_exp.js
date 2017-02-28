if( $("#whoarewe").css("max-width") == "0%" )
{
    // $( "#whoarewe") ).animate( {"max-width", "100%"},1000 );
    $( this ).animate( {"max-width", "100%"},1000 );
}
else{ $( this ).animate( {"max-width", "50%"},1000 ); }