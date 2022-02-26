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
      <a href="hyundai-subscription.html" class="subs"><b>Hyundai</b>  Subcription</a>
       </div>
       <div class="hun">
       <a href="mahindra-subscription.html" class="subs"> <b>Mahindra </b> Subcription</a>
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
                       <input type="email" name="" class="indetails" id="outmail" placeholder="Enter Email"><br> <hr id="hr1">
                       <span class="valid" id="mymail">Please enter valid email id</span>
                   </div>
                   <br>
                   <div>
                       <input type="password" name="" class="indetails" id="outpass" placeholder="Enter Password"><hr id="hr1">
                       <span class="valid" id="mypass"> Send a new password to my email ID</span>
                   </div>
                   <button id="outbtn" type="submit"> Login</button>
               </form>
               <div >
                   <p id="did">Don't have a account yet?</p>
                   <p id="gotosignup">Sign Up</p>
               </div>
               <hr id="hr1">
               <div id="google">
                   <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.revv.co.in%3Fid%3Dauth616939&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=179663074908-qjbll6547bit8bpghq1aio472t7b7ufk.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.revv.co.in&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                       <img  id="img1" src="https://www.revv.co.in/imgs/google-login.png" alt="">
                   </a>
               </div>
               <div class="fb">              
                   <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=844747322290622&kid_directed_site=0&app_id=844747322290622&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.1%2Fdialog%2Foauth%3Fapp_id%3D844747322290622%26cbt%3D1645524138719%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2aeb26868930f8%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%26client_id%3D844747322290622%26display%3Dpopup%26domain%3Dwww.revv.co.in%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.revv.co.in%252Fopen%252Fpune%252Fhyundai-subscription%252Fstock%252Fcars_pricing%26locale%3Den_US%26logger_id%3Df993922f3d2fac%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df25a117ef647e48%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%2526frame%253Df58db917250ffc%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.1%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25a117ef647e48%26domain%3Dwww.revv.co.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.revv.co.in%252Ff28dea41af42b94%26relation%3Dopener%26frame%3Df58db917250ffc%26error%3Daccess_denied%26error_code%3D200%26error
                   _description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0">
                   <img id="img1" src="https://www.revv.co.in/imgs/facebook-icon.png" alt="">
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
                           <img id="img1" src="https://www.revv.co.in/imgs/google-login.png" alt="">  </a>
                   </div>
                   <div class="fb">              
                       <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=844747322290622&kid_directed_site=0&app_id=844747322290622&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.1%2Fdialog%2Foauth%3Fapp_id%3D844747322290622%26cbt%3D1645524138719%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2aeb26868930f8%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%26client_id%3D844747322290622%26display%3Dpopup%26domain%3Dwww.revv.co.in%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.revv.co.in%252Fopen%252Fpune%252Fhyundai-subscription%252Fstock%252Fcars_pricing%26locale%3Den_US%26logger_id%3Df993922f3d2fac%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df25a117ef647e48%2526domain%253Dwww.revv.co.in%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.revv.co.in%25252Ff28dea41af42b94%2526relation%253Dopener%2526frame%253Df58db917250ffc%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv2.1%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df25a117ef647e48%26domain%3Dwww.revv.co.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.revv.co.in%252Ff28dea41af42b94%26relation%3Dopener%26frame%3Df58db917250ffc%26error%3Daccess_denied%26error_code%3D200%26error
                       _description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0">
                       <img id="img1" src="https://www.revv.co.in/imgs/facebook-icon.png" alt="">
                   </a>
                   </div>
                   <div>
                       <input type="text" class="indetails" id="innam" placeholder=" Name"><br>
                       <hr id="hr1">
                       <span  class="valid" id="validnam">Please enter your name</span>
                   </div><br>
                   <div>
                       <input type="email" name="" class="indetails" id="inmail" placeholder=" Email"><br>
                       <hr id="hr1">
                       <span  class="valid" id="validmail">Please enter valid email-id</span>
                   </div><br>
                   <div>
                       <input type="password" name="" class="indetails" id="inpass" placeholder="Password">
                       <hr id="hr1">
                       <span class="valid" id="validpass"> Set a new password</span>
                   </div><br>
                   <div>
                       <input type="number" name="" class="indetails" id="innum" placeholder=" Mobile Number">
                       <hr id="hr1">
                       <span  class="valid" id="validnum"> Please enter your mobile number</span>
                   </div>
                   <button id="inputbtn" type="submit"> Proceed</button>
               </form>               
           </div>
       </div>
   </div>  `
}


export { navbar }