var searchForm = document.querySelector('form');
var submitBtn = document.querySelector('.submit')
var section = document.querySelector('section');
let input = document.querySelector('input');
let body = document.querySelector('body');

function response() {
  let ate = 'pizza'
  fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
          method: "POST",
          body: JSON.stringify({
          query: ate,
          }),
          headers: new Headers({
              "Content-Type": "application/json",
              "x-app-id": "efef151d",
              "x-app-key": "1b71b164d21a922e84e45e6634d5ed14",
              "x-remote-user-id": "0"
          })
      })
  
      .then(res => res.json())
      .then(json => {
              /// CALL A FUNCTION THAT DISPLAYS THE DATA
              displayData(json);
      });
};
response()

function displayData(data){
  //display some data!!!
  console.log(data);
  let sugarAmt=document.createElement('h1')
    sugarAmt.innerText=data.foods[0].nf_sugars;
    body.appendChild(sugarAmt)

  let calAmt=document.createElement('h1')
    calAmt.innerText=data.food[0].nf_calories;
    body.appendChild(calAmt)

  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

}



