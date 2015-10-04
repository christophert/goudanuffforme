var serializedData;
var method;

$('#navigateit').click(function (e) {
    if($(this).text() === "Go Back") {
        $(this).html('Home');
        $("#reroll").hide();
    }
});

$('#formtabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$("#getContact").submit(function(e) {
    e.preventDefault();
    
    serializedData = $(this).serialize();
    console.log(serializedData);
    method = 'phone';
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
                $("#reroll").show();
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$("#getContactEmail").submit(function(e) {
    e.preventDefault();
    serializedData = $(this).serialize();
    console.log(serializedData);
    method = 'email';
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
                $("#reroll").show();
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});

$("#reroll").submit(function(e) {
    e.preventDefault();
    console.log(serializedData);
    $.ajax({
        type: "POST",
        url: "/api/send/"+method,
        data: serializedData,
        dataType: "json",
        timeout: 2000,
        cache: false,
        success: function(r) {
            $("#pickupLine").html(r.pickUpLine);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
});
