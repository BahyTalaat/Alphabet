var b=document.getElementById("b1");
var s=0;

var div=document.getElementById("div");

function interact(e_name,type,target,time)
{
	this.type=type;
	this.target=target;
	this.time=time;
	this.e_name=e_name;
	this.add=function()
	{
	var old_Event=localStorage.getItem(e_name);
	if(old_Event==null)
	{	
      localStorage.setItem(e_name,this.type+","+this.target+","+this.time);
    }
	else
	    localStorage.setItem(e_name , old_Event+"&&"+ this.type+","+this.target+","+this.time);
	}
}


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
		
	if(div.innerHTML==null)
	 {	
	for(var i=1;i<=n;i++)
	{
		var newbutton=document.createElement("input");
		newbutton.setAttribute("type","button");
		newbutton.setAttribute("value",alphbet[getrandnum()]);
		newbutton.setAttribute("class","newchars");
		newbutton.style.margin="5px";
		
		div.appendChild(newbutton);
		
		
		if(n==i)
		{
			//s++;
			 // var l=new interact("event "+s+ " gererate",e.type,e.target.value,new Date());
	                  // l.add();
			
			 var l=new interact("event gererate",e.type,e.target.value,new Date());
	                l.add();
		 
	       }
	
		

	}
	 }
	else
	 {
	 div.innerHTML=null;
	  for(var i=1;i<=n;i++)
	     {
		var newbutton=document.createElement("input");
		newbutton.setAttribute("type","button");
		newbutton.setAttribute("value",alphbet[getrandnum()]);
		newbutton.setAttribute("class","newchars");
		newbutton.style.margin="5px";
		
		div.appendChild(newbutton);
		
		if(n==i)
		 {
			// s++;
			 // var l=new interact("event "+s+ " gererate",e.type,e.target.value,new Date());
	                  // l.add();
			
			 var l=new interact("event gererate",e.type,e.target.value,new Date());
	                l.add();
		 
	         }
	
		

	
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
		div.appendChild(newpic);
		
		var l=new interact("event letter",e.type,e.target.value,new Date());
	        l.add();
		
		
		
		
	});
	}
	
	
	
		
	}else
		alert("you should not enter more than 26 characters");
		
		
});
window.addEventListener("load",function(e)
{
	var l=new interact("event for load window",e.type,e.target,new Date());
	l.add();
	
	
	
});

window.addEventListener("unload",function(e)
{
	var l=new interact("event for unload window",e.type,e.target,new Date());
	   l.add();


});


setInterval(function(){

//var events=[];
// for(var i=0;i<localStorage.length;i++)
// {
	// events[i]=localStorage.getItem(localStorage.key(i));
// }

var events=[];
 var n=0;
 for(var i=0;i<localStorage.length;i++)
 {
	 if(localStorage.key(i)=="event for load window" ||localStorage.key(i)=="event for unload window"||
	 localStorage.key(i)=="event letter"||localStorage.key(i)=="event gererate")
	 {
		 events[n]=localStorage.getItem(localStorage.key(i));
		 n++;
	 }
	 
	 
 }
$.ajax(
{
	type:"POST",
	url:"myphp.php",
	data:{"objects":JSON.stringify(events)},
	success:function(response)
	{
		console.log(response);
	},
	error:function(one,two,three)
	{
		console.log(one);
		console.log(two);
		console.log(three);
	}
	
	
	
});
localStorage.clear();

}
,10000);

/////////////////
	
	var but=document.getElementById("show");
	but.addEventListener("click",function()
	
	{
	$.ajax(
{
	type:"GET",
	url:"myphp.php",
	data:{"objects":""},
	success:function(response)
	{
		if(response)
		{
			var events=JSON.parse(response);
			//console.log(response);
			var tab=document.getElementById("tabl");
			tab.style.border='1px solid red';
			for(var i=0;i<events.length;i++)
			{
				var tr=document.createElement("tr");
				var td1=document.createElement("td");
				var td2=document.createElement("td");
				var td3=document.createElement("td");
				td1.style.border='1px solid red';
				td2.style.border='1px solid red';
				td3.style.border='1px solid red';

				tr.style.color='blue';
				td1.append(events[i].event_type);
				td2.append(events[i].event_target);
				td3.append(events[i].event_time);
				tr.append(td1,td2,td3);
				tab.append(tr);
			//tab.append(events[i].event_type+events[i].event_target+events[i].event_time);
			}
			
			
		}
		
	},
	error:function(one,two,three)
	{
		console.log(one);
		console.log(two);
		console.log(three);
	}
	
	
	
});

	
		
	});



	
	
	
	
	
