// let cardWrapper = document.createElement("div")
// cardWrapper.classList.add("card-wrapper")

// let cardImg = document.createElement("img")
// cardImg.classList.add("card-image")

// let cardTitle = document.createElement("h3")
// cardTitle.classList.add("card-title")
// cardTitle.InnerText = "card title"

let divEl = document.createElement("div")
document.body.append(divEl)

divEl.innerHTML = `
<div class="cardWrapper">
<div class="card">
<h1 class="cardTitle">Lorem</h1>
<p class="cardText">Lorem Ipsum</p>
<p class="cardText2">Lorem Ipsum dolor</p>
<p class="cardText3">Lorem Ipsum dolor</p>
</div> 

<div class="card2">
<h1 class="cardTitle2">Lorem</h1>
<p class="cardText4">Lorem Ipsum</p>
<p class="cardText5">Lorem Ipsum dolor</p>
<p class="cardText6">Lorem Ipsum dolor</p>
<p class="cardText7">Lorem Ipsum dolor</p>
</div>

<div class="card3">
<h1 class="cardTitle3">Lorem</h1>
<p class="cardText8">Lorem Ipsum</p>
<p class="cardText9">Lorem Ipsum dolor</p>
<p class="cardText10">Lorem Ipsum dolor</p>
<p class="cardText11">Lorem Ipsum dolor</p>
<p class="cardText12">Lorem Ipsum dolor</p>
</div>

</div> `

let body = document.querySelector(".body")
body.style.backgroundColor = "rgb(250, 100, 83)"

let cardWrapper = document.querySelector(".cardWrapper")
cardWrapper.style.display = "flex";
cardWrapper.style.alignItems = "center";
cardWrapper.style.justifyContent = "space-around";
cardWrapper.style.marginTop = "150px"

let card = document.querySelector(".card")
card.style.marginTop = "100px"
card.style.paddingTop = "10px"
card.style.paddingLeft = "20px"
card.style.height = "250px";
card.style.backgroundColor = "white";
card.style.width = "250px";

let card2 = document.querySelector(".card2")
card2.style.marginTop = "50px"
card2.style.paddingTop = "10px"
card2.style.paddingLeft = "20px"
card2.style.height = "300px";
card2.style.backgroundColor = "white";
card2.style.width = "250px";

let card3 = document.querySelector(".card3")
card3.style.paddingTop = "10px"
card3.style.paddingLeft = "20px"
card3.style.height = "350px";
card3.style.backgroundColor = "white";
card3.style.width = "250px";

let cardTitle = document.querySelector(".cardTitle")
cardTitle.style.fontFamily = "Montserrat"

let cardTitle2 = document.querySelector(".cardTitle2")
cardTitle2.style.fontFamily = "Montserrat"

let cardTitle3 = document.querySelector(".cardTitle3")
cardTitle.style.fontFamily = "Montserrat"


let cardText = document.querySelector(".cardText")
cardText.style.fontFamily = "Montserrat"
cardText.style.fontWeight = "500"

let cardText2 = document.querySelector(".cardText2")
cardText2.style.color = "rgb(250, 68, 83)"
cardText2.style.fontFamily = "Montserrat"

let cardText3 = document.querySelector(".cardText3")
cardText3.style.fontFamily = "Montserrat"
cardText3.style.color = "rgb(250, 68, 83)"
 
let cardText4 = document.querySelector(".cardText4")
cardText4.style.fontFamily = "Montserrat"
cardText4.style.fontWeight = "500"
 
let cardText5 = document.querySelector(".cardText5")
cardText5.style.fontFamily = "Montserrat"
cardText5.style.color = "rgb(250, 68, 83)"
 
let cardText6 = document.querySelector(".cardText6")
cardText6.style.fontFamily = "Montserrat"
cardText6.style.color = "rgb(250, 68, 83)"
 
let cardText7 = document.querySelector(".cardText7")
cardText7.style.fontFamily = "Montserrat"
cardText7.style.color = "rgb(250, 68, 83)"
 
let cardText8 = document.querySelector(".cardText8")
cardText8.style.fontFamily = "Montserrat"
cardText8.style.fontWeight = "500"
 
let cardText9 = document.querySelector(".cardText9")
cardText9.style.color = "rgb(250, 68, 83)"
cardText9.style.fontFamily = "Montserrat"
 
let cardText10 = document.querySelector(".cardText10")
cardText10.style.fontFamily = "Montserrat"
cardText10.style.color = "rgb(250, 68, 83)"
 
let cardText11 = document.querySelector(".cardText11")
cardText11.style.fontFamily = "Montserrat"
cardText11.style.color = "rgb(250, 68, 83)"

let cardText12 = document.querySelector(".cardText12")
cardText12.style.fontFamily = "Montserrat"
cardText12.style.color = "rgb(250, 68, 83)"
 
 