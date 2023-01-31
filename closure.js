var x=10;
function Nisha(){
    var y=10;
    function innerfun(){
        var z=10;
        var out=x+y+z;
        return out;
    }
   return innerfun; 
}
var result=Nisha();
console.log(result());