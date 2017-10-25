$(document).ready(function(){

// var hp=[];
// var ap=[];
var player=[];
var card_number=$(".card_list .card_div").length; //testing value.
var character_selected=0;
var selected_card_stat={
	hp:0,
	ap:0
};
initializing();
var attack_p;
var current_hp;
var current_ap;
var position_selected;
var hit_sound = document.getElementById("hitting_sound");
var die_sound = document.getElementById("dying_sound");




function initializing(){

	for (var i=0; i<card_number;i++){


		player[i]={
			hp:Math.floor(Math.random()*70+50),
			ap:Math.floor(Math.random()*10+5)
			};

		$("#card"+(i+1)+"_hp").text(player[i].hp);
		$("#card"+(i+1)+"_ap").text(player[i].ap);
	}	
	character_selected = 0;

	// console.log(player);
} 


	// if (character_selected==0){
		$(".card_div").on("click", function selecting(){
			if (character_selected==0){

				$(this).attr({"class":"selected_card", "value":"1"});

				$(this).css({"background-color":"#008B8B","border":"5px solid red"});

				$(".selected_card").children(".ApHp").children(".AP_div").attr("id", "selected_AP");

				$(".selected_card").children(".ApHp").children(".HP_div").attr("id", "selected_HP");

				position_selected = $(".selected_card").position()

				$(".selected_card").animate({'top': '400px'})


				selected_card_stat.ap=$(".selected_card").children(".ApHp").children(".AP_div").text();

				selected_card_stat.hp=$(".selected_card").children(".ApHp").children(".HP_div").text();
	
				// console.log("s_stat: "+ JSON.stringify(selected_card_stat))
				character_selected=1;
				// console.log(character_selected)
	}
	});


 		$(".card_div").on("click",function attacking(a){
 			if (character_selected==1 && $(this).attr("value")=="0"){

 				current_hp = $(this).children(".ApHp").children(".HP_div").text();
 				current_ap = $(this).children(".ApHp").children(".AP_div").text();
 				current_hp -= selected_card_stat.ap;
 				selected_card_stat.hp -=current_ap;
 				$(this).children(".ApHp").children(".HP_div").text(current_hp);
 				$(".selected_card").children(".ApHp").children(".HP_div").text(selected_card_stat.hp);
 				

 				var offset = $(".card_list").offset();
 				console.log(offset)
 				var x = a.pageX-offset.left-position_selected.left;
 				var y = a.pageY-offset.top;
 				// console.log(x)
 				// console.log(y) 
 				$(".selected_card").animate({top: 0, left: x})
 				$(".selected_card").animate({top:400, left: 0});
 				// console.log($(".selected_card").position())

 				var interval = 100;                                                                                                 
   				var distance = 30;                                                                                                  
    			var times = 4;                                                                                                      

   				$(this).css('position','relative');                                                                                  

   				for(var iter=0;iter<(times+1);iter++){                                                                              
        		$(this).animate({ 
            		left:((iter%2==0 ? distance : distance*-1))
            			},interval);                                   
    			}                                                                                                            

   				$(this).animate({ left: 0},interval);

   				$(".card_list").css('position','relative');                                                                                  

   				for(var iter=0;iter<(times+1);iter++){                                                                              
        		$(".card_list").animate({ 
            		top:((iter%2==0 ? distance : distance*-1))
            			},interval);                                   
    			}                                                                                                            

   				$(".card_list").animate({ top: 0},interval);
   				
   				hit_sound.play();
   				


 				

 				// console.log("current_hp: "+current_hp) ;	
 			}

 			if (current_hp<=0){
			console.log("defeated");
			$(this).css("display","none");
			die_sound.play();
			}

 		})







});
