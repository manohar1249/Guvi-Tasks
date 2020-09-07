
function search(){

var city = document.getElementById('city').value
var country = document.getElementById('country').value


var request = new XMLHttpRequest()
var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID=a9cfdb29a716e26d71aebb273da499d6"
request.open('GET',url,true)
request.send()

request.onload = function(){
	var data = JSON.parse(this.response);
	var temp = (data["main"]["temp"]-273.15).toFixed(1
		);
	document.querySelector('#weather').innerHTML = data["name"]+","+data["sys"]["country"]+" Temperature "+temp+"&deg, wind "+data["wind"]["speed"] +" m/s, pressure " +data["main"]["pressure"]+" hpa";
	//console.log(data);
	console.log(city,country);	
	
}

}

