
var time=parseInt(prompt("Enter the hours"));
let hour=new Date();
hour.setHours(time);
var b=hour.getHours(time);
console.log(b);



if(b<12)
	{
		document.write("Morning");
		document.write("<br>");
	}
	else if(12<=b && 17>b)
	{
		document.write("Afternoon");
		document.write("<br>");
	}
	else if(b>=17 && 20>b)
	{
		document.write("Evening");
		document.write("<br>");
	}
	else
	{
		document.write("Night");
		document.write("<br>");
	}
	
