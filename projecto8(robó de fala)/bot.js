const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";
utterance.rate = 2;
utterance.pitch = 1;
function speak() {
  speechSynthesis.speak(utterance);
}
function stop() {
  speechSynthesis.cancel();
}
function setText(event) {
  utterance.text = event.target.innerText;
}
document.addEventListener("keydown", handleKeydown);
function handleKeydown(event) {
  const keyPressed = event.key;
  if (keyPressed == "Enter") {
    console.log("speaking...");
    speak();
  }
}
