var a,b,c;
function valid{
	a=document.getElementById("rate").value;
	b=document.getElementById("cam").value;
	c=document.getElementById("batt").value;
r=/[1-5]{1,}/;
s=/[0,1]{1,}/
t=r.test(a);
u=s.test(b);
v=s.test(c);
if(r==true)
{
	if(s==true)
	{
		if(t==true)
		{
			alert("welcome");
			return true;
		}
	}
}
else{
	alert("Please provide valid feedback");
	return false;
}
}