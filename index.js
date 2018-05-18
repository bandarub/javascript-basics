// //Looping a triangle************************************************
// const rows=prompt("enter no.of rows");
// for(let i=1; i<=rows; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         document.write("#");        
//     }
//      document.write('<br />');
// }

//FizzBuzz************************************************
// for(var i=1;i<=100;i++)
// {
//     if (i%5==0 && i%3==0)
// {
//     console.log("fizzbuzz");
// }
// else if(i%5==0 && i%3!=0)
// {
//     console.log("buzz");
// }
// else if(i%3==0)
// {
//     console.log("fizz");
// }

// else{
//     console.log(i);
// }

// }

// chess board************************************************
// var rows=prompt("enter number of rows"); 
// var char= " ";
// for (var y = 0; y < rows; y++) 
// {
//   for (var x = 0; x < rows; x++) 
//   {
//     if ((x + y) % 2 == 0)
//     char += " ";
//     else
//     char += "#";
//   }
//   char += "\n";
// }
// console.log(char);


//minimum************************************************
// function min(a,b){
//     return a<b? a:b;
// }

//recursion************************************************
// function isEven(N){
//     if(N==0)
//     {
//         return true;
//     }
//     else if(N==1){
//         return false;
//     }
//     else{
//     return isEven(N-2);
//     } 
// }
// let num=prompt("enter number");
// console.log(isEven(num));

//Bean counting
// function countBs(strg){
//     var count=0;

//     for (var i=0; i<=strg.length-1;i++){
//         if(strg[i]=="B"){
//             count=count+1;
//         }
//     }
// return count;
// }

// console.log(countBs("BBC"));

// function countChars(strg1,char){
//     var count=0;
//     for (var i=0; i<=strg1.length-1;i++){
//         if(strg1[i]==char){
//             count=count+1;
//         }
//     }
// return count;
// }
// console.log(countChars("kakkerlakkk","k"));

//sum of range************************************************
// var arr=[];
// function range(a,b,c){ 
//     if(c==0)
//     {
//         while(a<=b){
//         arr.push(a);        
//         console.log(a);
//         a=a+1;
//         }        
//     }
//     else
//     {
//         if(a<b){
//             while(a<=b){
//                 arr.push(a);        
//                 console.log(a);
//                 a=a+(c);
//                 }        
//         }
//         else if(a>b){
//             while(a>=b){
//                 arr.push(a);        
//                 console.log(a);
//                 a=a+(c);
//                 } 
//             }       
//     }     
   
//     return arr;
// }

// nums=range(1,10,2);
// //console.log(nums);
// function sum(nums){
//     var total=0;
//     for(var i=0;i<nums.length;i++){
//         total += nums[i];
//     }
//     return total;
// }
// console.log(sum(nums));


//reversing array*******************************************************

// function reverseArray(arr){
//     var counter = arr.length - 1;
//     let arr1=[];
//     for (var i = 0; i < arr.length; i++)
//    {  
//       var temp = arr[i];
//       arr1[i] = arr[counter];
//       counter--;  
//     }  
//     return arr1;
// }
// var arr=["A", "B", "C"];
// console.log(reverseArray(arr));
// function reverseArrayInPlace(arr1)
// {
// for(let  j=0 ,k=arr1.length-1; j<k; j++, k--)
// {
//   let tempArray=arr1[k];
//   arr1[j]=arr1[k];
//   arr1[k]=tempArray;
// }
// return arr1;

// }


//List********************************************************************'
// let arr=[10,20,30];
// function arrayToList(arr1){
//   var list = null;
//   for(var i=(arr1.length-1);i>=0;i--)
//   {
//     list = {value:arr1[i], rest:list}

//   }
//   return list;
// }
// let list1=arrayToList(arr);

// function listToArray(list1)
// {
//   var arr2=[];
//   for (var i=list1;i; i = i.rest)
//   {
//    arr2.push(i.value);
  
//   }
//   return arr2;
// }
// function prepend(element,list2){
//   var list = list2;
//   list={value:element, rest:list};
//   return list;
// }
// prepend(40,null);

// function nth(list1,index){
// if (!list1)
//   return undefined;
// else if (index == 0)
//   return list1.value;
// else
//   return nth(list1.rest, index - 1);
// }


// Deep comparison*****************************************************
// let arr=[10,20,30];
// function arrayToList(arr1){
//   var list = null;
//   for(var i=(arr1.length-1);i>=0;i--)
//   {
//     list = {value:arr1[i], rest:list}

//   }
//   return list;
// }
// let list1=arrayToList(arr);

// function listToArray(list1)
// {
//   var arr2=[];
//   for (var i=list1;i; i = i.rest)
//   {
//    arr2.push(i.value);
  
//   }
//   return arr2;
// }
// function prepend(element,list2){
//   var list = list2;
//   list={value:element, rest:list};
//   return list;
// }
// prepend(40,null);

// function nth(list1,index){
// if (!list1)
//   return undefined;
// else if (index == 0)
//   return list1.value;
// else
//   return nth(list1.rest, index - 1);
// }
  
  


