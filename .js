class Myclass{
    constructor()
    {
        this.a=10;
        this.b=20;

    }
    add()
    {
        return this.a+this.b;
        console.log(this.a+this.b);
    }
}
let obj1=new Myclass();
let obj2=new Myclass();
console.log(obj1.a,obj1.b)