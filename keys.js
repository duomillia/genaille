/*
Defines and inserts a function which
listens for keypresses and inserts
a div which dislays that key
in div 'digits_box'
*/

var $digit_count = 0;
var $digits = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var $single_digit = 0;
document.onkeypress = function(e) {

var $n = e.which-48; // convert from char code to actual digit value.
var $backspace = 8;

// Filters the key press for only 0-9;
if ($n >= 0 && $n <= 10 && $digit_count < 10)
{

	if ($digit_count == 0)
	{
	document.getElementById('digits_box').innerHTML += ($n + "x");
	$single_digit = $n;
	$digit_count++;
	}
	else if ($digit_count < 10)
	{
	document.getElementById('digits_box').innerHTML += ($n + "");
	$digits[$digit_count++]=$n;
	}
	else
	{
	documet.onkeypress == function(e) {};
	addRods($single_digit,$digits,$digit_count);
	runSim();
	}

}

// TODO: backspace
//if ($e.which == $backspace && 

}
