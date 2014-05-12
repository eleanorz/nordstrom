$( document ).ready(function() {
 
	//WHEN PAGE STARTS, SHOW ALL IMAGES
    showAll();

	select_logic = "";
	unsorted_brand_array = [];

	for (var current_item_number = catalog.length - 1; current_item_number >= 0; current_item_number--)
	{
		unsorted_brand_array.push(catalog[current_item_number]['brand']);
	};

	//REMOVE DUPLICATE BRANDS FROM THE ARRAY
	reduced_brand_array = jQuery.unique( unsorted_brand_array );

	reduced_brand_array.sort();

	// console.log(reduced_brand_array);

	//ADD IN SELECTION OPTION TO THE SELECTION ARRAY:

	reduced_brand_array.unshift("--Select Brand--")

	for (var current_item_number = 0; current_item_number < reduced_brand_array.length; current_item_number++)
	{
		reduced_brand_array[current_item_number]
		select_logic += "<option value='" + reduced_brand_array[current_item_number] + "'>" + reduced_brand_array[current_item_number] + "</option>";
	};

	// for (var item in catalog)
	// {
	// 	console.log(item);
	//     	// console.log(detail['brand']);
	//     for (var detail in item)
	//     {
	//     	console.dir(detail);
	//     }
	// }
	document.getElementById("brand_select").innerHTML = select_logic;
});

// JSON DATABASE BEFORE FORMATTING, NOW ASSIGNED TO JS STRING:
pre_catalog = '{"clothing_items" : ['+
					'{"brand":"Zella","formatted_regular_price":"$68.00","image_url":"17/_8884657","name":"Zella \'Run\' Stripe Half Zip Pullover","style_id":"3552410"},'+
					'{"brand":"Hinge","formatted_regular_price":"$26.00","image_url":"7/_8904187","name":"Hinge® Jersey Tank","style_id":"3223974"},'+
					'{"brand":"Trouve","formatted_regular_price":"$68.00","image_url":"7/_8547507","name":"Trouvé Side Slit Tunic Sweater","style_id":"3530925"},'+
					'{"brand":"Halogen®","formatted_regular_price":"$46.00","image_url":"18/_8592178","name":"Halogen® Three Quarter Sleeve Cardigan (Regular & Petite)","style_id":"3320328"},'+
					'{"brand":"Zella","formatted_regular_price":"$58.00","image_url":"4/_8889484","name":"Zella \'All Shirred Up\' Pullover","style_id":"3460660"},'+
					'{"brand":"Zella","formatted_regular_price":"$58.00","image_url":"14/_8680834","name":"Zella \'Easy\' Sweatshirt","style_id":"3493124"},'+
					'{"brand":"Hinge","formatted_regular_price":"$26.00","image_url":"7/_8904187","name":"Hinge® Jersey Tank","style_id":"3223974"},'+
					'{"brand":"Trouve","formatted_regular_price":"$38.00","image_url":"7/_8803147","name":"Trouvé \'Luxe\' Tee","style_id":"3530951"},'+
					'{"brand":"Stem","formatted_regular_price":"$38.00","image_url":"2/_8736822","name":"Stem Seamed Dolman Sleeve Tee","style_id":"3530224"},'+
					'{"brand":"Zella","formatted_regular_price":"$52.00","image_url":"13/_5917973","name":"Zella \'Live In\' Leggings","style_id":"3035710"},'+
					'{"brand":"Pleione","formatted_regular_price":"$58.00","image_url":"15/_8164075","name":"Pleione Mixed Media Roll Sleeve Top (Regular & Petite)","style_id":"3438286"},'+
					'{"brand":"Paige Denim","formatted_regular_price":"$158.00","image_url":"10/_7163970","name":"Paige Denim \'Skyline 12\' Skinny Stretch Jeans (Twilight)","style_id":"3128824"} ]}';

// CONVERTING JSON DB TO JS OBJECT:
catalog_shell = eval ("(" + pre_catalog + ")");
catalog = catalog_shell['clothing_items'];

console.log(catalog);

// ======================================================

showAll = function(){
	allUrls = [];

	for (var current_item_number = 0; current_item_number < catalog.length; current_item_number++)
	{
		allUrls.push("<a href='javascript:imageClick(" + current_item_number + ")'><img id = '" + current_item_number + "' class = large_display src='http://g.nordstromimage.com/imagegallery/store/product/large/" + catalog[current_item_number]['image_url'] + ".jpg' alt='" + catalog[current_item_number]['name'] + "'></a>" );
		// brandPicsUrl.push("<a href='javascript:imageClick(" + current_item_number + ")'><img id = '" + current_item_number + "' class = large_display src='http://g.nordstromimage.com/imagegallery/store/product/large/" + catalog[current_item_number]['image_url'] + ".jpg' alt='" + catalog[current_item_number]['name'] + "'></a>" );

	};

	//Set staging area to be filled with images from allUrls Array
	document.getElementById("stage").innerHTML = allUrls;
}

imageClick = function(id){
	// console.log(catalog[style_id]);
	console.log(id + 'is the id');
	item_array = catalog[id];

	id = "#" + id;
	 
	 //hides all other pictures, which are the children of parent ahrefs, sibling to the parent for each image
	$(id).parent().siblings().children().hide();

	document.getElementById("stage").innerHTML += "<div id = 'description'>" + "meep" + "</div>";

	for(attribute in item_array)
	{
		console.log(attribute);
	}



	// 	brand: "Zella"
	// formatted_regular_price: "$68.00"
	// image_url: "17/_8884657"
	// name: "Zella 'Run' Stripe Half Zip Pullover"
	// style_id: "3552410"
	// __proto__: Object

	//display info:

	// console.log(catalog[5]['style_id']);

}	

retrieveItemsByBrand = function(brand)
{
	brandPicsUrl = [];

	for (var current_item_number = 0; current_item_number < catalog.length; current_item_number++)
	{
		brandPicsUrl.push("<a href='javascript:imageClick(" + current_item_number + ")'><img id = '" + current_item_number + "' class = large_display src='http://g.nordstromimage.com/imagegallery/store/product/large/" + catalog[current_item_number]['image_url'] + ".jpg' alt='" + catalog[current_item_number]['name'] + "'></a>" );
	};
}

viewItems = function(brand)
{
	console.log("you are trying to view some things now");
	console.log(brand);
	retrieveItemsByBrand(brand);
	document.getElementById("stage").innerHTML = brandPicsUrl;
}

brandPicked = function(brand)
{
	viewItems(brand);
}