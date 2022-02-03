var fact = 'https://cat-fact.herokuapp.com/facts';

//generate a random number
var RNG = function(min, max) {
    var value = Math.floor (Math.random() * (max - min + 1) + min);
    return value;
  }

fetch(fact)
.then(function(response){
    // console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data)
    console.log(data[RNG(0,4)].text)
})