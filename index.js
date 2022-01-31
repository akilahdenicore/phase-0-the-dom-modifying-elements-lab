var main = document.getElementById("main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Akilah is the champion";
document.body.append(newHeader);