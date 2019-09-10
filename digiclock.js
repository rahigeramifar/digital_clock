function go()
	{
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var seconds = date.getSeconds();
		var ampm = "AM";

		if ( hour > 12)
			{
				hour = hour - 12;
				ampm = "PM";
			}
		if (hour == 0)
			{
			hour = 12;
			}
		if (hour < 10)
			{
			hour = "0" + hour;
			}
		if (minute < 10)
			{
			minute = "0" + hour;
			}
		if (seconds < 10)
			{
			seconds = "0" + seconds;
			}

document.body.innerHTML= "<h1> The current time is "+ hour +":"+ minute +":" + seconds +"</h1>"
//document.body.innerHTML= "<h1> The date today is  "+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() +"</h1>"
}
