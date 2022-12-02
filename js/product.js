


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



      //   let productCart = document.createElement("div");
      //   productCart.className = "product-cart d-flex pt-4 ps-4 pb-4";

      //   let productCartImage = document.createElement("div");
      //   productCartImage.className = "product-cart-image";
      //   productCart.appendChild(productCartImage);

      //   let img = document.createElement("img");
      //   img.src = "image/praesent-in-ante--0QALVF.jpg";
      //   productCartImage.appendChild(img);

      //   let btun = document.createElement("div");
      //   btun.className = "butn";
      //   btun.textContent = "X";
      //   productCartImage.appendChild(btun)

      // let productCartInfo = document.createElement("div");
      // productCartInfo.className = "product-cart-info";

      // let spanOne = document.createElement("span");
      // spanOne.textContent = "Praesent in ante"
      // productCartInfo.appendChild(spanOne)

      // let spanTwo = document.createElement("span");
      // spanTwo.textContent = "Size: Small";
      // productCartInfo.appendChild(spanTwo);

      // let productCartDetails = document.createElement("div");
      // productCartDetails.className = "product-dateils";

      // let spanDetailsOne = document.createElement("span");
      // spanDetailsOne.className = "price";
      // spanDetailsOne.textContent = "$129.00"
      // productCartDetails.appendChild(spanDetailsOne);

      // let spanDetailsTwo = document.createElement("span");
      // spanDetailsTwo.textContent = "QTY: ";
      // let spanDetailsThree = document.querySelector("span");
      // spanDetailsThree.className = "amount"
      // spanDetailsThree.textContent = "1";
      // productCartDetails.appendChild(spanDetailsOne)
      // productCartDetails.appendChild(spanDetailsTwo) 
      // spanDetailsTwo.appendChild(spanDetailsThree);

      // productCart.appendChild(productCartInfo);
      // productCart.appendChild(productCartDetails);

        // document.querySelector(".product-carts").appendChild(productCart);

  





    // let carts = document.querySelector(".product-review .user-control .carts");

    //   let product = [
    //     {
    //       name: 'Praesent in ante',
    //       size: 'Size: Small',
    //       price: 129,
    //       quantity: 'QTY:',
    //       amount: 1,
    //       inCart: 0,
    //     },
    //   ];

    //   carts.addEventListener("click" , ()=>{
    //     cartsNumber(product);
    //   })

    //   function onloadCartsNumber() {
    //     let productNumber = localStorage.getItem("cartsNumber");
    //     if(productNumber) {
    //       document.querySelector(".cart .setting .amount span").textContent = productNumber;
    //      }
    //   }

    //   function cartsNumber(product) {
       
    //     let productNumber = localStorage.getItem("cartsNumber");
  
    //     productNumber = parseInt(productNumber);
    //    if(productNumber) {
    //     localStorage.setItem('cartsNumber' , productNumber + 1);
    //     document.querySelector(".cart .setting .amount span").textContent = productNumber + 1
    //    }else{
    //     localStorage.setItem('cartsNumber' , 1);
    //     document.querySelector(".cart .setting .amount span").textContent = 1
    //    }

    //     setItems(product)
    //   }

    //   function setItems(product) {
    //     let cartItems = localStorage.getItem("productInCart");
    //     cartItems = JSON.parse(cartItems);

    //     if(cartItems != null) {

    //       if(cartItems[product.name] != undefined) {
    //         cartItems = {
    //           ...cartItems,
    //           [product.name]: product,
    //         };
    //       }
    //       cartItems[product.name].inCart += 1;
    //     }
    //     else{
    //       product.inCart = 1;
    //       cartItems ={
    //         [product.name]: product
    //       }
    //     }
         

           
    //       localStorage.setItem("productInCart" , JSON.stringify(cartItems))
    //   }


    //   onloadCartsNumber();












    
    let enlargefront = document.querySelector(".product-review .image-big .front .enlarge");
    let enlargeback = document.querySelector(".product-review .image-big .back .enlarge");
    let enlargef = document.querySelector(".product-review .image-big .f");
    let enlargeb = document.querySelector(".product-review .image-big .b");
    let enlargeImage = document.querySelectorAll(".product-review .image-big  img");
    let closeButton = document.querySelector(".close-button");

    
  enlargefront.addEventListener("click" , () =>{
    let overlay = document.createElement("div")
       overlay.className = "popup-overlay";
       document.body.appendChild(overlay)

       let popupBox = document.createElement("div");
       popupBox.className = "popup-box";

       let popImage = document.createElement("img");
       popImage.src = enlargef.src;
       popupBox.appendChild(popImage);
       document.body.appendChild(popupBox)

       let closeButton = document.createElement("span");
       let closeButtonText = document.createTextNode("X");
       closeButton.appendChild(closeButtonText);
       closeButton.className = 'close-button';
       popupBox.appendChild(closeButton);
  })

    enlargeImage.forEach((img)=>{
      img.addEventListener("click" , () =>{
        let overlay = document.createElement("div")
         overlay.className = "popup-overlay";
         document.body.appendChild(overlay)

         let popupBox = document.createElement("div");
         popupBox.className = "popup-box";

         let popImage = document.createElement("img");
        popImage.src = img.src;
        popupBox.appendChild(popImage);
        document.body.appendChild(popupBox)

        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className = 'close-button';
        popupBox.appendChild(closeButton);
      })
    });

   

    enlargeback.addEventListener("click" , () =>{
      let overlay = document.createElement("div")
         overlay.className = "popup-overlay";
         document.body.appendChild(overlay)

         let popupBox = document.createElement("div");
         popupBox.className = "popup-box";

         let popImage = document.createElement("img");
         popImage.src = enlargeb.src;
         popupBox.appendChild(popImage);
         document.body.appendChild(popupBox)

         let closeButton = document.createElement("span");
         let closeButtonText = document.createTextNode("X");
         closeButton.appendChild(closeButtonText);
         closeButton.className = 'close-button';
         popupBox.appendChild(closeButton);
    })

    document.addEventListener("click" ,function(e) {
      if(e.target.className == "close-button") {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove()
      }
    })


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


