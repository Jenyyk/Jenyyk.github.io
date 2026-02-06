loadArt("xenia.txt", document.getElementById("xeniaTarget"))
loadArt("dio.txt", document.getElementById("dioTarget"))
loadArt("diego.txt", document.getElementById("diegoTarget"))
loadArt("johnny.txt", document.getElementById("johnnyTarget"))
loadArt("diego2.txt", document.getElementById("diego2Target"))

function loadArt(file, targetElement) {
  fetch("./files/" + file)
    .then(response => response.text())
    .then(data => {
      let maxLineLength = getArtLength(data);
      console.log(maxLineLength);
      targetElement.style.fontSize = `${100/maxLineLength/0.6}cqw`
      targetElement.innerHTML = color(data);
    });
}

function getArtLength(s) {
  let maxLineLength = 0;
  for (line of s.split("\n")) {
    let rawLength = line.length;
    for (char of line) {
      if (char === 'ń') {
        rawLength -= 7;
      }
    }
    if (rawLength > maxLineLength) {
      maxLineLength = rawLength;
    }
  }
  return maxLineLength;
}

function htmlEscape(s) {
  return s
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;")
    .replaceAll(/"/g, "&quot;")
    .replaceAll(/'/g, "&#039;");
}

function color(s) {
  // Replace patterns like "<char>ńRRGGBB" with a colored span for the char.
  // Operate on the raw input so that escaping is handled correctly for other characters.
  const regex = /(.)ń([0-9A-Fa-f]{6})/g;
  let out = '';
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(s)) !== null) {
    const idx = match.index;
    const ch = match[1];
    const hex = match[2];
    out += htmlEscape(s.substring(lastIndex, idx));
    out += `<span style="color:#${hex};">${htmlEscape(ch)}</span>`;
    lastIndex = idx + match[0].length;
  }
  out += htmlEscape(s.substring(lastIndex));
  return out;
}
