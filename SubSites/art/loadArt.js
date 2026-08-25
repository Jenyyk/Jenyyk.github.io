loadAllArt();

async function loadAllArt() {
  await loadArt("xenia.txt", "Xenia, the Linux fox");
  await loadArt("dio.txt", "Dio Brando");
  await loadArt("v1.txt", "V1");
  await loadArt("diego.txt", "Diego Brando");
  await loadArt("johnny.txt", "Johnny Joestar");
  await loadArt("diego2.txt", "Diego Brando");
}

const ASCII_TARGET = document.querySelector("content");
async function loadArt(file, title) {
  const resp = await fetch("./files/" + file);
  const data = await resp.text();
  const maxLineLength = getArtLength(data);
  // console.log(maxLineLength);
  const titleElement = document.createElement("h2");
  titleElement.innerHTML = title;

  const artElement = document.createElement("pre");
  artElement.setAttribute("class", "ascii")
  artElement.style.fontSize = `${100 / maxLineLength / 0.6}cqw`;
  artElement.innerHTML = color(data);

  ASCII_TARGET.appendChild(titleElement);
  ASCII_TARGET.appendChild(artElement)
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
