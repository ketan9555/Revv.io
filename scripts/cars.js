import cars from "./carsdata.js";
import firstCard from "../components/firstCard.js";
import rentCard from "../components/rentCard.js";
import {
  filterByBrand,
  filterBySeating,
  filterByTransmissionType,
  filterBySegment,
  filterByFuelType,
} from "./filters.js";

localStorage.setItem("cars", JSON.stringify(cars));

const res_container = document.getElementById("results-container");
const cards_container = document.getElementById("cards-container");
var i = 0;

let carsData = JSON.parse(localStorage.getItem("cars"));
// extra & popularity properities to objects
carsData = carsData.map((el) => {
  el.extra = Math.round(Math.random() * 10) + 5;
  el.popularity = Math.round(Math.random() * 100);
  return el;
});
localStorage.setItem("cars", JSON.stringify(carsData));

// console.log(carsData);
renderCards(processActiveFilters(carsData));
// renderCards([]);

// render cars data ;
function renderCards(carList,) {
  console.log("in render function",i++);
  // console.log(carList);
  cards_container.textContent = "";
  if(carList.length == 0){
    cards_container.classList.add('no-elements');
    let div = document.createElement('div');
    div.classList.add('text-centre');

    let img_div = document.createElement('div');
    let img = document.createElement('img');
    img.src = "https://www.revv.co.in/imgs/icons/info-grey.svg";

    img_div.append(img);
    let h3 = document.createElement('h3');
    h3.textContent = 'Sorry ! No results found';
    h3.style.fontWeight = '100';

    let p = document.createElement('p');
    p.textContent = 'Please modify your filters to see results';

    let or = document.createElement('p');
    or.textContent = 'or';

    let reset_filt_btn = document.createElement('button');
    reset_filt_btn.textContent = 'Reset Filters';
    reset_filt_btn.id = 'reset-filter-btn2';

    reset_filt_btn.addEventListener('click',(event)=>{
      let activeCBs = [
        ...document.querySelectorAll('input[type="checkbox"]:checked'),
      ];

      activeCBs.forEach((el) => {
        el.checked = false;
      });
      renderCards(processActiveFilters());
    })

    div.append(img_div,h3,p,or,reset_filt_btn);
    cards_container.append(div);
    return;
  }
  cards_container.classList.remove('no-elements');
  let div = document.createElement("div");
  div.innerHTML = firstCard();
  cards_container.append(div);

  carList.forEach((el) => {
    div = document.createElement("div");
    div.innerHTML = rentCard(el);
    div.addEventListener("click", () => {
      localStorage.setItem("car_selected", JSON.stringify(el));
    });

    cards_container.append(div);
  });
  // add event handlers rent-details, and book button
  rentsEventHandler();
  addBookButtonEventHandler();
}
// code for filter related things

let allCBs = [...document.querySelectorAll('#filters [type="checkbox"]')];

// add event listeners to all checkboxes
allCBs.forEach((el) => {addEventListener("change", updateContent)});

function updateContent(){
  renderCards(processActiveFilters());
}

// implementation of reset button
document
  .getElementById("reset-filter-btn")
  .addEventListener("click", (event) => {
    let activeCBs = [
      ...document.querySelectorAll('input[type="checkbox"]:checked'),
    ];

    activeCBs.forEach((el) => {
      el.checked = false;
    });
    renderCards(processActiveFilters());
  });

function processActiveFilters() {
  // make a copy of carsData
  let filt_data = carsData.map((el) => el);

  //   console.log(filt_data);
  let activeCBs = [...document.querySelectorAll('input[type="checkbox"]:checked')];

  // if there are no active CBs
  if (activeCBs.length == 0) {
    return filt_data;
  }
  // console.log(activeCBs);

  let activeSegmentCBs = activeCBs.filter((el) => el.name == "segment");
  let activeBrandCBs = activeCBs.filter((el) => el.name == "brand");
  let activeTransmissionCBs = activeCBs.filter(
    (el) => el.name == "transmission_type"
  );
  let activeSeatingCBs = activeCBs.filter(
    (el) => el.name == "seating_capacity"
  );
  let activeFuelCBs = activeCBs.filter((el) => el.name == "fuel");

  // filter by seating capacity
  if (activeSeatingCBs.length > 0) {
    let seatings = activeSeatingCBs.map((el) => el.value);
    filt_data = filterBySeating(seatings, filt_data);
  }
  // filter by transmission type
  if (activeTransmissionCBs.length > 0) {
    let transmission_types = activeTransmissionCBs.map((el) => el.value);
    filt_data = filterByTransmissionType(transmission_types, filt_data);
  }
  // filter by fuel type
  if (activeFuelCBs.length > 0) {
    let fuel_types = activeFuelCBs.map((el) => el.value);
    filt_data = filterByFuelType(fuel_types, filt_data);
  }
  // filter by brands
  if (activeBrandCBs.length > 0) {
    let brands = activeBrandCBs.map((el) => el.value);
    filt_data = filterByBrand(brands, filt_data);
  }

  // filter by segment
  if (activeSegmentCBs.length > 0) {
    let segments = activeSegmentCBs.map((el) => el.value);
    filt_data = filterBySegment(segments, filt_data);
  }
  // console.log('paf',filt_data);
  return filt_data;
  
}

