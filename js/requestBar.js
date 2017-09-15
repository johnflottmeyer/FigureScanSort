//Make Query
//Store Data
//API REQUEST - Beanie demo 008421043064
//https://api.upcitemdb.com/prod/trial/lookup?upc=

//upc = '008421043064';
$(".searchBar").on('click', function(){ 
	var bar = $('#manualBar').val();
	searchBarCode(bar);
});

function buildRow(t,d,b,s,w){
	$('.junktable').append('<tr><td>Title:</td><td>'+t+'</td></tr>');
	$('.junktable').append('<tr><td>Description:</td><td>'+d+'</td></tr>');
	$('.junktable').append('<tr><td>Brand:</td><td>'+b+'</td></tr>');
	$('.junktable').append('<tr><td>Size:</td><td>'+s+'</td></tr>');
	$('.junktable').append('<tr><td>Weight:</td><td>'+w+'</td></tr>');
	$('.junktable').append('<tr><td><a href="#" class="ui-btn add ui-state-disabled">Add to List</a></td><td><a href="#" class="ui-btn create ui-state-disabled">Create List</a></td></tr>');
}
//post the request
function searchBarCode(upc){
	$.mobile.loading("show");
	console.log(upc);
	//fill in the bar code for manual entry
	if($('#info').html() == 'barcode found'){
		$('#info').html(upc);
	}
	$("#result").html("searching");
	$("#result").addClass('blink');
	$.ajax({
	    type: 'GET',
	    url: 'https://api.upcitemdb.com/prod/trial/lookup',
	    data: "upc=" + upc,
	    success: function (resp) {
	        console.log(JSON.stringify(resp, null, 4));
	        var code = resp.code;
	        var total = resp.total;
	        var title = resp.items[0].title;
	        var description = resp.items[0].description;
	        var brand = resp.items[0].brand;
	        var size = resp.items[0].size;
	        var weight = resp.items[0].weight;
	        //alert(code + " - " + total + " - " + title);
	        
	        if(code == "OK"){
		        if(total > 0){
			        result = "results found";
			        //+resp.items.title;
		        }else{
			        result = "Code ok: but nothing found";
		        }
		        $("#result").html(result);
		        $("#result").removeClass('blink');
	        }
	        //add the results to the app
	        buildRow(title,description,brand,size,weight);
	       
	        //if(resp.success == true){//now lets mark the columns that we saved.
		        
		    //}
		    $.mobile.loading("hide");
		},
		error: function(e){
			//console.log(e);
			$.mobile.loading("hide");
			console.log("Debug: error" + JSON.stringify(e, null, 4));
		},
		dataType: "json"
	});
}