const newArr = [];
let sum = 0;
for (let i=0; i<10; i++){
    let randomNumbers=Math.floor(Math.random()* 10);
    newArr.push(randomNumbers);
    sum += randomNumbers;
}
const averageNumbers=sum / 10;
console.log(sum);
console.log(averageNumbers);