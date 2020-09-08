
var request = new XMLHttpRequest()
var url = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
var proxy = "https://cors-anywhere.herokuapp.com/"
url = proxy+url;
request.open('GET',url,true)
request.send()

request.onload = function(){
	var data = JSON.parse(this.response);
	console.log(data.domains)
	insert(data);
}


function insert(details)
{
	var select = document.querySelector('#domain');
	for(let i=0;i<details.domains.length;i++)
	{	
		var option = document.createElement("option")
		option.text = details.domains[i].domain;
		option.value = i;
		select.add(option);
	}
}