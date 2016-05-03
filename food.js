function executeThisCodeAfterFileIsLoaded () {
  var data = JSON.parse(this.responseText);
  console.log(data);
  makeDogContainer(data.dog_brands);
}
function executeThisCatAfterFileIsLoaded() {
	var catData = JSON.parse(this.responseText);
	console.log(catData);
	makeCatContainer(catData.cat_brands);
}

function executeThisCodeIfXHRFails() {
	throw "Data did not load";
}

function makeDogContainer(object) {

	var con = document.getElementById("container");
	for (var i = 0;i < object.length; i++) {
		var brand = object[i];
		con.innerHTML += "<div>" + brand.name + "</div>";
		for (var j = 0; j < brand.types.length; j++) {
			var type = brand.types[j];
			con.innerHTML += "<div>" + type.type + "</div>";
			for (var v = 0; v < type.volumes.length; v++) {
				var volume = type.volumes[v];
				con.innerHTML += "<div>" + volume.name + "</div>";
				con.innerHTML += "<div>" + volume.price + "</div>";
				
			}
		}
	}
}

function makeCatContainer(object) {
	var catCon = document.getElementById("catContainer");
	for (var i = 0; i < object.length; i++) {
		var catbrand = object[i];
	  catCon.innerHTML += "<div>" + catbrand.name + "</div>";
		catCon.innerHTML += "<div>" + catbrand.breeds + "</div>";
		for (var j = 0; j < catbrand.types.length; j++) {
			var cattype = catbrand.types[j];
			catCon.innerHTML += "<div>" + cattype.type + "</div>";
			for (var v = 0; v < cattype.volumes.length; v++) {
				var catvolume = cattype.volumes[v];
				catCon.innerHTML += "<div>" + catvolume.volume + "</div>";
				catCon.innerHTML += "<div>" + catvolume.price + "</div>";
				
			}
		}
	}
}
	
// Create an XHR object
var myRequest = new XMLHttpRequest();
var myCatRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myCatRequest.addEventListener("load", executeThisCatAfterFileIsLoaded);
myCatRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogfood.json");
myCatRequest.open("GET", "catfood.json");

// Tell the XHR object to start
myRequest.send();
myCatRequest.send();
