let number = document.getElementById("number");
let counter = 0;
let final=Math.random()
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 30);
