let count =0
let list = document.querySelector("ol").children
window.addEventListener("keydown",(e)=>{
  if(count <= 5){
    list[count].classList.remove("no")
    count+=1
  }
})
let one=document.querySelectorAll(".one")
let two=document.querySelectorAll(".two")
let three=document.querySelectorAll(".three")
one[0].onclick =function(){
  list[6].classList.remove("no")
  window.open("https://c8.alamy.com/comp/2AD7PD4/3d-word-safe-made-of-green-grass-on-white-background-save-the-earth-concept-2AD7PD4.jpg","_blank")
}
two[0].onclick = one[0].onclick
three[0].onclick = function(){
  window.open("https://www.youtube.com/watch?v=LlPWXtYtGWI","_blank")
}
three[1].onclick = three[0].onclick
one[1].onclick =function(){
  window.location.href="../3/index.html"
}
two[1].onclick=one[1].onclick
