document.querySelectorAll(".ColliderScName").forEach((collider) => collider.addEventListener("mousemove", function(e) {
  rotateEffect(e, collider.children[0], 30)
}))
document.querySelectorAll(".ColliderScName").forEach((collider) => collider.addEventListener("mouseleave", function() {
  collider.children[0].style.transform = `rotate3d(0, 0, 0, 0deg)`
}))
document.querySelectorAll(".ColliderJob").forEach((collider) => collider.addEventListener("mousemove", function(e) {
  rotateEffect(e, collider.children[0], 30)
}))
document.querySelectorAll(".ColliderJob").forEach((collider) => collider.addEventListener("mouseleave", function() {
  collider.children[0].style.transform = `rotate3d(0, 0, 0, 0deg)`
}))

function rotateEffect(e, subject, invIntensity) {
  var subjectRect = subject.getBoundingClientRect()
  centerX = (subjectRect.left + subjectRect.right) / 2
  centerY = (subjectRect.top + subjectRect.bottom) / 2
  xRatio = (e.clientX - subjectRect.left) / (subjectRect.right - subjectRect.left)
  xRatio = xRatio * 2 - 1
  yRatio = (e.clientY - subjectRect.top) / (subjectRect.bottom - subjectRect.top)
  yRatio = yRatio * 2 - 1
  rotRatio = (Math.abs(xRatio) + Math.abs(yRatio)) / 2
  subject.style.transform = `rotate3d(${-yRatio}, ${xRatio}, 0, ${Math.sqrt(((centerX - e.clientX)**2) + ((centerY - e.clientY)**2))/invIntensity}deg)`
}
