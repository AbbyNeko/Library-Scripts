/************************************************************************
 Function adds minutes to a Date object and returns the new Date Object
*************************************************************************/

	function addMinutes(date, minutes) {
		try {

			//time variable contains date in milliseconds
			var timeInMs = date.getTime();

			// 1 minutes = 60,000 ms
			var minToMs = parseFloat(minutes) * 60000;

			//returns new Date object with added on minutes
	    return new Date(parseFloat(timeInMs) + minToMs);

		} catch(err) {
			console.log('Add Minutes Function Error: '+e.message);
		}


	}
