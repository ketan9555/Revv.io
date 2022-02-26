  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function () { scrollFunction() };
  document.getElementById("navbar2").style.display = "none"
  function scrollFunction() {
      document.getElementById("navbar2").style.display = "block"

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("navbar2").style.top = "61.5px";
      } else {
          document.getElementById("navbar2").style.top = "-500px";
      }
  }


  $('#popup1').popup();


  $('#popup2').popup({
      pagecontainer: '#page',
      escape: false
  });

  let city = document.querySelectorAll(".city-box >p")
  let city2 = document.querySelectorAll(".city-box2>p")
  console.log(city)
  city.forEach((ele) => {
      ele.addEventListener("click", (event) => {
          console.log(event.target.tagName)
          // if(event.target.tagName==''){
          //   console.log(event.target.tagName)



          let inputloc = document.getElementById("input-loc")
          let inputloc2 = document.getElementById("input-loc2")

          inputloc.innerHTML = ""
          inputloc2.innerHTML = ""

          inputloc.innerHTML = event.target.textContent
          inputloc2.innerHTML = event.target.textContent
          localStorage.setItem("city",event.target.textContent)
          //console.log(event.target.textContent)
          // }
      })
  })

  city2.forEach((ele) => {

      ele.addEventListener("click", (event) => {
          let inputloc = document.getElementById("input-loc")
          let inputloc2 = document.getElementById("input-loc2")

          inputloc.innerHTML = ""
          inputloc2.innerHTML = ""

          inputloc.innerHTML = event.target.textContent
          inputloc2.innerHTML = event.target.textContent

          //console.log(event.target.textContent)
          //console.log(34)
      })
  })
  // seach button...............................
  function searchfn() {

      window.location.href = "cars.html"


  }
  //..............................................



  var span1 = document.getElementsByClassName('span1');
  var div1 = document.getElementsByClassName('st')

  var l = 0
  span1[0].onclick = () => {
      l++
      for (var i of div1) {
          if (l == 0) { i.style.left = "0px"; }
          if (l == 1) { i.style.left = "-390px"; }
          if (l == 2) { i.style.left = "-780px"; }
          if (l == 3) { i.style.left = "-1190px"; }
          if (l == 4) { i.style.left = "-1600px"; }
          if (l > 4) { l = 4; }


      }
  }
  span1[1].onclick = () => {
      l--
      for (var i of div1) {
          if (l == 0) { i.style.left = "0px"; }
          if (l == 1) { i.style.left = "-400px"; }
          if (l == 2) { i.style.left = "-820px"; }
          if (l == 3) { i.style.left = "-1130px"; }
          if (l == 4) { i.style.left = "-1480px"; }
          if (l < 0) { l = 0; }


      }
  }
  var span2 = document.getElementsByClassName('span2');
  var div2 = document.getElementsByClassName('st2')

  var k = 0
  span2[0].onclick = () => {
      k++
      for (var z of div2) {
          if (k == 0) { z.style.left = "0px"; }
          if (k == 1) { z.style.left = "-300px"; }
          if (k == 2) {z.style.left = "-600px"; }
          if (k == 3) { z.style.left = "-900px"; }
          if (k == 4) { z.style.left = "-900px"; }
          if (k > 4) { k = 4; }


      }
  }
  span2[1].onclick = () => {
      k--
      for (var z of div2) {
          if (k == 0) { z.style.left = "0px"; }
          if (k == 1) { z.style.left = "-300px"; }
          if (k == 2) {z.style.left = "-600px"; }
          if (k == 3) { z.style.left = "-900px"; }
          if (k == 4) { z.style.left = "-900px"; }
          if (k < 0) { k = 0; }


      }
  }
  var span3 = document.getElementsByClassName('span3');
  var div3 = document.getElementsByClassName('st3')

  var m = 0
  span3[0].onclick = () => {
      m++
      for (var p of div3) {
          if (m == 0) { p.style.left = "0px"; }
          if (m == 1) { p.style.left = "-400px"; }
          if (m == 2) {p.style.left = "-810px"; }
          if (m == 3) { p.style.left = "-1190px"; }
          if (m == 4) { p.style.left = "-1190px"; }
          if (m > 4) { m = 4; }


      }
  }
  span3[1].onclick = () => {
      m--
      for (var p of div3) {
          if (m == 0) { p.style.left = "0px"; }
          if (m == 1) { p.style.left = "-300px"; }
          if (m == 2) {p.style.left = "-810px"; }
          if (m == 3) { p.style.left = "-1190px"; }
          if (m == 4) { p.style.left = "-1190px"; }

          if (m < 0) { m = 0; }


      }
  }
  var span4 = document.getElementsByClassName('span4');
  var div4 = document.getElementsByClassName('st4')

  var x = 0
  span4[0].onclick = () => {
      x++
      for (var c of div4) {
          if (x == 0) { c.style.left = "0px"; }
          if (x == 1) { c.style.left = "-320px"; }
          if (x == 2) { c.style.left = "-620px"; }
          if (x == 3) { c.style.left = "-900px"; }
          if (x == 4) { c.style.left = "-920px"; }
          if (x > 4) { x = 4; }


      }
  }
  span4[1].onclick = () => {
      x--
      for (var c of div4) {
          if (x == 0) { c.style.left = "0px"; }
          if (x == 1) { c.style.left = "-300px"; }
          if (x == 2) { c.style.left = "-780px"; }
          if (x == 3) { c.style.left = "-990px"; }
          if (x == 4) { c.style.left = "-990px"; }
          if (x < 0) { x = 0; }


      }
  }

