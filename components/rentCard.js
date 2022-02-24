function rentCard(car){
    return `
         <div class="rentCard">
                    <div class="car-details">
                        <h4>Modal</h4>
                        <img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/MAruti-Suzuki-Ritz_for-Web.png" alt="">
                        <div class="d-flex space-around">
                            <p><img src="https://www.revv.co.in/imgs/car-card/automatic.svg" alt=""> Manual</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/petrol.svg" alt=""> Diesel</p>
                            <p><img src="https://www.revv.co.in/imgs/car-card/seat.svg" alt=""> 5 seats</p>
                        </div>
                        <div class="rent-details">
                            <div class="d-flex space-between">
                                <div class="low d-flex col teal p-20">
                                    <p class="price">$983</p>
                                    <p class="distance small-txt ">150kms</p>
                                </div>
                                <div class="low d-flex col teal p-20">
                                    <p class="price">$983</p>
                                    <p class="distance small-txt ">150kms</p>
                                </div>
                                <div class="low d-flex col teal p-20">
                                    <p class="price">$983</p>
                                    <p class="distance small-txt ">150kms</p>
                                </div>
                            </div>
                            <div class="d-flex space-between">
                                <p>Extra km charge @</p>
                                <button id="book-btn">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
    
    
    `;
}