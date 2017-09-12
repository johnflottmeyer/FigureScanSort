//Make Query
//Store Data
//API REQUEST - Beanie demo 008421043064
//https://api.upcitemdb.com/prod/trial/lookup?upc=

//upc = '008421043064';
//post the request
function searchBarCode(upc){
	$.ajax({
	    type: 'GET',
	    url: 'https://api.upcitemdb.com/prod/trial/lookup',
	    data: "upc=" + upc,
	    success: function (resp) {
	        //console.log("Debug:" + resp);
	        //alert(JSON.stringify(resp, null, 4));
	        return JSON.stringify(resp, null, 4);
	        
	        //if(resp.success == true){//now lets mark the columns that we saved.
		        
		    //}
		    $.mobile.loading("hide");
		},
		error: function(e){
			//console.log(e);
			$.mobile.loading("hide");
			console.log("Debug: error" + JSON.stringify(e, null, 4));
		}
	});
}