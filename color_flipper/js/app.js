const colors = ["lightgrey", "powderblue", "#5587d4","#8e5ebf","#d4db70","#e86d6d","#ffc04a","PeachPuff","SlateGray","SteelBlue","OldLace"];
// const btn = document.getElementById("btn");
// const color = document.querySelector('.color');

// btn.addEventListener('click',() =>{
//     const random = () =>{
//         return Math.floor(Math.random()* colors.length);
//     };
//     console.log(random);

//     document.body.style.backgroundColor = colors[random];
//     color.textContent = colors[random];
// });
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}