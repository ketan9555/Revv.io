const navbar = () => {
    return  `
    <div id="navbar">
    <div id="navleft">
    <a id="lo" href="index.html" style="textDecoration:none">
    <img id="logo" src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"/>
    <h6 style="margin-top: -12px;margin-left:42px ;">Sanitized. Safe</h6></a>
    </div>
    <div id="navmid">
       <div  class="hun">
           <p class="subs"><b>Hyundai</b>  Subcription</p>
       </div>
       <div class="hun">
           <p class="subs"> <b>Mahindra </b> Subcription</p>
       </div>
    </div>
    <div id="navright">       
       <div id="FAQ" style="margin-top: 10px;"> <b> FAQs </b></div>
       <div id="logshow">
           <img id="signlogo" src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg"/>
           <h4 id="x">Login or Signup</h4>
       </div>
    </div>
   </div>
   <br>



<!-- login data -->

<div id="login" class="loginstyle">
       <div id="login-a">
           <div id="login-b">
               <form id="signin-details">
                   <div id="b">
                       <b id="login-title">Login</b>
                       <i id="cross1" class="fa fa-duotone fa-xmark"></i>
                   </div>
                   <div>
                       <input type="email" name="" class="indetails" id="outmail" placeholder="Enter Email"><br> <hr>
                       <span class="valid" id="mymail">Please enter valid email id</span>
                   </div>
                   <br>
                   <div>
                       <input type="password" name="" class="indetails" id="outpass" placeholder="Enter Password"><hr>
                       <span class="valid" id="mypass"> Send a new password to my email ID</span>
                   </div>
                   <button id="outbtn" type="submit"> Login</button>
               </form>
               <div >
                   <p>Don't have a account yet?</p>
                   <p id="gotosignup">Sign Up</p>
               </div>
               <hr>
               <div id="google">
                   <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.revv.co.in%3Fid%3Dauth616939&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=179663074908-qjbll6547bit8bpghq1aio472t7b7ufk.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.revv.co.in&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                       <img src="https://www.revv.co.in/imgs/google-login.png" alt="">
                   </a>
               </div>
               <div class="fb">              
                   <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=844747322290622&kid_directed_site=0&app_id=844747322290622&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.1%2Fdialog%2Foauth%3Fapp_id%3D844747322290622%26cbt%3D1645524138719%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2aeb26868930f8%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%26client_id%3D844747322290622%26display%3Dpopup%26domain%3Dwww.revv.co.in%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.revv.co.in%252Fopen%252Fpune%252Fhyundai-subscription%252Fstock%252Fcars_pricing%26locale%3Den_US%26logger_id%3Df993922f3d2fac%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df25a117ef647e48%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%2526frame%253Df58db917250ffc%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.1%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25a117ef647e48%26domain%3Dwww.revv.co.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.revv.co.in%252Ff28dea41af42b94%26relation%3Dopener%26frame%3Df58db917250ffc%26error%3Daccess_denied%26error_code%3D200%26error
                   _description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0">
                   <img src="https://www.revv.co.in/imgs/facebook-icon.png" alt="">
               </a>
               </div>              
           </div>
       </div>
   </div>

   <!-- signup data -->

   <div id="signup" class="loginstyle">
       <div id="login-a">
           <div id="login-b">              
               <form id="signup-details">
                   <div id="b">
                       <b id="login-title">Sign Up</b>
                       <i id="cross2" class="fa fa-duotone fa-xmark"></i>
                   </div>
                   <div id="google">
                       <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.revv.co.in%3Fid%3Dauth616939&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=179663074908-qjbll6547bit8bpghq1aio472t7b7ufk.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.revv.co.in&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                           <img src="https://www.revv.co.in/imgs/google-login.png" alt="">  </a>
                   </div>
                   <div class="fb">              
                       <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=844747322290622&kid_directed_site=0&app_id=844747322290622&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.1%2Fdialog%2Foauth%3Fapp_id%3D844747322290622%26cbt%3D1645524138719%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2aeb26868930f8%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%26client_id%3D844747322290622%26display%3Dpopup%26domain%3Dwww.revv.co.in%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.revv.co.in%252Fopen%252Fpune%252Fhyundai-subscription%252Fstock%252Fcars_pricing%26locale%3Den_US%26logger_id%3Df993922f3d2fac%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df25a117ef647e48%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%2526frame%253Df58db917250ffc%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.1%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25a117ef647e48%26domain%3Dwww.revv.co.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.revv.co.in%252Ff28dea41af42b94%26relation%3Dopener%26frame%3Df58db917250ffc%26error%3Daccess_denied%26error_code%3D200%26error
                       _description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0">
                       <img src="https://www.revv.co.in/imgs/facebook-icon.png" alt="">
                   </a>
                   </div>
                   <div>
                       <input type="text" class="indetails" id="innam" placeholder=" Name"><br>
                       <hr>
                       <span  class="valid" id="validnam">Please enter your name</span>
                   </div><br>
                   <div>
                       <input type="email" name="" class="indetails" id="inmail" placeholder=" Email"><br>
                       <hr>
                       <span  class="valid" id="validmail">Please enter valid email-id</span>
                   </div><br>
                   <div>
                       <input type="password" name="" class="indetails" id="inpass" placeholder="Password">
                       <hr>
                       <span class="valid" id="validpass"> Set a new password</span>
                   </div><br>
                   <div>
                       <input type="number" name="" class="indetails" id="innum" placeholder=" Mobile Number">
                       <hr>
                       <span  class="valid" id="validnum"> Please enter your mobile number</span>
                   </div>
                   <button id="inputbtn" type="submit"> Proceed</button>
               </form>               
           </div>
       </div>
   </div>  `
}

