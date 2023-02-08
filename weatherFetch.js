let p = fetch("https://goweather.herokuapp.com/weather/nepal")
p.then((response)=>{ return response.json()})
.then((response)=>{console.log(response)})
