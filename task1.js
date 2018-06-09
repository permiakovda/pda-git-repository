var a = process.argv[2]
var b = new String();
var c = new String();
for (i=0; i<=a.length; i++){
  if (a.charAt(i) != "\u0020" && a.charAt(i) != "?" && a.charAt(i) != "!")
  b = b+a.charAt(i);
}
for (i=b.length; i>=0; i--)
{
  c = c + b.charAt(i);
}
if (b.localeCompare(c) === 0)
{
  console.log("YES")
}
else {
  console.log("NO")
}
