// class Myclass{
//     constructor(){
//         this.a=10;
//         this.b=20;
//         this.c=this.a+this.b;
//         console.log(this.c);
//             }
//         }
//             let obj1=new Myclass();
//             console.log(obj1.c);
// }

let a=[10,20,30,40,50]
let sum=a.reduce((sum,i)=>{
    return sum*i;
})
console.log(sum);