alert ('js runs');

//ex1
/*let arr1=[1,2,3,4,5];
for  (let i=0; i<=arr1.length; i++) {
    console.log(arr1[i]);
} 
*/

//ex2
/*let arr2=[-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
for (let i=0; i<=arr2.length; i++) {
    if (-10<=arr2[i] && arr2[i]<=-3)  
    console.log (arr2[i]);
}
*/

//ex3
/*let result=0;
let arr3=[];
for (let i=23; i<=57; i++) {
    arr3.push(i);
    result +=i;}
console.log(arr3);
console.log(result);

let arr33=[];
let i=23;
while (i<=57) {
    arr33.push(i);
    i++;
}
console.log (arr33);
*/


//ex4
/*let arr4=['10', '20', '30', '50', '235', '3000'];
for (let i=0; i<=arr4.length; i++) {
    if (arr4[i][0]=='1' || arr4[i][0]=='2' || arr4[i][0]=='5') {
    console.log (+arr4[i]);
    }
}
*/


//ex5
/*let arr5=['ПН ', 'ВТ ', 'СР ', 'ЧТ ', 'ПТ ', 'СБ ', 'ВС '];

for (i=0; i<=arr5.length; i++){
    if (i==5 || i==6) {
        document.write (`<b>${arr5[i]}</b> `);
    } else {
        document.write (arr5[i]);
    }
}
*/


//ex6
/*let arr6=['cat', 'dog', 'mouse'];
let pushElem=arr6.push ('cow');
console.log(pushElem);
*/



//ex7 ??????
let arr7= [];
let check=true;
while(check) {
    let num =prompt('Введите любое число');
    if (num === ''){
        check=false;
    } else {
        arr7.push(Number(num));
    }
}
console.log(arr7);
arr7.sort(function (a,b){
    return a-b;});
    console.log(arr7);



//ex8 
/*let arr8=[12, false, 'Текст', 4, 2, -5, 0];
arr8.reverse();
let i=0;
while (i<=arr8.length) {
    console.log(arr8[i]); 
    i++;
}
*/



//ex9
/*let arr9=[5, 9, 21, , , 9, 78, , , , 6];
let sum=0;
for (i=0; i<arr9.length; i++){
    if (arr9[i]===undefined) {
    sum++;   
    } 
    
}
console.log (sum);
*/


//ex10
/*let arr10=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let sum=0;
firstNum=0;
lastNum=0;
for (i=0; i<=arr10.length; i++){
    if (arr10[i]===0) {
        firstNum=i;
        break;
    }
}

for (i=arr10.length; i>0; i--){
    if (arr10[i]===0) {
        lastNum=i;
        break;
    }
}

for (i=firstNum +1; i<lastNum; i++){
    sum +=arr10[i];
}
console.log(sum);
*/