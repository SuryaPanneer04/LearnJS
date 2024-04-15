//redeclare in var
var name="surya";
var name="jack";
console.log(name);//not display in console

var name="surya";
console.log(name);
var name="jack";
console.log(name);

//only one let variable declare in this outer function 

        function letscope(){
           let x=12;
            if(true){
                let x=11;
                console.log(x);
                console.log(x);
            }
            console.log(x);//this console outer value are print 
        }   
        letscope();

        function nestloop(){
            if(true){
                let x=10; 
               console.log(x);//let is a block of code access in block.can't access in outer block 
               if(true){
                var y=20; // var is the global variable access in any block
                console.log(y);
                var y=21;
                console.log(y);
               }
            }
            console.log(y);//display the y value 
            
        }
        nestloop();