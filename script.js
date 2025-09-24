document.querySelectorAll(".ColliderScName").forEach((collider) => collider.addEventListener("mousemove", function(e) {
  rotateEffect(e, collider.children[0], 15)
}))
document.querySelectorAll(".ColliderScName").forEach((collider) => collider.addEventListener("mouseleave", function() {
  collider.children[0].style.transform = `rotate3d(0, 0, 0, 0deg)`
}))

function rotateEffect(e, subject, intensity) {
  var subjectRect = subject.getBoundingClientRect()
  centerX = (subjectRect.left + subjectRect.right) / 2
  centerY = (subjectRect.top + subjectRect.bottom) / 2
  xRatio = (e.clientX - subjectRect.left) / (subjectRect.right - subjectRect.left)
  xRatio = xRatio * 2 - 1
  yRatio = (e.clientY - subjectRect.top) / (subjectRect.bottom - subjectRect.top)
  yRatio = yRatio * 2 - 1
  rotRatio = (Math.abs(xRatio) + Math.abs(yRatio)) / 2
  // xDiff = centerX - e.clientX
  // yDiff = centerY - e.clientY
  subject.style.transform = `rotate3d(${-yRatio}, ${xRatio}, 0, ${Math.sqrt(xRatio**2 + yRatio**2)*intensity}deg)`
}
