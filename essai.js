var  coin=document.querySelector(".coin")
var  flipbtn=document.querySelector("#flip-button")
var  pile=document.querySelector("#pile")
var  face=document.querySelector("#face")


var choix
face.addEventListener("click",function () {
    if (face.style.backgroundColor=="gainsboro") {
      if (pile.style.backgroundColor=="gainsboro") {
        face.style.backgroundColor="rgba(241, 201, 20, 0.295)"
        choix="face"

      } else {
        pile.style.backgroundColor="gainsboro"
        face.style.backgroundColor="rgba(241, 201, 20, 0.295)"
        choix="face"

      }
      
    }else{
      if (pile.style.backgroundColor=="gainsboro") {
        face.style.backgroundColor="gainsboro"
        choix=""

      } else {
        pile.style.backgroundColor="gainsboro"
        face.style.backgroundColor="gainsboro"
        choix=""

      }
    }
})

pile.addEventListener("click",function () {
  if (pile.style.backgroundColor=="gainsboro") {
    if (face.style.backgroundColor=="gainsboro") {
      pile.style.backgroundColor="rgba(241, 201, 20, 0.295)"
      choix="pile"
    } else {
      face.style.backgroundColor="gainsboro"
      pile.style.backgroundColor="rgba(241, 201, 20, 0.295)"
      choix="pile"
    }
    
  }else{
    if (face.style.backgroundColor=="gainsboro") {
      pile.style.backgroundColor="gainsboro"
      choix=""
    } else {
      face.style.backgroundColor="gainsboro"
      pile.style.backgroundColor="gainsboro"
      choix=""
    }
  }
})

flipbtn.addEventListener("click",function () {
  var i=Math.floor(Math.random()*2)
  coin.style.animation="none"
  if (i==1) {
    setTimeout(() => {
        coin.style.animation="spin-heads 3s forwards"
    }, 100);
  } else {
    setTimeout(() => {
        coin.style.animation="spin-tails 3s forwards"
    }, 100);
  }
  setTimeout(() => {
    if (choix=="face") {
      if (i==1) {
       alert("vous avez gagner 10$")
      }else{
       alert("vous avez perdu")
      }
     }else{
       if (choix=="pile") {
         if (i==0) {
          alert("vous avez gagner 10$")
         }else{
          alert("vous avez perdu")
         }
        }
     }
  }, 3000);
})