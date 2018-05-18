function countBs(strg){
    let count=0;

    for (let i=0; i<=strg.length-1;i++){
        if(strg.toUpperCase()[i]=="B"){
            count++;
        }
    }
return count;
}

function countChars(strg1,char){
    let count=0;
    for (let j=0; j<=strg1.length-1;j++){
        if(strg1[j]==char){
            count++;
        }
    }
return count;
}

