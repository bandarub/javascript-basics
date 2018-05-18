let arr=[10,20,30];
function arrayToList(arr1){
  var list = null;
  for(var i=(arr1.length-1);i>=0;i--)
  {
    list = {value:arr1[i], rest:list}

  }
  return list;
}
let list1=arrayToList(arr);

function listToArray(list1)
{
  var arr2=[];
  for (var i=list1;i; i = i.rest)
  {
   arr2.push(i.value);
  
  }
  return arr2;
}
function prepend(element,list2){
  var list = list2;
  list={value:element, rest:list};
  return list;
}
prepend(40,null);
function nth(list1,index){
if (!list1)
  return undefined;
else if (index == 0)
  return list1.value;
else
  return nth(list1.rest,index - 1);
}
  