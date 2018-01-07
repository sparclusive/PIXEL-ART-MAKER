
//Grid generation
function makeGrid(){
	 //Table assignment
	const canvas = $('#pixel_canvas');
	//Table Row & Column assignment
	var cvRow = $('#input_height').val();
	var cvCol = $('#input_width').val();
	// Reset the canvas

	canvas.children().remove();

	//Generate Table Row

	for(var r = 0 ; r < cvRow; r++){
		canvas.append("<tr></tr>");
  		//Generate Table Col
		for(var c = 0 ; c < cvCol; c++){
			canvas.children().last().append("<td></td>");		
		}
	}

	//To disable context menu
	canvas.contextmenu(function(e){
			return false;
			});
	// To color & clear the grid	
	canvas.on("mousedown", "td", function(e){
		canvas.on("click mouseover", "td", function(e){
		if(e.which == 1) {
			let pickedColr = $('#colorPicker').val();
			$(this).attr('bgcolor', pickedColr);
		}else if(e.which == 2 || e.which == 3){
			$(this).attr('bgcolor', '');
		}
		});
	});
}


 	
// Lol!!! A copy of makeGrid function that pretends to be a Grid Color reset function
$('#gridReset').click(function(e){
	e.preventDefault();
makeGrid();
});

$('#cv_submit').click(function(e) {
	e.preventDefault();
  	makeGrid();
});