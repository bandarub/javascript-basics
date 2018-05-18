let arr=[];
function range(a,b,c){ 
    if(c==0)
    {
        while(a<=b){
        arr.push(a);        
        console.log(a);
        a=a+1;
        }        
    }
    else
    {
        if(a<b){
            while(a<=b){
                arr.push(a);        
                console.log(a);
                a=a+(c);
                }        
        }
        else if(a>b){
            while(a>=b){
                arr.push(a);        
                console.log(a);
                a=a+(c);
                } 
            }       
    }     
   
    return arr;
}

let nums=range(1,10,0);
//console.log(nums);
function sum(nums){
    let total=0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    return total;
}
console.log(sum(nums));