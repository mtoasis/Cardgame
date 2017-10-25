$(document).ready(function(){


var random_numb  
var img_random_numb=[];
var wins=0;;
var losses=0;;
var totalScore =0;


random_number_generator()

$("#crystal_1").on("click", function(){

	totalScore +=Number(img_random_numb[0]);
	totalScore_print();
});

$("#crystal_2").on("click", function(){

	totalScore +=Number(img_random_numb[1]);
	totalScore_print();
});

$("#crystal_3").on("click", function(){

	totalScore +=Number(img_random_numb[2]);
	totalScore_print();
});

$("#crystal_4").on("click", function(){

	totalScore +=Number(img_random_numb[3]);
	totalScore_print();
});

function random_number_generator(){

	random_numb= Math.floor((Math.random()*101)+19);
	console.log("random # is: "+random_numb);
	$("#random_number").text(random_numb);
	for (i=0; i<4; i++){
	img_random_numb[i]=Math.floor((Math.random()*12)+1);
	}
	console.log("image random # are: " + img_random_numb);
}



function totalScore_print(){

$("#your_number").text(totalScore);

if (totalScore == random_numb){
	wins +=1;
	$("#score_board").html("<strong>You Win!</strong><br>"+"Wins: "+wins+"<br>"+"Losses: "+losses);
	clear();
	random_number_generator()
}
else if (totalScore > random_numb){
	losses +=1;
	$("#score_board").html("<strong>You Lost!</strong><br>"+"Wins: "+wins+"<br>"+"Losses: "+losses);
	clear();
	random_number_generator()
}
else{
$("#score_board").html("Wins: "+wins+"<br>"+"Losses: "+losses)
};

};


function clear(){

img_random_numb=[];
totalScore =0;
console.log("total score is initialized to" + totalScore);

}

});