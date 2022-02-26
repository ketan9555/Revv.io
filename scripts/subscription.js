


document.querySelector('#form-location').addEventListener('click',toggleCityModal);
document.getElementById('city-modal-close-btn').addEventListener('click',toggleCityModal);
window.addEventListener('click',windowOnClick);
document.querySelector('.cities').addEventListener('click',(event)=>{
    // console.log(event.target.tagName);
    
    if(event.target.tagName == 'P'){
        let loc = event.target.textContent;
        localStorage.setItem('location',loc);
        updateLocation(loc);
        toggleCityModal();
    }
    console.log(event.target);

})

const city_modal = document.querySelector('.select-city-modal');

function toggleCityModal(){
    city_modal.classList.toggle('show-modal');
    // console.log('toggled');
}

function windowOnClick(event){
    if(event.target === city_modal){
        toggleCityModal();
    }
}
const location_el = document.getElementById('location');
const location_span = document.getElementById('location-span');


// function to update location variable
function updateLocation(location){
    // console.log(location_el);
    location_el.innerHTML = `${location} <i class="fas fa-chevron-down">`;
    location_span.textContent = location;
}


// faq actions
let questions = [...document.querySelectorAll('.questions')];
console.log(questions);

questions.forEach(el => {

    el.addEventListener('click',toggleAnswer);
})

function toggleAnswer(event){
    // console.log(event.target);
    // console.log(event.target,event.target.nextElementSibling);
    event.target.firstElementChild.classList.toggle('fa-plus');
    event.target.nextElementSibling.classList.toggle('hide-ans');
}

document.getElementById('search-btn').addEventListener('click',(event)=>{

    let startdate = document.getElementById('startdate').value;
    let location = localStorage.getItem('location');

    /// store to localStorage
    localStorage.setItem('startdate',startdate);
    localStorage.setItem('city',location);

    console.log(startdate);
    window.location.href ='../cars.html';
})

const navmid = document.getElementById("navmid");
navmid.textContent = "";
// navmid.classList.add('d-flex')
navmid.classList.add('d-flex','space-between','p-20')

// let img = document.createElement('img');
// img.src ="https://www.revv.co.in/grapheneImages/hyundai/hyundai-logo-sub@2x.png";
// img.height = '23px';

let hiw = document.createElement('h4');
hiw.textContent = 'How it works';
hiw.style.alignSelf='center';
// hiw.style.padding='0x 30px';
hiw.addEventListener('click',(event) => {window.location.href='#how-it-works'});

navmid.append(hiw);