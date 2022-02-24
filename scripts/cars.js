import cars from "./carsdata.js";
import firstCard from '../components/firstCard.js';
import rentCard from '../components/rentCard.js';
import {filterByBrand,filterBySeating,filterByTransmissionType,filterBySegment,filterByFuelType} from './filters.js';

localStorage.setItem('cars',JSON.stringify(cars));

const res_container = document.getElementById('results-container');
const cards_container = document.getElementById('cards-container');

let carsData = JSON.parse(localStorage.getItem('cars'));
// console.log(cars);
// render cars data ;
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
        div.addEventListener('click',() => {
            localStorage.setItem('car_selected',JSON.stringify(el));
        });

        cards_container.append(div);
    
    })
}
// code for filter related things
let allCBs = [...document.querySelectorAll('[type="checkbox"]')]
allCBs.forEach(el => {addEventListener('change',processActiveFilters);});
// implementation of reset button
document.getElementById('reset-filter-btn').addEventListener('click',(event)=>{
    let activeCBs = [
      ...document.querySelectorAll('input[type="checkbox"]:checked'),
    ];

    activeCBs.forEach((el) => {el.checked=false});
})
function processActiveFilters(event){
    // make a copy of carsData
    let filt_data = carsData.map(el => el);
    let activeCBs = [...document.querySelectorAll('input[type="checkbox"]:checked')];

    // if there are no active CBs
    if(activeCBs.length==0){
        renderCards(filt_data);
        return;
    }
    console.log(activeCBs);
    
    let activeSegmentCBs = activeCBs.filter(el => el.name == 'segment');
    let activeBrandCBs = activeCBs.filter((el) => el.name == "brand");
    let activeTransmissionCBs = activeCBs.filter((el) => el.name == "transmission_type");
    let activeSeatingCBs = activeCBs.filter((el) => el.name == "seating_capacity");
    let activeFuelCBs = activeCBs.filter(el => el.name=='fuel');

    // filter by seating capacity
    if(activeSeatingCBs.length>0){
        let seatings = activeSeatingCBs.map(el => el.value);
        filt_data = filterBySeating(seatings,filt_data);
    }
    // filter by transmission type
    if(activeTransmissionCBs.length>0){
        let transmission_types = activeTransmissionCBs.map(el => el.value);
        filt_data = filterByTransmissionType(transmission_types,filt_data);
    }
    // filter by fuel type
    if(activeFuelCBs.length>0){
        let fuel_types = activeFuelCBs.map(el => el.value);
        filt_data = filterByFuelType(fuel_types,filt_data);
    }
    // filter by brands
    if(activeBrandCBs.length>0){
        let brands = activeBrandCBs.map(el => el.value);
        filt_data = filterByBrand(brands,filt_data);
    }

    // filter by segment
    if(activeSegmentCBs.length>0){
        let segments = activeSegmentCBs.map(el => el.value);
        filt_data = filterBySegment(segments,filt_data);
    }


    // console.log(filt_data);
    renderCards(filt_data);
    


    // console.log(activeSegmentCBs);
}

let rent_el = document.querySelectorAll('.low, .avg, .Unlimited')
rent_el = [...rent_el];
rent_el.forEach(el => {el.addEventListener('click',select)});

function select(event){
   
    let selected = localStorage.getItem('selected');
    if(selected!= undefined){
        [...document.querySelectorAll(`.${selected}`)].forEach(el => { el.classList.remove('selected')});
    }

    if(event.target.classList.contains('low')){
    //   console.log('low');

      localStorage.setItem("selected", "low");

      [...document.querySelectorAll(".low")].forEach((el) => {
        el.classList.add("selected");
      });
    }
    else if(event.target.classList.contains('avg')){
    //   console.log("avg");
        
        localStorage.setItem("selected", "avg");

        [...document.querySelectorAll(".avg")].forEach((el) => {
          el.classList.add("selected");
        });
    }
    else if(event.target.classList.contains('Unlimited')){
    //   console.log("Unlimited");
        
        localStorage.setItem("selected", "Unlimited");

        [...document.querySelectorAll(".Unlimited")].forEach((el) => {
          el.classList.add("selected");
        });
    }

}

// implementation of book btn

[...document.querySelectorAll('.book-btn')].forEach(el => {el.addEventListener('click',(event) => {

    let selected = localStorage.getItem('selected');
    let selected_car = JSON.parse(localStorage.getItem('car_selected'));

    selected_car.selected_rent = selected_car.rent[selected];
    console.log(selected_car);

    localStorage.setItem('booking_detail',JSON.stringify(selected_car));
})})
