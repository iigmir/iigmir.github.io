$(document).ready(function()
{   // LonLat( 經度，分東西方的 , 緯度，分南北方的 )
    // 抓取地圖資料
    var tccity = "cities.json";
    // 預先載入 OSM 地圖圖層
    var map = new OpenLayers.Map("citymap");
    map.addLayer(new OpenLayers.Layer.OSM());
    var centre_pos = new OpenLayers.LonLat( 121 , 23.3 ).transform( new OpenLayers.Projection("EPSG:4326"),map.getProjectionObject() );
    var start_zoom=3;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    
    $.getJSON( tccity, function( source )
    {
        $("#get_table_data").click(function(){ $.getJSON( tccity, function( data ) {console.table(data);});});
        $.each(source, function(key, data)
        {
            // <ul class="cityname">  </ul>
            var city_info = data.city + " " + data.longitude + " " + data.latitude;
            $(".cityname").append("<li>" + city_info + "</li>");
            
            var city_marks = new OpenLayers.LonLat( data.latitude , data.longitude ).transform
            (
                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                map.getProjectionObject() // to Spherical Mercator Projection
            );
            markers.addMarker( new OpenLayers.Marker(city_marks) );
        });
    });
    map.setCenter ( centre_pos , start_zoom );
});
