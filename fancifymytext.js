function biggerBtn() {
  document.getElementById("inputText-1").style.fontSize = "24pt";
}

function radioChecker() {
  if (document.getElementById("fancyShmancy").checked) {
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration = "underline";
  }
  if (document.getElementById("boringBetty").checked) {
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black";
    document.getElementById("inputText-1").style.textDecoration = "none";
  }
}

function mooBtn() {
  const temp = document.getElementById("inputText-1").value;
  const upper = temp.toUpperCase();
  const sentences = upper.split(".");
  for (var i = 0; i < sentences.length - 1; i++) {
    let sentence = sentences[i].trim();
    sentence += "-Moo";
    sentences[i] = sentence;
  }
  document.getElementById("inputText-1").value = sentences.join("");
}
