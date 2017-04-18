$("#toggle_message").click(function () {
        var value= $("#toggle_message").attr("value");
        $("#message").toggle("fast");

        if (value == "Hide") {
          $("#toggle_message").attr("value","Hide");
        } else if (value == "Show") {
          $("#toggle_message").attr("value","Show");
        }
    });
$("#paragraph").click(function(){
	$("#paragraph").hide();
});

$("h1").text("Hello");


$(document).ready(function() {
	$("#search_name").keyup(function() {
		search_name = $(this).val();

		$("#names li").removeClass("highlight");

		if (jQuery.trim(search_name) !='') {
			$("#names li:contains('" + search_name + "')").addClass("highlight");
		}

	});

	$("input[type='file']").change(function() {
		$(this).next().removeAttr("disabled");
	}).next().attr("disabled","disabled");
});



$(":text").focusin(function() {
	$(this).css("background-color","yellow");
});
$(":text").blur(function() {
	$(this).css("background-color","#FFF");
});
$(":button").click(function() {
	$(this).attr("value","Please wait...");
	$(this).attr("disabled", true);
});


function change_size(element, size) {
	var current = parseInt(element.css("font-size"));
	if (size == "smaller") {
		var new_size = current - 2;
	} else if (size == "bigger") {
		var new_size = current + 2;
	}
	element.css ("font-size", new_size + "px");

};

$("#smaller").click(function() {
	change_size($("p"), "smaller");
});
$("#bigger").click(function() {
	change_size($("p"), "bigger");
});
