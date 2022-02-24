import cars from "./carsdata.js";
import firstCard from '../components/firstCard.js';
import rentCard from '../components/rentCard.js';

localStorage.setItem('cars',JSON.stringify(cars));

const res_container = document.getElementById('results-container');
const cards_container = document.getElementById('cards-container');

let carsData = JSON.parse(localStorage.getItem('cars'));
// console.log(cars);
renderCards(carsData);
function renderCards(cars){
    cards_container.textContent ='';
    // cards_container.append(firstCard());
    let div = document.createElement('div');
    div.innerHTML = firstCard();
    cards_container.append(div);

    cars.forEach((el) => {
        div = document.createElement("div");
        div.innerHTML = rentCard(el);
    cards_container.append(div);
    
    })
}