function rentsEventHandler() {
  let rent_el = document.querySelectorAll(".low, .avg, .Unlimited");
  rent_el = [...rent_el];
  rent_el.forEach((el) => {
    el.addEventListener("click", select);
  });
}

function select(event) {
  // console.log('event fired',this.tagName,event.target.tagName);

  let selected = localStorage.getItem("selected");
  // remove selected class from all elements
  [...document.querySelectorAll(`.${selected}`)].forEach((el) => {
    el.classList.remove("selected");
  });

  // this refers to the element which captured the event
  if (this.classList.contains("low")) {
    // console.log("low");

    localStorage.setItem("selected", "low");

    [...document.querySelectorAll(".low")].forEach((el) => {
      el.classList.add("selected");
    });
  } else if (this.classList.contains("avg")) {
    // console.log("avg");
    localStorage.setItem("selected", "avg");

    [...document.querySelectorAll(".avg")].forEach((el) => {
      el.classList.add("selected");
    });
  } else if (this.classList.contains("Unlimited")) {
    // console.log("Unlimited");
    localStorage.setItem("selected", "Unlimited");

    [...document.querySelectorAll(".Unlimited")].forEach((el) => {
      el.classList.add("selected");
    });
  } else {
    console.log("misfire");
  }
}

// implementation of book btn
function addBookButtonEventHandler() {
  [...document.querySelectorAll(".book-btn")].forEach((el) => {
    el.addEventListener("click", (event) => {
      let selected = localStorage.getItem("selected");
      let selected_car = JSON.parse(localStorage.getItem("car_selected"));

      selected_car.selected_rent = selected_car.rent[selected];
      selected_car.selected_Key = selected;
      console.log(selected_car);

      localStorage.setItem("booking_detail", JSON.stringify(selected_car));
    });
  });
}

document.getElementById("sort").addEventListener("change", sortItems);

function sortItems(event) {
  const PLH = "price:lh";
  const PHL = "price:hl";
  const ELH = "extra:lh";
  const EHL = "extra:hl";
  const POP = "popularity";

  let value = document.getElementById("sort").value;
  // console.log(value);
  let data = processActiveFilters();
  switch (value) {
    case PLH:
      data = sortByPrice(false, data);
      break;
    case PHL:
      sortByPrice(true, data);
      break;
    case ELH:
      console.log("elh");
      sortByExtra(false, data);
      break;
    case EHL:
      sortByExtra(true, data);
      break;
    case POP:
      sortByPopularity(data);
      break;

  }
  let extras = [];
  data.forEach((el) => extras.push(el.extra));
  console.log("after sort", extras);
  renderCards(data);
  let selected = localStorage.getItem("selected") || "low";
   [...document.querySelectorAll(`.${selected}`)].forEach((el) => {
     el.classList.add("selected");
   });
  event.stopPropagation();
}
// console.log(processActiveFilters());
function sortByPrice(reverse = false, data) {
  let selected = localStorage.getItem("selected") || "low";
  // console.log("before", data);
  let sorted_data = data.sort((a, b) => {
    // console.log(a.rent[selected], b.rent[selected]);
    if (reverse) {
      return +b.rent[selected] - +a.rent[selected];
    } else {
      return +a.rent[selected] - +b.rent[selected];
    }
  });

  // console.log("after", sorted_data);
  return data;

}

// sort funcion is working
function sortByExtra(reverse = false, data) {
  let mul = 1;
  if (reverse) mul = -1;
  // data.sort((a,b)=> a.extra - b.extra);
  data.sort(function (a, b) {
    // console.log(data);
    if (a.extra > b.extra) {
      return 1 * mul;
    }
    if (a.extra < b.extra) {
      return -1 * mul;
    }
    return 0;
  });
  console.log("after", data);
  return data;
}

function sortByPopularity(data){
  data.sort((a,b) => a.popularity - b.popularity);
  return data;
}

// fuelcost checkbox
document.getElementById('fuel_ie').addEventListener('change',(event)=>
{
  event.stopPropagation();
  let value = 'excludes';
  localStorage.setItem('fuel_charge','Excluded')
  carsData = JSON.parse(localStorage.getItem('cars'));
  if(document.getElementById('fuel_ie').checked){
    value = 'includes';
    localStorage.setItem('fuel_charge','Included');
    // console.log(typeof carsData)
    carsData = carsData.map(el => {
      el.rent.low += 1200;
      el.rent.avg += 1100;
      el.rent.Unlimited += 1050;
      el.extra +=3;
      return el;
    })
  }
  renderCards(processActiveFilters(carsData));

  document.getElementById('inc_exc').textContent=value;
})