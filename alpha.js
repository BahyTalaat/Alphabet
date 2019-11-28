var b=document.getElementById("b1");
var s=0;

var alphbet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function getrandnum()
{
	return Math.floor(Math.random()*25);
}
var t=document.getElementById("t1");

// event for gererate button

b.addEventListener("click",function(e)
{
	var n= parseInt(t.value);
	if(n<=26)
	{
		
	for(var i=1;i<=n;i++)
	{
		var newbutton=document.createElement("input");
		newbutton.setAttribute("type","button");
		newbutton.setAttribute("value",alphbet[getrandnum()]);
		newbutton.setAttribute("class","newchars");
		newbutton.style.margin="5px";
		
		var pict=document.getElementById("p");
		if(pict!=null)
		{
			pict.before(newbutton);
		}else{document.body.appendChild(newbutton);}
		
		if(n==i)
		{
			s++;
		 localStorage.setItem("event "+s+ " gererate", e.type +","+e.target+","+new Date());
		 
	    }
	
		

	}
		
		
	//event handler for the characters
	
	
	
	
	var list_char=document.getElementsByClassName("newchars");
	
	for(var i=0;i<list_char.length;i++)
	{
	list_char[i].addEventListener("click",function(e)
	{
	
		e.target.style.border="2px solid red";
		
		 var child=document.getElementById("p");
		 if(child !=null)
			child.remove();	
	   
	   var ch=e.target.getAttribute("value");
	   
	   var newpic=document.createElement("img");
		 newpic.setAttribute("src","pic/"+ch+".png");
		 newpic.setAttribute("id","p");
	     newpic.style.display="block";
		document.body.appendChild(newpic);
		
		var old_button=localStorage.getItem("event for letter "+ch);
		if(old_button==null)
		{
		localStorage.setItem("event for letter "+ch, e.type +","+e.target+","+new Date());	
		}
		else
		{
	localStorage.setItem("event for letter "+ch,old_button+"||"+ e.type +","+e.target+","+new Date());	

		}
		
		
	});
	}
	
	
	
		
	}else
		alert("you should not enter more than 26 characters");
		
		
});
window.addEventListener("load",function(e)
{
	var old_event=localStorage.getItem("event for load window");
	if(old_event==null){
	localStorage.setItem("event for load window", e.type+","+e.target+","+new Date());
    }else
	{
	  localStorage.setItem("event for load window", old_event+ "||"+ e.type+","+e.target+","+new Date());
	}
	
	
});

window.addEventListener("unload",function(e)
{
	var old_event=localStorage.getItem("event for unload window");
	if(old_event==null){
	localStorage.setItem("event for unload window", e.type+","+e.target+","+new Date());
    }else
	{
	  localStorage.setItem("event for unload window", old_event+"||"+ e.type+","+e.target+","+new Date());
	}
});
setInterval(function(){
	
	localStorage.clear();
	 s=0;},5000);

	
	
	
	
	
