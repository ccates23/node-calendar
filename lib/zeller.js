module.export = zeller;

// var export_obj = {};

	  var zeller = function (month, day, year) {
		if (month === 1 || month === 2) {year--; month += 12;}
		var dm = day;
		var m = month;
		var y = year % 100;
		var j = Math.floor(year/100);
		return (q + Math.floor((13*(m + 1))/5) + y + Math.floor(y/4) + Math.floor(j/4) + 5*j) % 7

    };
