import { navbar }  from "../components/navbar.js";
//console.log(navbar)

// let navbardiv = document.getElementById("container")
// navbardiv.innerHTML = navbar();

// let footerdiv = document.getElementById("footer")
// footerdiv.innerHTML = footer();

// let data = {
//     brand : "Tata",
//     model : "Tata Tiago (P)",
//     imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Tata-Tiago4.png",
//     seats : "5",
//     transmission : "Manual", 
//     fuel: "Petrol", 
//     segment : "Hatchback", 
//     month_rent : 12000,
//     rent : 4949,
//         // low :  3479,
//         // avg :  4949,
//         // Unlimited : 5439,   
// }
// let startdate = "25-02-2022 "
// let ensdate = "28-02-2022"
// let city = "Pune"
// localStorage.setItem("startdate",JSON.stringify(startdate));
// localStorage.setItem("ensdate",JSON.stringify(ensdate))
// localStorage.setItem("city",JSON.stringify(city))

let data = JSON.parse(localStorage.getItem("selectedcar"));

var sdate = localStorage.getItem("start-date");
var edate = localStorage.getItem("end-date");
var selectdcity = localStorage.getItem("city");
var fuel = localStorage.getItem("fuel_charge");
//console.log(fuel)

localStorage.setItem("selectedcar",JSON.stringify(data))
let imgg = document.getElementById("carimg")
let one = document.getElementById("one")

var mycar = JSON.parse(localStorage.getItem("selectedcar"))
cardetails();

function cardetails(){

    let div0 = document.getElementById("date");
    let div00 = document.getElementById("Nodays");
    let div11 = document.getElementById("c");
    let div22 = document.getElementById("p");

    let startdate = document.createElement("h4");
    startdate.innerHTML = sdate;
    startdate.style.marginRight = "15%"

    let enddate = document.createElement("h4");
    enddate.innerHTML = edate;
    enddate.style.marginLeft = "20%"

    let to = document.createElement("p");
    to.innerHTML = "  To   ";
    
    div0.append(startdate,to,enddate);

    // let d1 = sdate.split("-");
    // let d2 = edate.split("-")
    // let sub = +d2[2] - +d1[2];
    // console.log(sub)

     startdate = localStorage.getItem("start-date") || "2022-02-28";
     enddate = localStorage.getItem("end-date") || "2022-03-06";
    
    enddate = enddate.split("-");
    startdate = startdate.split("-");
    
    enddate = new Date(enddate[0], enddate[1] - 1, enddate[2]);
    startdate = new Date(startdate[0], startdate[1] - 1, startdate[2]);
    
    let sub = getNumberOfDays(startdate, enddate);
    console.log(sub);
    
    function getNumberOfDays(date1, date2) {
      // 1000ms * 60 secs * 60 mins * 24 hrs
      var oneDay = 1000 * 60 * 60 * 24;
    
      var diffInTime = date2.getTime() - date1.getTime();
    
      return Math.round(diffInTime / oneDay);
    }
    




    let Nodate = document.createElement("p");
    Nodate.innerHTML = `<i class="far fa-clock"></i>  ` + sub + " Days";
    div00.append(Nodate);

    let cit = document.createElement("h4");
    cit.innerHTML = selectdcity ;

    let plann = document.createElement("h4");
    plann.innerHTML ="Pricing Plan:" + `${data.selected_range }  `+ fuel + " fuel";

    div11.append(cit);
    div22.append(plann);

    let days = document.createElement("p");
    days.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + "mycar.rent "+ "days";

    let plan = document.createElement("p");
    plan.innerHTML = "Pricing Plan: Includes ";
   
    let img = document.createElement("img");
    img.src = mycar.imgUrl;
    img.style.width ="200px"
    img.style.marginBottom = "35px"
    img.style.marginTop = "35px"

    let nam = document.createElement("h3");
    nam.innerHTML = mycar.model
    nam.style.marginLeft = "35px"

    let div1 = document.createElement("div");
    div1.setAttribute("id","carpic")

    let div2 = document.createElement("div");
    div2.innerHTML = `<i class="fa fal fa-users"></i>`
    div2.style.color ="#0ebaba";

    let p1 = document.createElement("p");
    p1.innerHTML = mycar.seats + " seats"

    let div3 = document.createElement("div");
    div3.setAttribute("class","seats")
    div3.append(div2,p1)

    let div4 = document.createElement("div");
    div4.innerHTML = `<i class="fa far fa-cog"></i>`
    div4.style.color ="#0ebaba";

    let p2 = document.createElement("p");
    p2.innerHTML = mycar.transmission;

    let div5 = document.createElement("div");
    div5.setAttribute("class","seats")
    div5.append(div4,p2)

    let div6 = document.createElement("div");
    div6.innerHTML = `<i class="fas fa-gas-pump"></i>`
    div6.style.color ="#0ebaba";

    let p3 = document.createElement("p");
    p3.innerHTML = mycar.fuel;

    let div7 = document.createElement("div");
    div7.setAttribute("class","seats")
    div7.append(div6,p3)

    div1.append(div3,div5,div7);
    imgg.append(nam,img,div1)

    let table = document.createElement("table");
    let thead = document.createElement("thead");

      var tr1 = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + mycar.rent;

      var td2 = document.createElement("td");
      td2.textContent = "Base fare";
      td2.style.width ="300px"
      tr1.append(td2,td1)

      var tr2 = document.createElement("tr");
      var td3 = document.createElement("td");
      td3.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + 400;
      var td4 = document.createElement("td");
      td4.textContent = "Doorstep delivery & pickup";
      tr2.append(td4,td3)

      var tr3 = document.createElement("tr");
      var td5 = document.createElement("td");
      td5.textContent = fuel;
      var td6 = document.createElement("td");
      td6.textContent = "Insurance & GST";
      tr3.append(td6,td5)

      var tr4 = document.createElement("tr");
      var td7 = document.createElement("td");
      td7.innerHTML = `<i class="fas fa-rupee-sign"></i> ` +  2000;
      var td8 = document.createElement("td");
      td8.textContent = "Refundable security deposit";

      tr4.append(td8,td7)

      thead.append(tr1,tr2,tr3,tr4)
      table.append(thead)
      
      let total = document.getElementById("total")
      var tr5 = document.createElement("tr");

      var td9 = document.createElement("td");
      td9.setAttribute("id","add")
      var x =(mycar.rent) + (+2000) + (+400) ;
      td9.innerHTML = `<i class="fas fa-rupee-sign"></i>  ${x}`;
      var td10 = document.createElement("td");
      td10.textContent = "Total";
      td10.style.width ="300px";
      let hr = document.createElement("hr")

      tr5.append(td10,td9)
      tr5.style.fontSize ="22px"
      tr5.style.border ="1px solid back"

      total.append(tr5,hr)
      one.append(table)

let two = document.getElementById("two")

var tr5 = document.createElement("tr");
var td9 = document.createElement("td");
td9.style.width ="300px"
td9.innerHTML = "Kms limit";
var td10 = document.createElement("td");
td10.innerHTML = `${data.selected_range}`;
tr5.append(td9,td10)

var tr6 = document.createElement("tr");
var td11 = document.createElement("td");
td11.innerHTML = "Fuel ";
var td12 = document.createElement("td");
td12.textContent = fuel;
tr6.append(td11,td12)

var tr7 = document.createElement("tr");
var td13 = document.createElement("td");
td13.innerHTML = "Extra kms charge";
var td14 = document.createElement("td");
td14.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + ` ${data.extra}` + "/km";
tr7.append(td13,td14)

var tr8 = document.createElement("tr");
var td15 = document.createElement("td");
td15.innerHTML = "Tolls, Parking & Inter-state taxes";
var td16 = document.createElement("td");
td16.textContent = "To be paid by you";
tr8.append(td15,td16);

two.append(tr5,tr6,tr7,tr8)


let flag =0;
document.querySelector("#promobutton").addEventListener("click", function(){
    if(flag==1){
        alert(`Coupan is applied only once`)
        alert.color="red"
    }   
    else if(pcode.value == "masai30"){
    let y = Math.floor((x*80)/100);
    // console.log("total",x)
    flag =1;
    alert("Congratulations,You get 20% OFF");
    let add = document.getElementById("add")
    add.innerHTML = `<i class="fas fa-rupee-sign"></i> ${y} `
}
else{
    alert("error");
}
})


// payment //

}


