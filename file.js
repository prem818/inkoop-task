
var userInput = document.querySelector(".user_input");
var result = document.querySelector(".result");

function operation()
{
	var value = userInput.value;
	
	if(!value)
	{
		alert("Enter some value please ..");
	}
	else{
		// convert value string in to int
		value= +value;
		if(value<0)
		{
			alert("Please Enter Positive Number");
		}
		else{
			if((value%2)==0)
			{
				result.innerHTML = "You Enter Event Number = "+value+" Next Three Numbers are "+(value+2)+", "+(value+4)+", "+(value+6);
			}
			else{
				result.innerHTML = "You Enter Odd Number = "+value+" Next Three Numbers are "+(value+2)+", "+(value+4)+", "+(value+6);
			}
		}
	}	
}

userInput.addEventListener("keyup",function(){
	if(!userInput.value)
	{
		result.innerHTML = "";
	}
})