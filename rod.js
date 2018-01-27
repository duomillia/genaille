var $ready = 4;
var $ok = 200;

function addRods($single_digit,$digits,$digit_count)
{

var req = new XMLHttpRequest();

req.onreadystatechange = function () {
	if (this.readyState == $ready && this.status == $ok) {
		//alert(this.responseText);	
		 document.getElementById('rods').innerHTML +=(this.responseText);
		};
};
$digits = document.getElementById('digits_box').innerHTML;
$single = document.getElementById('single_digit_box').innerHTML;
//alert ($digits);
req.open("GET","rod.php?n=" + $digits + "&m=" + $single);
req.send();
	
}