const footer = () => {
    return `
    <div id="div1">
    <div id="div1_1">
        <h2>Download the Revv app</h2>
        <div id="playstores">
            <a
            href="https://apps.apple.com/in/app/revv-self-drive-cars-delivered/id1021594400"
            ><img
              src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/app_store.png"
              alt=""
          /></a>
          <a
          href="https://play.google.com/store/apps/details?id=com.selfdrive&hl=en"
          ><img
            src="	https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/google_play.png"
            alt=""
        /></a>
        </div>
    </div>
    <div id="div1_2"></div>
</div> 
<div id="journey-section">
    <h2>Our Journey so far</h2>
    <div id="stat-container">
      <div>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/ic-happy-cus.svg"
          alt=""
        />
        <h3>2500+</h3>
        <p>Happy Subscribers</p>
      </div>
      <div>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/ic-across-india.svg"
          alt=""
        />
        <h3>22+ Cities</h3>
        <p>Across India</p>
      </div>
      <div>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/ic-subscription.svg"
          alt=""
        />
        <h3>50Mn+</h3>
        <p>Kms Travelled</p>
      </div>
      <div>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/ic-customer-rating.svg"
          alt=""
        />
        <h3>4.8/5</h3>
        <p>20k+ reviewers</p>
      </div>
    </div>
</div>
<div id="investors">
    <h2>Our investors</h2>
    <div id="c-banner">
        <div>
            <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp" alt="">
            <p>Hyundai Motor Company</p>
        </div>
        <div>
            <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp" alt="">
            <p>Edelweiss Financial Services</p>
        </div>
        <div>
            <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp" alt="">
            <p>Dream Incubator</p>
        </div>
        <div>
            <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp" alt="">
            <p>Beenext</p>
        </div>
    </div>
</div>
<div id="services">
    <h2>Serviceable cities</h2>
    <div id="services-city">
        <div>
            <p>Self Drive Car Rental in Bangalore</p>
            <p>Self Drive Car Rental in Hyderabad</p>
            <p>Self Drive Car Rental in Mumbai</p>
            <p>Self Drive Car Rental in Delhi-NCR</p>
            <p>Self Drive Car Rental in Chennai</p>
            <p>Self Drive Car Rental in Pune</p>
            <p>Self Drive Car Rental in Kolkata</p>
            <p>Self Drive Car Rental in Ahmedabad</p>
        </div>
        <div>
            <p>Self Drive Car Rental in Bhubaneswar</p>
            <p>Self Drive Car Rental in Chandigarh</p>
            <p>Self Drive Car Rental in Coimbatore</p>
            <p>Self Drive Car Rental in Jaipur</p>
            <p>Self Drive Car Rental in Kochi</p>
            <p>Self Drive Car Rental in Mangalore</p>
            <p>Self Drive Car Rental in Mysore</p>
            <p>Self Drive Car Rental in Nagpur</p>
        </div>
        <div>
            <p>Self Drive Car Rental in Surat</p>
            <p>Self Drive Car Rental in Tirupati</p>
            <p>Self Drive Car Rental in Trivandrum</p>
            <p>Self Drive Car Rental in Vadodara</p>
            <p>Self Drive Car Rental in Vijayawada</p>
            <p>Self Drive Car Rental in Vizag</p>
        </div>
    </div>
</div>
<div id="social">
    <div>
        <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/revv-logo.png" alt="">
        <p>&copy; 2022 Primemover Mobility Technologies Pvt.Ltd. All rights reserved</p>
    </div>
    <div>
       <a href="">Home</a>
       <a href="">Tariffs</a>
       <a href="">FAQs</a>
       <a href="">Policy</a>
       <a href="">Blog</a>
    </div>
    <div>
        <h4>Social</h4>
        <div id="icon">
            <a href="https://www.facebook.com/revvindia/">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/facebook.png
                " alt="">
            </a>
            <a href="https://twitter.com/revv_india">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/twitter.png
                " alt="">
            </a>
            <a href="https://www.instagram.com/revv_india/">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/instagram.png" alt="">
            </a>
            <a href="https://www.youtube.com/channel/UCdASUGQcRPefuQYO6rT331Q">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/youtube.png" alt="">
            </a>
            <a href="https://www.linkedin.com/company/revv-self-drive-car">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/linkedIn.png" alt="">
            </a>
        </div>
        <h4>Download the Revv App!</h4>
        <div id="download_store">
            <div>
                <a href="https://apps.apple.com/in/app/revv-self-drive-cars-delivered/id1021594400">
                    <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/appstore_apple.webp" alt="">
                    Download <b> App Store </b>
                </a>
            </div>
           <div>
            <a href="https://play.google.com/store/apps/details?id=com.selfdrive&hl=en">
                <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/playstore_google.webp" alt="">
                Download <b> Google Play  </b>
            </a>
           </div>
        </div>
    </div>
</div>
<div id="about">
    <h2>Safe, Sanitized Car SubscFription You Can Count On</h2>
    <p>Car subscription from Revv provides the flexibility of having a car anytime you want, as well as the assurance of a sanitized and virus free vehicle for your own self drive. The car sanitization process encompasses all the preventive hygiene best practices directed by the World Health Organization (WHO) and is diligently conducted for each vehicle delivered to the car subscribers. The safety measures that are implemented consist of:</p>
    <ul>
        <li>Industrial standards sanitization and disinfection before delivery for all surfaces of the vehicle</li>
        <li>Drivers wear Personal Protective Equipment (PPE) including masks and gloves while delivering the cars</li>
        <li>Paperless agreements for minimum contact</li>
        <li>Upon return, digital receipt sent to the customer’s e-mail.</li>
    </ul>

    <h2>Self-Drive Car Rentals</h2>
    <p>Whether you’re planning a road trip outside the city or looking for a convenient way to cruise around when you’re out of town, Revv is here to ease your travel woes. You can pick one of Revv’s convenient car rental options to drive down to the nearby beach or to manoeuvre through traffic as you head from one important business meeting to the next. With a self-drive car rental from Revv, you have the freedom to move around and explore places at your own pace.</p>

    <h2>Affordable, Convenient & Safe</h2>
    <p>With Revv, you can rent a car at a time that is convenient to you and get it delivered right to your doorstep. Apart from an hourly rate starting at just Rs. 33/hour, Revv also offers flexible car rental services. You can choose monthly car rental packages, unlimited kilometre packages, or even get a brand new car from Revv by simply paying the first year’s insurance. Additionally, all cars in our fleet have insurance, so you’ll be safe and secure while cruising down open roads.</p>

    <h4>Why Rev</h4>
    <p>When you choose a car <b>subscription</b> with Revv, you can enjoy:</p>
    <ul>
        <li>Flexible Rentals – You decide whether you’d like to rent a car for an hour, a week, a month, or on a daily basis.</li>
        <li>Several Options – Pick from our wide range of classy hatchbacks, comfortable sedans and spacious SUVs.</li>
        <li>All-India Permits – Revv cars come with an All India Tourist Permit, so you can drive from Kashmir to Kanyakumari without any worries.</li>
        <li>Unending Opportunities – The cars you rent from Revv can be used for trips out of the city or for daily travels through town. Revv also provides cars for pick up and drop off services at airports and bus and train stations.</li>
    </ul>

    <h2>Pick Your Favourite Car</h2>
    <p>Revv has an amazing fleet of rental cars ranging from compact hatchbacks to roomy sedans and powerful SUVs. You can choose to hire a Hyundai Grand i10, Hyundai Creta, Honda City, Maruti Suzuki Brezza, Ford EcoSport, Mahindra Scorpio, Toyota Innova Crysta, Mahindra XUV and many other car models that suit your requirement.</p>

    <h2>Extensive Network</h2>
    <p>Currently, you can rent a self-driving car from Revv in Ahmedabad, Bengaluru, Chandigarh, Chennai, Coimbatore, Delhi NCR, Hyderabad, Jaipur, Kochi, Kolkata, Mangalore, Mumbai, Mysuru, Pune, Surat, Trivandrum, Tirupati, Vijayawada, Vizag, Bhubaneswar, Nagpur & Vadodara.</p>

    <h2>Rent a Car</h2>
    <p>To rent one of our sanitized cars, you can follow these simple steps:</p>
    <ul>
        <li>Download the Revv app from the <a href="https://apps.apple.com/in/app/revv-self-drive-cars-delivered/id1021594400">Apple App Store</a>  or <a href="https://play.google.com/store/apps/details?id=com.selfdrive&hl=en">Google Play Store</a></li>
        <li>Pick your favourite car and let us know when and where you need it.</li>
        <li>The car will be delivered to your doorstep at the date and time promised.</li>
        <li>Start the engine and enjoy your road trip without worrying about the kilometres.</li>
        <li>Let us know where we need to pick up the car from once you’re done.</li>
        <li>You’ll receive an invoice in your email 48 hours after your trip is completed.</li>
        <li>Use the app to reschedule or cancel bookings as required.</li>
    </ul>

    <p>With Revv, exploring and travelling has become easy, convenient and completely hassle-free unlike in cabs & taxis!</p>
</div>
    
    `
}
export { navbar,footer }