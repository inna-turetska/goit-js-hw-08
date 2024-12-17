function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const box = document.querySelector("#boxes");
 const btnCreate = document.querySelector(".btnCreate");
 const btnDestroy = document.querySelector(".btnDestroy");
 const inpNumber = document.querySelector(".inpNumber");


  const createSquares = () => {
  const numSquares = parseInt(inpNumber.value);
    
    if (numSquares > 0 && numSquares <= 100) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      const size = 30 + i * 10; 
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      square.style.backgroundColor = getRandomHexColor(); 
      fragment.appendChild(square);
    }
    
    box.innerHTML = "";
    box.appendChild(fragment);
  } 
};

  const destroySquares = () => {
   box.innerHTML = ""; 
   inpNumber.value = ""; 
};

btnCreate.addEventListener("click", createSquares);
btnDestroy.addEventListener("click", destroySquares);