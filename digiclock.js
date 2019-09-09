function digitalClock()
	{
		var time = new Date();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var seconds = time.getSeconds();
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

		//document.body.innerHTML= "<h1> The date today is  "+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() +"</h1>"
	}
