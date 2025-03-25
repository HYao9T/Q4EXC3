function scoreResults(){

	let score = document.getElementById('input_score').value;

	if (score <= 65 ){
		window.alert("FAILED :(");
	}

	else if(score < 75){
		window.alert("BELOW AVERAGE :[");
	}

	else if(score < 80){
		window.alert("AVERAGE :)");
	}

	else if (score < 85){
		window.alert("ABOVE AVERAGE :]");
	}

	else if (score > 90){
		window.alert("PASSED :D");
	}
}