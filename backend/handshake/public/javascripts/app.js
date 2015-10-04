
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

$('#navigateit').click(function (e) {
    if($(this).text() === "Go Back") {
        $(this).html('Home');
    }
});

$('#formtabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$("#getContact").submit(function(e) {
    e.preventDefault();
    
    var serializedData = $(this).serialize();
    console.log(serializedData);
    $.ajax({
        type: "POST",
        url: "/api/send/phone",
        data: serializedData,
        dataType: "json",
        timeout: 2000,
        cache: false,
        success: function(r) {
//            $("#preform").hide();
            $("#tabentry").fadeOut("fast", function() {
                $("#navigateit").attr('href', '/');
                $("#navigateit").html('Go Back');
                $("#homeli").show();
                $("#pickupLine").html(r.pickUpLine);
                $("#pickupLine").show();
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$("#getContactEmail").submit(function(e) {
    e.preventDefault();
    var serializedData = $(this).serialize();
    console.log(serializedData);
    $.ajax({
        type: "POST",
        url: "/api/send/email",
        data: serializedData,
        dataType: "json",
        timeout: 2000,
        cache: false,
        success: function(r) {
 //           $("#preform").hide();
            $("#tabentry").fadeOut("fast", function() {
                $("#navigateit").attr('href', '/');
                $("#navigateit").html('Go Back');
                $("#homeli").show();
                $("#pickupLine").html(r.pickUpLine);
                $("#pickupLine").show();
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

