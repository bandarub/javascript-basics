function reverseArray(arr){
      var counter = arr.length - 1;
      let arr1=[];
      for (var i = 0; i < arr.length; i++)
     {  
        var temp = arr[i];
        arr1[i] = arr[counter];
        counter--;  
      }  
      return arr1;
  }
  var arr=["A", "B", "C"];
  console.log(reverseArray(arr));
  function reverseArrayInPlace(arr1)
{
  for(let  j=0 ,k=arr1.length-1; j<k; j++, k--)
  {
    let tempArray=arr1[k];
    arr1[j]=arr1[k];
    arr1[k]=tempArray;
  }
  return arr1;

}