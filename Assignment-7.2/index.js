var num = 5;
// multiple of 5 using for loop
console.log("Using for loop");
for (var i=1; i<=10; i++) {
    prod = num * i;
    console.log(`${num} X ${i} = ${prod}`);
}

// multiple of 5 using while loop
console.log("Using while loop");  
var j = 1
while (j <= 10) {
    prod = num * j;
    console.log(`${num} X ${j} = ${prod}`);
    j++;
}