var searchForm = document.querySelector('form');
var submitBtn = document.querySelector('.submit')
var section = document.querySelector('section');
let input = document.getElementById('search');
let body = document.querySelector('body');
searchForm.addEventListener('submit', response)

function response(e) {
e.preventDefault()
  let ate = input.value
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

function displayData(data){

  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  //display some data!!!
  console.log(data);

  let sugarAmt=document.createElement('h2')
  sugarAmt.innerText=data.foods[0].nf_sugars + ' ' + 'g';
  body.appendChild(sugarAmt)
    
  let calAmt=document.createElement('h2')
  calAmt.innerText=data.foods[0].nf_calories + ' ' + 'calories';
  body.appendChild(calAmt)

  let foodImg=document.createElement('img')
  foodImg.src= data.foods[0].photo.thumb;
  body.appendChild(foodImg)

  /*function noImg() {
    if foodImg==null
  }*/

  section.appendChild(foodImg);
  section.appendChild(sugarAmt);
  section.appendChild(calAmt);

  

}


