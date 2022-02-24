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
    cards_container.append(div);
    
    })
}
// code for filter related things
let allCBs = [...document.querySelectorAll('[type="checkbox"]')]
allCBs.forEach(el => {addEventListener('change',processActiveFilters);});

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