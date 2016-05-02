function executeThisCodeAfterFileIsLoaded () {
  var data = JSON.parse(this.responseText);
  console.log(data);
  makeContainer(data.dog_brands);
}

function executeThisCodeIfXHRFails() {
	throw "Data did not load";
}
function makeContainer(array) {
	var con = document.getElementById("container");
	for (var i = 0;i < array.length; i++) {
		con.innerHTML += "<div>" + array[i].name + "</div>";
		for (var j = 0; j < array.length; j++) {
			con.innerHTML += "<div>" + array[j].types[j].type + "</div>";
			for (var v = 0; v < array.length; v++) {
				con.innerHTML += "<div>" + array[v].types[v].volumes[v].name + "</div>";
				for (var n = 0; n < array.length; n++) {
					con.innerHTML += "<div>" + array[n].types[n].volumes[n].price + "</div>";
				}
			}
		}



	}
}





// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogfood.json");

// Tell the XHR object to start
myRequest.send();




