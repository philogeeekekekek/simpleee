let answers= document.querySelector(".answers").children
let count=0
let r = ["Plz","it will be fun i swear","im not gonna say plz again","plz again","last chance under edge piece of ahbal"]
let text = document.querySelector("h1")
for (let i = 0; i < answers.length; i++) {
  if(answers[i].id == "d"){
    answers[i].onclick=function(){
      if(count <= r.length-1){
        text.innerHTML=r[count]
      }else{
        answers[i].remove()
        let time =11
        let x= setInterval(() => {
          time-=1
          text.innerHTML=time
          if(time ==0){clearInterval(x)}
        }, 1000);
        let q=setTimeout(() => {
          time=10
          let r= setInterval(() => {
            time-=1
            text.innerHTML=`IM SERIOUS BRO LIKE IT WONT BE PRETTY AT ALL IF YOU DONT MAKE UP YOUR MIND ${time}<br> (i guess its gonna turn you on tbh)`
            if(time ==0){clearInterval(r)}
          }, 1000);
        }, 11000);
        let s= setTimeout(() => {
          window.location.href="https://www.youtube.com/watch?v=ioE0_IWjb08"
        }, 22000);
      }
      count+=1
    }
  }
  else{
    answers[i].onclick=function(){
      window.location.href="../2/index.html"
    }
  }
}