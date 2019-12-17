<?php
if(isset($_POST["objects"]))
{
  $event=json_decode($_POST["objects"],true);
	 $con=mysqli_connect("localhost","root","","events_store");
	 if(!$con)
		{
			die($con->connect_error);
		}
		
	
	for($i=0;$i<count($event);$i++)
	{
		
		$arr1=[];
		
		$arr1=explode('&&',$event[$i]);
		for($j=0;$j<count($arr1);$j++)
		{
			$arr2=[];
			$arr2=explode(',',$arr1[$j]);
			$q=mysqli_query($con,"Insert into event_desc values('$arr2[0]','$arr2[1]','$arr2[2]')");
			if(!$q)
			{
				echo "didnt inserted";
			}
			else{echo "inserted done";}
		}
		
		
		
	}
	
	// if($con->affected_rows>0)
	// {
		// echo "inserted successfully";
	// }
	// else
	// {
		// echo "sorry";
	// }

}

if(isset($_GET["objects"]))
{
	 $con=mysqli_connect("localhost","root","","events_store");
	 if(!$con)
		{
			die($con->connect_error);
		}
	$sql="select * from event_desc";
	
	$result=mysqli_query($con,$sql);
		if($result)
		{
			$rows=array();
			if($result->num_rows>0)
			{
				while($row=$result->fetch_assoc())
				{
					array_push($rows,$row);
				}
				echo json_encode($rows);
			}
		}
		else
		{
			echo "no data retrieved";
			
		}

}



?>