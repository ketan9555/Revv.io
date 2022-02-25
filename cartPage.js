import { navbar }  from "./components/navbar.js";
//console.log(navbar)

let navbardiv = document.getElementById("container")
navbardiv.innerHTML = navbar();

let data = {
    brand : "Tata",
    model : "Tata Tiago (P)",
    imgUrl : "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/Tata-Tiago4.png",
    seats : "5",
    transmission : "Manual", 
    fuel: "Petrol", 
    segment : "Hatchback", 
    month_rent : 12000,
    rent : 4949,
        // low :  3479,
        // avg :  4949,
        // Unlimited : 5439,   
}
let startdate = "25-02-2022 "
let ensdate = "27-02-2022"
let city = "Pune"
localStorage.setItem("startdate",JSON.stringify(startdate));
localStorage.setItem("ensdate",JSON.stringify(ensdate))
localStorage.setItem("city",JSON.stringify(city))

var sdate = JSON.parse(localStorage.getItem("startdate"));
var edate = JSON.parse(localStorage.getItem("ensdate"));
var selectdcity = JSON.parse(localStorage.getItem("city"));

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

    let enddate = document.createElement("h4");
    enddate.innerHTML = edate;

    let to = document.createElement("p");
    to.innerHTML = "To";

    div0.append(startdate,to,enddate);

    let d1 = sdate.split("-");
    let d2 = edate.split("-")
    let sub = +d2[0] - +d1[0];
    console.log(sub)

    let Nodate = document.createElement("p");
    Nodate.innerHTML = `<i class="far fa-clock"></i>  ` + sub + " Days";
    div00.append(Nodate);

    let cit = document.createElement("h4");
    cit.innerHTML = selectdcity ;

    let plann = document.createElement("h4");
    plann.innerHTML ="Pricing Plan:" + "Includes 490 kms," +"excludes" + "fuel";

    div11.append(cit);
    div22.append(plann);


    let days = document.createElement("p");
    days.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + "mycar.rent "+ "days";

    let plan = document.createElement("p");
    plan.innerHTML = "Pricing Plan: Includes";

    
    let img = document.createElement("img");
    img.src = mycar.imgUrl;
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
      td5.textContent = "Included";
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
td10.innerHTML = "Unlimited kms";
tr5.append(td9,td10)


var tr6 = document.createElement("tr");
var td11 = document.createElement("td");
td11.innerHTML = "Fuel";
var td12 = document.createElement("td");
td12.textContent = "Excluded";
tr6.append(td11,td12)

var tr7 = document.createElement("tr");
var td13 = document.createElement("td");
td13.innerHTML = "Extra kms charge";
var td14 = document.createElement("td");
td14.innerHTML = `<i class="fas fa-rupee-sign"></i> ` + 0 + "/km";
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
        alert("Coupan is applied only once")
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

// let map = document.getElementsByClassName("selactmap");
// let add = document.getElementsByClassName("gmap_iframe");
// add.src = `https://maps.google.com/maps?width=600&q=pune&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`

}

// const  rundata = async (e) => {   
//     try {
//         if (e === "Enter"){
//             // document.getElementById("container").innerHTML =null;
//             let value = map.value;
//             let add = document.getElementsByClassName("gmap_iframe");
//             add.src = `https://maps.google.com/maps?width=600&q=${pune}&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`           
//         }
//     }
//     catch (err) {
//         // alert("please enter correct item")
//         // let errr = document.createElement("img")
//         // errr.src = "https://c.tenor.com/oGqmSDzGn3gAAAAC/busubusu8-cute.gif";
//         // errr.style = "margin:0 300px;width:700px"
//         // parent.append(errr)      
//         console.log(err)  
//     }
// }

let map = document.getElementsByClassName("selactmap");
map.keypress =rundata() 

function rundata() {
    console.log("a")
    if (add.keypress === "Enter"){
        // document.getElementById("container").innerHTML =null;
        let value = map.value;
        let add = document.getElementsByClassName("gmap_iframe");
        add.src = `https://maps.google.com/maps?width=600&q=${pune}&amp;height=400&amp;hl=en&amp;q=&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`           
    }
};

rundata()

