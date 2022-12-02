


document.querySelector(".carts-settings").onclick = function () {
    document.querySelector(".cart").classList.toggle("open");
    document.querySelector(".carts-settings").style.display = "none"
  
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay)
  };
  
  document.querySelector(".close-settings .closed").onclick = function () {
    document.querySelector(".cart").classList.remove("open");
    document.querySelector(".carts-settings").style.display = "block";
      document.querySelector(".popup-overlay").remove();
    }

    document.querySelector(".para").onclick = function (e) {
      e.preventDefault()
      document.querySelector(".user").classList.toggle("open");
      // document.querySelector(".carts-settings").style.display = "none"
    
      let overlay = document.createElement("div")
      overlay.className = "popup-overlay";
      document.body.appendChild(overlay)
    };
    
    document.querySelector(".user .close-settings .closed").onclick = function () {
      document.querySelector(".user").classList.remove("open");
      // document.querySelector(".carts-settings").style.display = "block";
        document.querySelector(".popup-overlay").remove();
      }
    


      let cartPrice = document.querySelectorAll(".cart .product-carts .product-dateils .price");
      let TotalPrice = document.querySelector(".cart .product-total .price");



      let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) =>{
  let select = dropdown.querySelector(".select");
  let caret = dropdown.querySelector(".caret");
  let menu = dropdown.querySelector(".menu");
  let options = dropdown.querySelectorAll(".menu li");
  let selected = dropdown.querySelector(".selected");

  select.addEventListener("click" , () =>{
    menu.classList.toggle("menu-open");
    caret.classList.toggle("caret-rotate")
  });
  options.forEach((option) =>{
    option.addEventListener("click" , () =>{
      selected.innerHTML = option.innerHTML;
      menu.classList.remove("menu-open");
      caret.classList.remove("caret-rotate");
      options.forEach((option) =>{
        option.classList.remove("active")
      })
      option.classList.add("active")
    })
  })
})


let btn = document.querySelector("form .button-1");
let step = document.querySelector(".personal-info .step-number")
let active = document.querySelector(".personal-info .active");
let head = document.querySelector(".personal-info .title-head");
let content  = document.querySelector(".personal-info .content");

console.log(head);


btn.onclick = function(e) {
    e.preventDefault()
    step.style.display = "none";
    active.style.display = "block"
    content.style.display = "none"
}

head.onclick = function () {
    active.style.display = "none";
    step.style.display = "block";
    content.style.display = "block";
}



let headCon = document.querySelector(".footer .head-1");
let headInfo = document.querySelector(".footer .head-2");
let headAcc = document.querySelector(".footer .head-3");
let headCom = document.querySelector(".footer .head-4");

let ulCon = document.querySelector(".footer .con");
let ulInfo = document.querySelector(".footer .infon");
let ulAcc = document.querySelector(".footer .acc");
let ulcom = document.querySelector(".footer .com");

headCon.onclick = function() {
ulCon.classList.toggle("show")

}

headInfo.onclick = function() {
ulInfo.classList.toggle("show")
}

headAcc.onclick = function() {
ulAcc.classList.toggle("show")
}

headCom.onclick = function() {
ulcom.classList.toggle("show")
}



let span = document.querySelector(".up");

window.onscroll = function () {

if(this.scrollY >=500 ) {
span.classList.add("show")
}
else {
span.classList.remove("show")
}
}

span.onclick = function () {
window.scrollTo({
top:0,
behavior:"smooth",
});
}
