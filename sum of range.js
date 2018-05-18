var arr=[];
function range(a,b,c){ 
    if(c==0)
    {
        while(a<=b)
        {
            arr.push(a);        
            console.log(a);
            a=a+1;
        }        
    }
    else
    {
        while(a<=b)
        {
            arr.push(a);        
            console.log(a);
            a=a+(c);
        } 
    }     
   
    return arr;
}

var nums=range(1,10,2);
console.log(nums);
function sum(nums){
    var total=0;
    for(var i=0;i<nums.length;i++)
    {
        total += nums[i];
    }
    return total;
}
console.log(sum(nums));



