function generateMadLibs() {
const typeOfBird = document.getElementById("typeOfBird").value;
const roommateName = document.getElementById("roommateName").value;
const noun = document.getElementById("noun").value;
const liquid = document.getElementById("liquid").value;
const bodyPart = document.getElementById("bodyPart").value;
const madLibsText = `It was a cold October day. I woke to the smell of ${typeOfBird} roasting in the kitchen. My roommate said, "see if ${roommateName} needs a fresh ${noun}. So I carried a glass of ${liquid} into ${roommateName}'s room.  When I got there, I couldn't believe my ${bodyPart}!`;
document.getElementById("mad-libs").textContent = madLibsText;
}