var swiper = new Swiper(".product-review .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    pagination: {
      el: ".blog .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-review .swiper-button-next",
      prevEl: ".product-review .swiper-button-prev",
    },
  
   
  });

  const productImage = document.querySelectorAll(".product-review .image-small img");
const showImage = document.querySelectorAll(".product-review .image-big .swiper-slide")

productImage.forEach((image)=>{
  image.addEventListener("click" , (e)=>{
    e.preventDefault();
    const filter = e.target.dataset.filter;
    showImage.forEach((img)=>{
      if(filter === 'all') {
        img.style.display = "block";
      }else { 
        if(img.classList.contains(filter)) {
          img.style.display = "block";
        }
        else {
          img.style.display = "none"
        }
      }
    })

  })
})


const links = document.querySelectorAll(".product-review .size  .btns");
let cartSize = document.querySelectorAll(".cart .product-carts .product-cart-info .size");
let cartProductClose = document.querySelectorAll(".cart .product-cart-image .butn");
let cartProduct = document.querySelectorAll(".cart .product-cart")

cartProductClose.forEach((close)=>{
  close.addEventListener("click", ()=>{
    cartProduct.forEach((product)=>{
      product.style.display = "none"
    })
  })
})





links.forEach((link)=>{
  link.addEventListener("click" , ()=>{
    links.forEach((link)=>{
      link.classList.remove("active")
    })
    link.classList.add("active")
  })
})

links.forEach((link)=>{
  link.addEventListener("click" , ()=>{
    cartSize.forEach((size)=>{
      size.innerText = `Size : ${link.innerText}`;
      size.innerText = link.innerText;
    })
  })
})





const prev = document.querySelector(".product-review .numbers .prev");
const next = document.querySelector(".product-review .numbers .next");
const num = document.querySelector(".product-review .numbers .num");

let counter = 1;

next.addEventListener("click" , ()=>{
    num.innerText = ++counter;
    console.log(counter);
})

prev.addEventListener("click" , ()=>{
    // counter;
    if(counter > 1) {
      num.innerText = --counter;
    }
    console.log(counter);
})


