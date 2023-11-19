let link= document.getElementById("ch")
let main = document.getElementById("root")
link.onclick = function(){
  document.querySelector("h1").remove()
  main.classList.remove("no")
  main.style.animationName="fade"
  main.style.animationDuration="1s"
  link.onclick = null
}
let rules = document.getElementById("rules").children
let count=0
window.addEventListener("keydown",(e)=>{
  if(e.key =="Enter" && count < 5){
    rules[count].classList.remove("no")
    count+=1
  }
})
let start = document.querySelector(".start")
start.onclick = function(){
  document.body.style.backgroundImage="url(https://i.kym-cdn.com/photos/images/original/001/874/512/345.png)"
  let timer =document.createElement("p")
  timer.textContent="APPRECIATE THE DAMN HOVER EFFECT 20"
  timer.margin="auto"
  main.append(timer)
  setTimeout(() => {
    window.location.href="./1/index.html"
  }, 20000);
  let res=timer.textContent.split(" ")
  let x= setInterval(() => {
    let res=timer.textContent.split(" ")
    res[5] = +res[5] -1
    timer.textContent= res.join(" ")
    if(+res[5] ==0){clearInterval(x)}
  }, 1000);
  start.onclick = null
  
}
