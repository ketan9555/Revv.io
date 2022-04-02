// rendCard function used to render renting details of a car in a card format

function rentCard(car) {
  let {  model_name, image_url, seats, transmission_type, fuel_type, fuel_ex,fuel_in,extraChargePerKm ,isAvailiable} = car;
 let fuel = fuel_ex;
 car.rates = fuel_ex;
//   let keys = Object.keys(rent);

  let fuel_charge = localStorage.getItem('fuel_charge');
  if(fuel_charge === 'Included'){
      fuel = fuel_in;
      car.rates = fuel_in;
      car.extraChargePerKm = 0;
      extraChargePerKm = 0;
  }

  let btn_classes = "book-btn";
  let btn_text = "Book";

  if(!isAvailiable){
      btn_classes="sold-out-btn";
      btn_text = "Sold out";
  }
  
  return `
         <div class="rentCard">
                    <div class="car-details">
                        <h4 class='text-centre'>${model_name}</h4>
                        <img src=${image_url} alt="" class='car-img'>
                        <div class="d-flex space-around">
                            <p><img src="https://www.revv.co.in/imgs/car-card/automatic.svg" alt=""> ${transmission_type}</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/petrol.svg" alt=""> ${fuel_type}</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/seat.svg" alt=""> ${seats} seats</p>
                        </div>
                    </div>
                    <div class="rent-details d-flex space-between ">
                        
                            <div class="low d-flex col teal  ">
                                <p class=" price nmt-10">₹ ${fuel.low.cost}</p>
                                <p class=" distance small-txt ">${fuel.low.dist}</p>
                             </div>
                             <div class="avg d-flex col teal ">
                                <p class="price nmt-10">₹ ${fuel.mid.cost}</p>
                                <p class="distance small-txt ">${fuel.mid.dist}</p>
                            </div>
                            <div class="Unlimited d-flex col teal ">
                                <p class="price nmt-10">₹ ${fuel.high.cost}</p>
                                <p class="distance small-txt ">${fuel.high.dist}</p>
                            </div>
                    </div>
                    <div class="extraChargePerKm-km d-flex space-between">
                        <p>extra charge km charge @ ₹${extraChargePerKm}</p>
                        <button class="${btn_classes}">${btn_text}</button>
                    </div>
                </div>
    
    `;
}

export default rentCard;
