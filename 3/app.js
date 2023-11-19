document.querySelector(`input[type="submit"]`).onclick = function(e){
  e.preventDefault()
}
document.querySelector(`input[type="submit"]`).disabled = true
document.getElementById("one").onclick = function(e){
  if(this.children[1].checked &&this.children[3].checked && this.children[5].checked && this.children[7].checked){
    document.querySelector(`input[type="submit"]`).disabled = false
  }else{
    document.querySelector(`input[type="submit"]`).disabled = true
  }
}
document.querySelector(`input[type="submit"]`).onclick = function(e){
  e.preventDefault()
  window.open("https://goku.sx/search?keyword=saw+iv","_blank")
  document.getElementById("two").classList.remove("no")
}
let cor=document.querySelectorAll(".cor")
document.getElementById("two").onclick = function(e){
  for (let i = 0; i < cor.length; i++) {
    if(!cor[i].checked){
      return
    }
  }
  window.location.href="../finale/index.html"
}