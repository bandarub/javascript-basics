var rows=prompt("enter number of rows"); 
var char= " ";
for (var y = 0; y < rows; y++) 
{
  for (var x = 0; x < rows; x++) 
  {
    if ((x + y) % 2 == 0)
    char += " ";
    else
    char += "#";
  }
  char += "\n";
}
console.log(char);