let notapass = 0
let input = 0

function loadfnc(){
notapass = Math.floor(Math.random()*1000000);
}

function submit() {
  input = document.getElementById("inputpass").value
  if(input == notapass || input == "gigachad"){
    window.location.href = "JS creations/secret/gallery.html"
  } else {
    document.getElementById("alerttext").style.color = "red"
    setTimeout(function(){document.getElementById("alerttext").style.color = "#2f3136"}, 1200)
  }
}
