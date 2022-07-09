let gBtn = document.getElementById("g-btn");
// console.log(gBtn);
let boxs = document.querySelectorAll(".ps");
let pslimit = window.prompt("enter pw lenth");

function genrate(passwordEle) {
  const stringArray = [];

  for (let i = 48; i < 123; i++) {
    stringArray.push(String.fromCharCode(i));
  }

  let passwordString = "";

  // here code for genrate pw and show in column 1
  for (let i = 0; i <= pslimit; i++) {
    randomIndex = Math.floor(Math.random() * stringArray.length);

    let ch = stringArray[randomIndex];
    passwordString += ch;
  }
  // console.log(passwordString);
  passwordEle.textContent = passwordString;
}

function genratePassword() {
  for (let box of boxs) {
    genrate(box);
  }
}
genratePassword();
