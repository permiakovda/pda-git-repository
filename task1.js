var a = process.argv[2]
var b = new String();
var c = new String();

for (i=0; i<=a.length-2; i++){
  if (a.charAt(i) != "\u0020")
  b = b+a.charAt(i);
}
for (i=b.length; i>=0; i--)
{
  c = c + b.charAt(i);
}

b = b.toUpperCase();
c = c.toUpperCase();

if (b.localeCompare(c) === 0)
{
  console.log("YES")
}
else {
  console.log("NO")
}
