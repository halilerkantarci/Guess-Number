let random = Math.floor(Math.random() * 100 + 1);
let input = document.querySelector(".enter input");
let state = document.getElementById("statement");
let button = document.querySelector(".enter button");
let cong = document.getElementById("cong");
let hak = 5;

let p = document.createElement("p");
state.appendChild(p);
p.classList.add("cp");
button.addEventListener("click", () => {
  console.log(random);
  if (hak > 0) {
    if (input.value > 0 && input.value < 100) {
      if (random == Number(input.value)) {
        p.innerHTML = "WOAW! YOU ARE İNCREDİBLE";
        cong.innerHTML =
          "<img src='./congrats-confetti-colored-text-76321031.jpg' style='width:320px; height:20vh' alt=''>";
        button.textContent = "RESTART";

        button.addEventListener("click", () => {
          location.reload();
        });
        document.querySelector(
          ".right p"
        ).innerHTML = `You have: ${hak} rights`;
        applause.play();
      } else if (random > Number(input.value)) {
        p.innerHTML =
          "You should increase your number  " +
          "<i class='fa-solid fa-arrow-up'></i>";
        input.value = "";
        hak--;
        document.querySelector(
          ".right p"
        ).innerHTML = `You have: ${hak} rights`;
        up.play();
      } else {
        p.innerHTML =
          "You should decrease your number  " +
          "<i class='fa-solid fa-down-long'></i>";
        input.value = "";
        hak--;
        document.querySelector(
          ".right p"
        ).innerHTML = `You have: ${hak} rights`;
        dow.play();
      }
    } else {
      alert("Enter a convenient number");
    }
  } else {
    button.textContent = "RESTART";
    button.addEventListener("click", () => {
      location.reload();
    });
  }
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    button.click();
  }
});

input.focus();
