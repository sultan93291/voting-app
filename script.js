/*
Project : voting rights
Date : 10/01/2024
auhtor : sultan
copyright : abibdipto@gmail.com
*/

function voting() {
  let parent = document.querySelector("#parent");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let input = document.querySelector("#input");
  let name;
  name = window.prompt("Enter your name:");

  if (input.value >= 18) {
    if (input.value >= 80 && input.value <= 99) {
      img.src = "./images/meow.jpg";
      h3.innerHTML = ` ${name} Your time is almost finish  `;
      parent.appendChild(h3);
      parent.appendChild(img);
    } else if (input.value >= 100) {
      img.src = "./images/crying.jpg";
      h3.innerHTML = ` ${name} caca bohud vote dichen ekhon allah allah koren  `;
      parent.appendChild(h3);
      parent.appendChild(img);
    } else {
      img.src = "./images/congrats.avif";
      h3.innerHTML = `congartulations ${name} you can vote`;
      parent.appendChild(h3);
      parent.appendChild(img);
    }
  } else if (input.value == 17) {
    img.src = "./images/funny.jpg";
    h3.innerText = `sorry  ${name}  wait 1 year only 🙂😷 `;
    parent.appendChild(h3);
    parent.appendChild(img);
  } else if (input.value != 17 && input.value < 18) {
    img.src = "./images/sorry.webp";
    h3.innerText = `sorry  ${name}  you've to wait unitl  18`;
    parent.appendChild(h3);
    parent.appendChild(img);

    if (input.value <= 9) {
      img.src = "./images/no.webp";
      h3.innerText = ` ${name} beta tum se na ho payega  `;
      parent.appendChild(h3);
      parent.appendChild(img);
    }
  }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  voting();
});

function reload() {
  location.reload();
}
