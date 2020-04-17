
//1
const area = function multiply(val1, val2) {
    return val1 * val2;
};

console.log(area(10,20));
//2

const crazySum = function sum(a, b) {
    if(a===b) {
        return 3 * (a + b);
    };
};
console.log(crazySum(4, 4));

//3
const abs =(a)=>{
    if(a<19) {
        return 19-a;
    }
    
        return 3*(a-19);
};
 console.log(abs(20));

 //4

 const boundary = (N)=> {
     if((N<=100 && N>=20)||(N==400)) {
         return true;
     }
     return false;
 };
  console.log(boundary(400));



  let str=' school';
  const strivify=(s)=>{
    str=str.replace(/^/, s);
    if(str.startsWith("Strive")) {
      return str.slice("Strive".length);
    }
      return str;
  };
  console.log(strivify("Strive"));
 
  const check3and7 =(num)=> {
      if(!num%3==0 || !num%7==0) {
          return false;
      }
      return true;
  };
   console.log(check3and7(6));
    
   const reverseString = (str)=> {
        let temp = str.split("");
        let rev = temp.reverse();
        return rev.join("");
   };
   console.log(reverseString("Tetiana"));

   const capitalize =(str)=> {
       return str.replace(/\b\w/g, l => l.toUpperCase());
   };
console.log(capitalize("strive school"))

const cutString =(str)=> {
  return  str.slice(1, -1);
};
console.log(cutString("strive"))

const random =(n)=> {
    let arr=[];
    do {
      arr.push( Math.floor(Math.random() * 11));
    } while(arr.length<n);

    return arr;
};
console.log(random(5));