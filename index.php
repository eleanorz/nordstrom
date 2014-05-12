<!DOCTYPE html>
<html>
	<head>
		<title>Nordstrom</title>
		<meta charset="UTF-8">
		<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
		<script src="clickLogic.js"></script>
		<link rel="stylesheet" href="style.css">
	</head>


	<body>
		<div id = "top_nav_bar">
			<img src="img/nordstrom-logo.gif" alt="logo">
			<h6><a href="http://about.nordstrom.com/careers/#/about-us/main">| why work for us? |</a></h6>		
		</div>

		<!-- BRAND SELECTOR BAR -->
		<select name="" id="brand_select" onChange="brandPicked(this.value);">		
		</select>

		<!-- STAGING LOCATION FOR IMAGES -->
		<div id = "stage">		
		</div>
	</body>
</html>