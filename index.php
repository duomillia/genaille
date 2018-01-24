<html>
<!--
Author	: Ian Wheeler (ian at iawheeler dot ca)
Date	: 22 JAN 2018

ianwheeler dot ca

The Genaille-Lucas rule is a type of simple mechanical 
ruler calculator for multiplying one digit numbers by
multi digit numbers. It was developed very shortly before
the rise of mechanical and later digital calculating devices
which cut off its rise rather quicky.

-->



	<head>
		<title>
		Genaille-Lucas Ruler
		</title>

	<link rel="stylesheet" type="text/css" href="style.css">

</head>

<!--
title.php contains the logo images and the name
with email.

menu.php contains the links to the various subpages
which are
	'play with the ruler'
	'about the ruler'
	'about this app'
	'links'

-->

		<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);

			include 'title.php';
			include 'menu.php';
			
			include 'utils.php';
			$page = get_page($_GET['page']);
			include $page;
		?>


	

</html>