const tabs = document.querySelectorAll(".product-review .link-content li");
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll(".product-review .content > div")
let divsArray = Array.from(divs)

tabs.forEach((link)=>{
  link.addEventListener("click" , ()=>{
    tabs.forEach((link)=>{
      link.classList.remove("active")
    })
    link.classList.add("active")
  })
})

tabsArray.forEach ((ele)=>{
  ele.addEventListener("click" , (e) =>{
    divsArray.forEach((div)=>{
      div.style.display = "none"
    })
  document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
  })
})



const likeOne = document.querySelectorAll(".product-review .review-sec .ask .like-1");
const likeTwo = document.querySelectorAll(".product-review .review-sec .ask .like-2");
const increaseNumber = document.querySelector(".product-review .review-sec .ask .like-1 .increase");
const decreaseNumber = document.querySelector(".product-review .review-sec .ask .like-2 .decrease");

let increase = 1;
let decrease = 1;

likeOne.forEach((like)=>{
  like.addEventListener("click" , ()=>{
    increaseNumber.innerText = increase++;
  })
})

likeTwo.forEach((like)=>{
  like.addEventListener("click" , ()=>{
    decreaseNumber.innerText = decrease++;
  })
})





let cartItems = [];

const cartDom = document.querySelector(".product-cart");
const totalCost = document.querySelector(".product-total .price");


const addToCart = document.querySelector(".product-review .user-control .carts").onclick = function () {
  
  const product = {
    // id : document.querySelector(".product-review .price").value,
    name : document.querySelector(".product-review .head-2 .heading").innerText,
    image : document.querySelector(".product-review .image-big .f").getAttribute("src"),
    price: document.querySelector(".product-review .price").innerText,
    quantity: 1,
  
  };

  addItemToTheDom(product);

  const cartDomItems = document.querySelectorAll("product-content");
    cartDomItems.forEach((item)=>{
      increaseItem(item , product);
    })

  cartItems.push(product)
  // calculateTotal();
}
  

function addItemToTheDom(product) {

    cartDom.insertAdjacentHTML("afterbegin" , `<div class="product-content d-flex align-items-center"><div class="product-cart-image d-flex align-items-center">  <div class="image"> <img src="${product.image}" alt=""> <span class="bton">X</span> </div><div class="product-cart-info ms-3"><a href="">${product.name}</a><span>Size:Small</span></div></div><div class="product-cart-details"> <span class="price">${product.price}</span> <span class="amount">QTY : ${product. quantity}</span></div></div>`)
}




//  function  calculateTotal() { 
//   let total = 0;
//   cartItems.forEach((item)=>{
//     total += item.price;
//   })

//   totalCost.innerText = total;
//  }

//  function increaseItem(item ,product) {
//       item.querySelector(".user-control .numbers .next").onclick = function () {
//         cartItems.forEach((cartItem)=>{
//           item.document.querySelector(".product-cart .amount").innerText = ++cartItem.quantity;
//         })
//       }
//  }


let userName = document.querySelector("[name='user']");
let title = document.querySelector("[name='title']");
let comment = document.querySelector("[name='comment']");
let image = document.querySelector("[name='image']");
let submit = document.querySelector("[name='submit']")


document.querySelector("form").onsubmit = function(e) {
  let nameValid = false;
  let titleValid = false;
  let commentValid = false;
  let submitValid = false;

  if(title.value !== "") {
    titleValid = true;
  }

  if(userName.value !== "") {
    nameValid = true;
  }

  if(comment.value !== "") {
    commentValid = true;
  }


//   submit.addEventListener ("click" , () =>{
//     let userName = document.querySelector("[name='user']");
// let title = document.querySelector("[name='title']");
// let comment = document.querySelector("[name='comment']");
//     if (title.value !== "" || userName.value !== "" || comment.value !== "") {

//       Swal.fire(
//         'Good job!',
//        'You clicked the button!',
//        'success'
//       )
//     }
    
//   })


  if(nameValid === false || titleValid === false || commentValid === false) {
    e.preventDefault()
  }
}

