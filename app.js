let random = Math.floor(Math.random() * 100 + 1);
let input = document.querySelector(".enter input");
let state = document.getElementById("statement");
let button = document.querySelector(".enter button");

let hak = 5;

button.addEventListener("click", () => {
  let p = document.createElement("p");
  state.appendChild(p);
  console.log(random);
  if (hak > 0) {
    if (random == Number(input.value)) {
      p.innerHTML = "WOAW! YOU ARE İNCREDİBLE";
      input.value = "";
      hak--;
      document.querySelector(".right p").innerHTML = `You have: ${hak} rights`;
    } else if (random > Number(input.value)) {
      p.innerHTML = "You should increase your number";
      input.value = "";
      hak--;
      document.querySelector(".right p").innerHTML = `You have: ${hak} rights`;
    } else {
      p.innerHTML = "You should decrease your number";
      input.value = "";
      hak--;
      document.querySelector(".right p").innerHTML = `You have: ${hak} rights`;
    }
  } else {
    confirm("Do you want to play again?");
  }
});
