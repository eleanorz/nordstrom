		// JSON DATABASE BEFORE FORMATTING, NOW ASSIGNED TO JS STRING:
		var pre_catalog = '{"clothing_items" : ['+
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

		// console.log(catalog);

		// ======================================================

		var txt = '{ "employees" : [' +
					'{ "firstName":"John" , "lastName":"Doe" },' +
					'{ "firstName":"Anna" , "lastName":"Smith" },' +
					'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

		var obj = eval ("(" + txt + ")");

		imageClick = function(style_id){
			console.log(style_id);

			style_id = "#" + style_id;

			$( document ).ready(function() {
			 
			$(style_id ).hide();
			// $("'#" + style_id + "'" ).hide();
			 
			});
		}



		retrieveItemsByBrand = function(brand)
		{
			brandPicsUrl = [];

			for (var current_item_number = 0; current_item_number < catalog.length; current_item_number++)
			{
				brandPicsUrl.push("<a href='javascript:imageClick(" + catalog[current_item_number]['style_id'] + ")'><img id = '" + catalog[current_item_number]['style_id'] + "' class = large_display src='http://g.nordstromimage.com/imagegallery/store/product/large/" + catalog[current_item_number]['image_url'] + ".jpg' alt='" + catalog[current_item_number]['name'] + "'></a>" );
			};

			console.log(brandPicsUrl);
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