// console.log("Salam, Roman")
// console.log("Salam, Gunay")
// console.log("Salam, Tahir")
// // Regular


// function welcomeUser(istifadeciadi) {
//     console.log("Salam, " + istifadeciadi);
// }

// welcomeUser("Gunay")
// welcomeUser("Roman")
// welcomeUser("Huseynrza")

// // Function vs Function expression
// const istifadeciniSalamla = function(userName) {
// return "Welcome, " + userName
// }

// istifadeciniSalamla("Raul")

// // Arrow function
// const istifadeciniSalamlaArrowFunc = (name, surname) => console.log("Welcome, " + 
// istifadeciniSalamlaArrowFunc("Meherrem")

// // IIFE Immediately Invoked Function Expression
// (function s5QrupunuSalamla(ad, soyad){
//      console.log("Welcome, " + ad + " " + soyad)
//     } ("Meherrem", "Dadashov"))




















// API Application Programming Interface
// Asinxron sinxron proqramlasdirma

const mehsullarinYerlesheceyiYer = document.querySelector("#mehsullar")

window.addEventListener("DOMContentLoaded", getMelumatlariGetir)

async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"


    // load, DOMContentLoaded
    // hoisting anlayisi
    // multi thread - paralel olaraq 
    // JSON JavaScript Object Notation

    try {
        const cavab = await fetch(unvan) //gedir sayta girir(request gonderir)

        //    pending fullfilled reject

        const mehsullar = await cavab.json()


        for (let i = 0; i < mehsullar.length; i++) {
            mehsullarinYerlesheceyiYer.innerHTML += `   

<div class="col-12 col-md-6 col-lg-4">
      <div class="card my-2 border-0">
    <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-evenly">
      <h5 class="card-title text-center">${mehsullar[i].title}</h5>
      <p class="card-text">${mehsullar[i].description.slice(0,40)}...</p>
      <a href="/details.html" class="btn btn-primary">Read more</a>
    </div>
  </div>
</div>
           `
        }

    }

    catch (err) {
        console.log("Serverde bash veren xeta: ", err.message)
    }

    finally {
        console.log("Serverle xeta yarandi")
    }


}


const overlayMenuDivi = document.querySelector(".overlay-menu")

const navbarButtonu = document.querySelector(".navbar-toggler-icon")

const closeIcon = document.querySelector(".bi-x-circle")
closeIcon.addEventListener("click", menyunuBagla)

navbarButtonu.addEventListener("click", navbarMenyunuAc)


function navbarMenyunuAc() {
  // overlayMenuDivi.classList.add("aktiv")
  overlayMenuDivi.style.width="100%"
}


function menyunuBagla() {
  // overlayMenuDivi.classList.remove("aktiv")
  overlayMenuDivi.style.width="0"
}