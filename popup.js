
$(document).ready(function () {

	var array1 = [1,2,3,4,5,6,123,234,345];
	$("#submit").click(function () {
		var number = $("#deviceName").val();
		var numberInt = parseInt(number);
		if(array1.includes(numberInt)){
				$("#found").text("Found!");
				$("#notFound").text("");
		}
		else{
			$("#found").text("");
			$("#notFound").text("Not Found!, Check if the ticket was sold today");
		}
				
			});


	

});