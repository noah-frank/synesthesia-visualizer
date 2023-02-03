const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/trollface.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter you name.");
  if (!myName) {
    setUserName();
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Hello, ${myName}`;
}



if(!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`;
}



myButton.onclick = () => {
  setUserName();
}