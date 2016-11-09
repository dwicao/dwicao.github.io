$(function() {

	$('#search').keypress(function(e) {
		if (e.which === 13) {
			//movieSearch();
			alert($('#search').val());
		}
	});

	$('#submit').click(function() {
		alert($('#search').val());
	});

	function movieSearch() {
		var searchInput = $('#search').val();
		var url = "https://www.omdbapi.com/?s="+ searchInput +"&r=json";
		$.ajax({
			url: url,
			type: "GET",
			dataType: "json",
			success: function(data, status, jqXHR) {
				console.log(data);
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

});