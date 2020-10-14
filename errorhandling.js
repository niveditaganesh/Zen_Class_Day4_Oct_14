var request= new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function(){
	var data=JSON.parse(this.response);
	
	
	//Error-Handling using Try-Catch block :-
	
	try{
	//Filter by Region: Asia
	console.log("Filter by Region: Asia")
	var country=data.filter(ele=>ele.region=="Asia")
	console.log(country);
	console.log("No of Countries : "+country.length);
	
	//Filter by Population: <2,00,000
	console.log("Filter by Population: <2,00,000");
	var ppltn=data.filter(ele=>ele.population<200000)
	console.log(ppltn);
	console.log("No of Countries : "+ppltn.length);
	
	//Print the following details name, capital, flag using forEach function
	console.log("Details:: name, capital, flag")
	data.forEach(ele=>console.log("Name: "+ ele.name,"    Capital  :"+ele.capital,"     Flag: "+ele.flag));
	
	//Print the total population of countries using reduce function
	var tot_pop=data.reduce((sum,val)=>{ return sum+val.population},0);
	console.log("Total population of Countries: "+tot_pop);
	
	//Print the total population of countries in Asia continent using reduce and filter function
	
	var asia_pop=(data.filter(ele=>ele.region=="Asia")).reduce((sum,ele)=>{return sum+ele.population},0);
	console.log("Total population of Asia: "+asia_pop);
	}
	catch(err) {

	alert("Error has occurred!"); }
	
	//Throwing error :- 
	
	console.log("Countries which use US Dollars as currency")
	var a=[];
	try{
	data.forEach(ele=>{ 
	for(i=0;i<(ele.currencies.length);i++){
		if((ele.currencies[i]).code==("USD"))
		{a.push(ele.name);
	console.log(ele.name);
	if(a.length===0){
		throw new Error("Invalid command: No data present.")
	}
	}
	}
	})
	console.log("Number of Countries with USD are: "+a.length)}catch(e){
	alert("JSON Error:" +e.message);}
}
