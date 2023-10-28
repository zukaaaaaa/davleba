const hamburger = document.querySelector(".hambrgr");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

console.log("Task N1")
for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
}
console.log("Task N2")

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Task N3")

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(""+ sum)

console.log("Task N4")

let num = 16;
let bum = 1;

for(let i = bum; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}