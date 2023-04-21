class Myclass{
    constructor(){
        this.a=10;
        this.b=20;
        this.c=this.a+this.b;
        console.log(this.c);
            }
        }
            let obj1=new Myclass();
            console.log(obj1.c);
