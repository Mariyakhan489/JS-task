// Loop Task
// i-10 numbers
for(let i=1; i<=10; i++){
    console.log(i);   
}
// Even numbers 1-20
for( let i=2; i <= 20; i += 2){
    console.log(i);   
}
// Table of 5
for(let i=1; i <= 10; i++){
    console.log(`5 * ${i} = ${i * 5}`);   
}
// Reverse Order 10-0
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While Loop
// i-10 numbers
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}
// Odd numbers 1-20
let odd = 1;
while(odd <= 20){
    console.log(odd);
    odd += 2  
}
// Reverse Order 10-0
let rev = 10;
while (rev >= 0) {
    console.log(rev);
    rev--
}
// Password Checker

// If the user types a wrong password, the loop goes again and shows the prompt again.
// This is why prompt must be inside the while loop — so the user can keep trying until correct.

let password;
while (password !== "admin123") { 
    password = prompt("Enter your password:"); 
}
alert("Welcome! Password is correct."); 