// payment page start
let payment = document.getElementById("pay");
payment.onclick = function() {
    document.getElementById("personaldetails2").style.display ="none";
document.getElementById("otpcontainer").style.display ="none";
document.getElementById("personaldetails").style.display ="block";
}

let checkpaydetails = document.getElementById("submitaadhar");
checkpaydetails.onclick = function() {
document.getElementById("personaldetails").style.display ="none";
document.getElementById("otpcontainer").style.display ="none";
document.getElementById("personaldetails2").style.display ="block";
}  

let generateotp = document.getElementById("checksubmit");
generateotp.onclick = function() {
document.getElementById("personaldetails").style.display ="none";
document.getElementById("personaldetails2").style.display ="none";
document.getElementById("otpcontainer").style.display ="block";
} 
// payment page end

// opt 

document.getElementById("gtotp").addEventListener("submit", otpcall);

function otpcall(event) {
    event.preventDefault();
    var otp = document.querySelector("#otp").value;

    if (otp === "12345") {
        window.location.href = "loading.html";
       
    } else {
        alert("Invalid OTP");
    }
}

document.getElementById("getpay").addEventListener("checksubmit", call);

function call(event) {
    event.preventDefault();
    var cardno = document.querySelector("#cardno").value;
    var cvv = document.querySelector("#cvv").value;
    var exdate = document.querySelector("#exdate").value;
    
    if (cvv === "123" && exdate === "01-02-2022") {
        alert("Otp Sent Succesfully");
        window.location.href = "OTP.html";
    } else {
        alert("Invalid Details");
    }
}



