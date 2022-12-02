
document.querySelector(".carts-settings").onclick = function () {
  document.querySelector(".cart").classList.toggle("open");
  document.querySelector(".carts-settings").style.display = "none"

  let overlay = document.createElement("div")
  overlay.className = "popup-overlay";
  document.body.appendChild(overlay)
};

document.querySelector(".cart .close-settings .closed").onclick = function () {
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
   


    // let imageBig = document.querySelector(".product-review .image-big .front");
    
    // imageBig.addEventListener("mousemove" , function(e) {
    //   enlargeImage.forEach((img)=>{
    //     const x = e.clientX - e.target.offsetLeft;
    //     const y = e.clientY - e.target.offsetTop;
    //     console.log(x , y);
    //     img.style.transformOrigin = `${x}px ${y}px `;
    //     img.style.transform = "scale(2)"
    //   })
    // })
    


    // imageBig.addEventListener("mouseleave" , function(e){
    //   enlargeImage.forEach((img)=>{
    //     img.style.transformOrigin = 'center';
    //     img.style.transform = "scale(1)"
    //   })
    // })



let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);

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




let stars = document.querySelectorAll(".product-review .rate .star");

stars.forEach((star , i)=>{
  star.addEventListener("click" , ()=>{
    let currentStar = i + 1;
    stars.forEach((star , j)=>{
      if(currentStar >= j + 1) {
        star.innerHTML = "&#9733;"
      }
      else {
        star.innerHTML = "&#9734"
      }
    })
  })
})


var swiper = new Swiper(".landing .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".landing .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".landing .swiper-button-next",
    prevEl: ".landing .swiper-button-prev",
  },
});

var swiper = new Swiper(".review .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".review .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review .swiper-button-next",
    prevEl: ".review .swiper-button-prev",
  },
});

var swiper = new Swiper(".products .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".products .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products .swiper-button-next",
    prevEl: ".products .swiper-button-prev",
  },
});

var swiper = new Swiper(".products-1 .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".products-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products-1 .swiper-button-next",
    prevEl: ".products-1 .swiper-button-prev",
  },
});


var swiper = new Swiper(".blog .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  pagination: {
    el: ".blog .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog .swiper-button-next",
    prevEl: ".blog .swiper-button-prev",
  },

 
});



const buttons = document.querySelectorAll(".products .links a");
const storeImages = document.querySelectorAll(".products .box");


buttons.forEach((button) =>{
    button.addEventListener("click" , (e)=>{
        e.preventDefault();
        const filter = e.target.dataset.filter;
        storeImages.forEach((item)=>{
            if(filter === 'all') {
                item.style.display = 'block';
            }else {
                if (item.classList.contains(filter)) {
                    item.style.display = "block";
                }
                else {
                    item.style.display = "none"
                }
            }
        })
        buttons.forEach((button)=>{
          button.classList.remove("active")
        })
        button.classList.add("active")
    })
   
})


