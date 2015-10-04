
var getUrlParam = function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

$("#getContact").submit(function(e) {
    e.preventDefault();
    
    var serializedData = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "/api/send",
        data: serializedData,
        dataType: "json",
        timeout: 2000,
        cache: false,
        success: function(r) {
            $("#preform").hide();
            $("#getContact").hide();
            $("#pickupLine").html(r.pickUpLine);
            $("#pickupLine").show();
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});
