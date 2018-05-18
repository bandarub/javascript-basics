function isEven(N){
    if(N<0){
        return isEven(-N);
    }
    if(N==0)
    {
        return true;
    }
    if(N==1){
        return false;
    }    
    return isEven(N-2);     
}
let num=prompt("enter number");
console.log(isEven(num));