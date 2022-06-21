// Code here
//Introducing the DOMContentLoaded event
document.addEventListener("DOMContentLoaded",() => {
  const beerTitle = document.getElementById("beer-name")
  const beerImage = document.getElementById("beer-image")
  const beerDesc = document.getElementById("beer-description")
  const reviewList = document.getElementById("review-list")
    
  // See the first beer's details, including its name, image, description, and reviews, when the page loads.
    // fetch beer data from the server.  
    fetch("http://localhost:3000/beers")
    .then((res)=>res.json())
    .then((beers)=>{
      console.log(beers)
    })
})