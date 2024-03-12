var closing = document.getElementById("closing")
var offtag = document.getElementById("offtag")
closing.addEventListener("click",function(){
    offtag.style.display = "none"
})



var sidenav =document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.left = 0
})
closenav.addEventListener("click",function(){
    sidenav.style.left = "-50%"
})