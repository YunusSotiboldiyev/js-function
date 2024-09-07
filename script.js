//1-vazifa

function hello(params) {
     console.log(`Salom, ${params}`);
}
hello("Astrum");

//2-vazifa

function helloName(params) {
     console.log(`Salom, ${params}`);
}
let name = prompt("Ism kiriting");
helloName(name);

//3-vazifa

function number(num1, num2) {
     if (num1>num2) {
          console.log(`Katta son, ${num1}`);
     }
     if (num1<num2) {
          console.log(`Katta son, ${num2}`);
     }
     if (num1===num2){
          console.log("Ikkalasi ham teng");
     }
}
let number1 = prompt("1-sonni kiriting");
let number2 = prompt("2-sonni kiriting");
number(number1, number2);

//4-vazifa

function faktorial(n) {
     if (n === 0 || n === 1) {
         return 1;
     }
     return n * faktorial(n - 1);
 }
 let ask = +prompt("Faktorial uchun son kiriting");
 console.log("Faktorial", faktorial(ask));

 //5-vazifa

function askTwo(n){
console.log("Kvadrat",n*n);

}
let askNum = +prompt("Kvadrat uchun son kiriting");
askTwo(askNum);

//6-vazifa

function askThree(n){
     console.log("Kub",n*n*n);
     }
     let askNum2 = +prompt("Kub uchun son kiriting");
     askThree(askNum2);

//7-vazifa

function engKattaSonniQaytar(sonlar) {
     return Math.max(...sonlar);  
 }
 
 let sonlar = [2, 4, 5, 30, 54, 56, 99, 100, 0, 3, 6];
 console.log("Eng katta son:",engKattaSonniQaytar(sonlar)); 

 //8-vazifa

function matnlar(matn){
     let engUzuni = matn[0];
     for (let i = 1; i < matn.length; i++) {
         if (matn[i].length > engUzuni.length) {
             engUzuni = matn[i];  
         }
     }
     return engUzuni; 
 }

let matnlar1 = ["Jasur", "Muhammad Yusuf", "Abdulla", "Mirzoavaz", "Beksulton"];
console.log("Eng uzuni:",matnlar(matnlar1));

//9-vazifa

function engKichikSonniQaytar(sonlar) {
     return Math.min(...sonlar);  
 }
 
 let sonlar2 = [2, 4, 5, 30, 54, 56, 99, 100, 1, 3, 6];
 console.log("Eng kichik son:",engKichikSonniQaytar(sonlar2)); 

//10-vazifa

function matnlar4(matn){
     let engKichigi = matn[0];
     for (let i = 1; i > matn.length; i++) {
         if (matn[i].length < engKichigi.length) {
             engKichigi = matn[i];  
         }
     }
     return engKichigi; 
 }

let matnlar2 = ["Jasur", "Muhammad Yusufbek", "Abdulla", "Mirzoavaz", "Beksulton"];
console.log("Eng kichigi:",matnlar4(matnlar2));