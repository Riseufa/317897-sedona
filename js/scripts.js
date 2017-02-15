var link = document.querySelector(".hotel-search");
var popup = document.querySelector(".search-hotels-in-sedona");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.toggle("search-hotels-in-sedona-show");

});
