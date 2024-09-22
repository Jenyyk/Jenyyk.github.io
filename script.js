discord = document.getElementById("discord")
discord.addEventListener("mouseenter", function() {
  setTimeout(() => { discordReplaceText("userjoke") }, 200 )
})
discord.addEventListener("mouseleave", function() {
  setTimeout(() => { discordReplaceText("Discord") }, 200 )
})

function discordReplaceText(string) {
  text = discord.innerHTML.split(">")
  text[1] = string
  text = text.join(">")
  discord.innerHTML = text
}

landerDecor = document.getElementById("landerDecor")
setInterval(function() {
  newDiv = document.createElement("div")
  newDiv.setAttribute("class","decorOffset")
  landerDecor.appendChild(newDiv)
  setTimeout(function() {document.querySelector(".decorOffset").remove()}, 2000)
}, 500)
