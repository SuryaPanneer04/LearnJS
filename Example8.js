// Assignment operators

function Assignment(){
   let a=10,b=20;
   a+=b;
   console.log(a);
   a-=b;
   console.log(a);
   a*=b;
   console.log(a);
   a/=b;
   console.log(a);
   a%=b;
   console.log(a);
   a**=b;
   console.log(a);
   a=b;
   console.log(a);
}
Assignment();

//Shift Assignment operators

function shiftAssign(){
    let a=100;
    a>>=5;
    console.log(a);
    a<<=1;
    console.log(a);
    a>>>=100;
    console.log(a);
}
shiftAssign();

function bitwise(){
    let a=100;
    a&=5;
    console.log(a);
    a|=5;
    console.log(a);
    a^=5;
    console.log(a);
    a&&=100;
    console.log(a);

}
bitwise();

