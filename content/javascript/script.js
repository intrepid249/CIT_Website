function storeGameInfo(game) {
		var gameTitle = document.getElementById(game).innerHTML;
		var gamePrice = document.getElementById(game+'-price').innerHTML;
		
		localStorage.setItem("name", gameTitle);
		localStorage.setItem("price", gamePrice);
}

function modGameInfo() {
	document.getElementById("gameTitle") = localStorage.getItem("name");
	document.getElementById("gamePrice") = localStorage.getItem("price");
}

function purchase() {
	var output = 
	"Thank you for purchasing \t\t" + localStorage.getItem("name") + ".\n The amount of " + localStorage.getItem("price") +
	" will be deducted from your acount.\n\n" +
	"Please review the details below to make sure they are correct:\n\n" +
	"Full name:\t\t" + document.getElementById("fname").value + " " document.getElementById("surname").value + "\n"
	"Billing address:\t\t" + document.getElementById("address").value + document.getElementById("address2").value + " " + document.getElementById("city").value + 
	document.getElementById("state").value + document.getElementById("postcode").value
	"Billing details:\n\tCard Number:\t\t" + document.getElementById("cardnum").value + "\n\tExpiry:\t\t" + document.getElementById("expdate").value + 
	"\n\tCCV:\t\t" + document.getElementById("ccv");
	
	alert(output);
	window.location.href = "../../index.html";
}