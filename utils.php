<?php

/* 
Validates the get paramater.
Valid pages are play, genaille, about, links


*/
function get_page($name)
{
$valid_pages = array("play","genaille","about","links");


if (in_array($_GET['page'], $valid_pages))
	{
		return $_GET['page'].'.php';
	}
	return "play.php";
}

?>
