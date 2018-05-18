let obj1 = {here: {is: "an"}, object: 2};
let obj2={here: 1, object: 2}; 
function deepEqual(a,b)
{
    if(a===b) return true;
    else if(typeof(a)!="object" || typeof(b)!="object" || a=="null" || b=="null") return false;
    else
    {
        var akeys = Object.keys(a);
        var bkeys = Object.keys(b);        
        if (akeys.length === bkeys.length)
        {
            for(let key of akeys)
            {
                for(key of bkeys)
                {
                    if(!deepEqual(a[key],b[key]))
                    return false;
                }
            }
            return true;          
        }
    }
}
    
             
        
        
      