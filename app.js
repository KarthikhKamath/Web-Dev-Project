
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY >50)
})
var hamburgermenu = document.querySelector(".hamburger-menu")
var lines = document.querySelector(".line")
var links = document.querySelector(".links")

 hamburgermenu.addEventListener("click", function(){
     hamburgermenu.classList.toggle("change")
 })
 
 hamburgermenu.addEventListener("click", function(){
    var navigation = document.querySelector(".navigation")
     navigation.classList.toggle("move")
 })
 var  height= document.querySelector("#wrapper").scrollHeight
 console.log(height)