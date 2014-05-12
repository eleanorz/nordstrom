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

		<script>

		// 	select_logic = "";
		// 	unsorted_brand_array = [];

		// 	for (var current_item_number = catalog.length - 1; current_item_number >= 0; current_item_number--)
		// 	{
		// 		unsorted_brand_array.push(catalog[current_item_number]['brand']);
		// 	};

		// 	//REMOVE DUPLICATE BRANDS FROM THE ARRAY
		// 	reduced_brand_array = jQuery.unique( unsorted_brand_array );

		// 	reduced_brand_array.sort();

		// 	// console.log(reduced_brand_array);

		// 	//ADD IN SELECTION OPTION TO THE SELECTION ARRAY:

		// 	reduced_brand_array.unshift("--Select Brand--")

		// 	for (var current_item_number = 0; current_item_number < reduced_brand_array.length; current_item_number++)
		// 	{
		// 		reduced_brand_array[current_item_number]
		// 		select_logic += "<option value='" + reduced_brand_array[current_item_number] + "'>" + reduced_brand_array[current_item_number] + "</option>";
		// 	};

		// 	// for (var item in catalog)
		// 	// {
		// 	// 	console.log(item);
		// 	//     	// console.log(detail['brand']);
		// 	//     for (var detail in item)
		// 	//     {
		// 	//     	console.dir(detail);
		// 	//     }
		// 	// }
		// 	document.getElementById("brand_select").innerHTML = select_logic;
		// 	document.getElementById("fname").innerHTML = obj.employees[1].firstName;
		// 	document.getElementById("lname").innerHTML = obj.employees[1].lastName; 
		</script>
			

	</body>
</html>