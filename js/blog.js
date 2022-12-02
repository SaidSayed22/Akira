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



  // document.querySelector(".blog-content .search .submit").onclick = function (e) {
      const search = (e) =>{
          //  document.querySelector(".blog-content .search .submit").onclick = function (e) {
        // e.preventDefault();
        const searchBox = document.getElementById("search-item").value.toUpperCase();
        const storeItems = document.querySelector(".posts")
        const product = document.querySelectorAll(".blog-content .posts .post");
      const pname = storeItems.querySelectorAll(".blog-content .posts .post .info a .name");
    
      for(let i = 0 ; i < pname.length  ; i++) {
        let match = product[i].querySelectorAll(".blog-content .posts .post .info a .name")[0];
        if(match) {
        let textValue =   match.textContent || match.innerHTML;
    
        if(textValue.toUpperCase().indexOf(searchBox) > -1) {
            product[i].style.display = "";
        }
        else {
          product[i].style.display = "none";
        }
        }
      }
      // }
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


// document.querySelector(".submit").onsubmit = function() {

// }

 let comment =  document.querySelector("[name='Comment']");
 let captcha = document.querySelector("[name='Captcha']");
 let username = document.querySelector("[name='Name']");
 let email = document.querySelector("[name='E-mail']");
 let error = document.querySelector(".error");
 let commentError = document.querySelector(".comment-error")
 let captchaError = document.querySelector(".captcha-error")

  // console.log(comment);
  // console.log(captcha);
  // console.log(error);
  // console.log(commentError);
  // console.log(captchaError);

  document.querySelector("form").onsubmit = function(e) {
     let commentValid = false;
     let captchaValid = false;
     let nameValid = false;
     let emailValid = false;

      if(comment.value.length < 25 && comment.value.length < 1500) {
          error.style.display = "block"
          commentError.style.display = "block"
      }
      else {
        commentValid = true;
      }

      if(captcha.value === "yyc39") {
        captchaValid = true;
      }else {
        error.style.display ="block";
        captchaError.style.display = "block"
      }

      if(username !== "") {
        nameValid = true;
      }

      if(email !== "") {
        emailValid = true;
      }

     if(commentValid === false || captchaValid === false || nameValid === false || emailValid === false) {
      e.preventDefault()
     }

  }



//  document.querySelector(".blog-content .search .submit").onclick = function (e) {
//     e.preventDefault();
//     let searchBox = document.querySelector(".blog-content .search .text").value;
//     let Pname = document.querySelectorAll(".blog-content .posts .post .info .name");
//     let product = document.querySelectorAll(".blog-content .posts .post");
//     Pname.forEach((name , index)=>{
//       if(name.innerText.includes(searchBox.toUpperCase())) {
//         product[index].classList.remove("hide")
//       }
//       else {
//         product[index].classList.add("hide")
//       }
//     })
//  }


