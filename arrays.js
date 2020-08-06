const arr=[1,2,3,4];
arr.forEach(number =>{
   
    console.log(number);
})

//square
const square= []

arr.forEach(number =>{
   square.push(number*number);
})

console.log(square)

//map
const mapArr = arr.map(number=> number*3 )
console.log(mapArr);

//filter
const filterArr = arr.filter(number =>number>2)
console.log(filterArr);

//reduce
//başlangıç değeri default 0
const sum= arr.reduce((acc,number)=>{
    return acc+number;
})
console.log(sum); //1+2+3+4=10

//acc defaultunu 10 yaptık
const sum2= arr.reduce((acc,number)=>{
    return acc+number;
},10)
console.log(sum2); //11+12+13+14=20