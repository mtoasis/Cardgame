var on = false;
var card_number
var character_selected
var selected_card_stat;
var attack_p;
var current_hp;
var current_ap;
var position_selected;
var how_many_killed
var card_div_html
var char_number
var char_list       
var stat_number
var exp =0;
var level
var stage_level
var j;
var ryu_select = new Audio("asset/sound/ryu_select.mp3")
var ryu_die = new Audio("asset/sound/ryu_die.mp3")
var ken_select = new Audio("asset/sound/ken_select.mp3")
var ken_die = new Audio("asset/sound/ken_die.mp3")
var zangief_select = new Audio("asset/sound/zangief_select.mp3")
var zangief_die = new Audio("asset/sound/zangief_die.mp3")
var hit_sound = new Audio("asset/sound/sound3.mp3")
var die_sound = new Audio("asset/sound/sound5.mp3")
var lv_up_sound = new Audio("asset/sound/lv_up.mp3")
var st_up_sound = new Audio("asset/sound/st_up.mp3")
var theme = document.getElementById("theme");
var exp_req = [];



theme.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var func

function setting(){

    func = setTimeout(function(){generate_card()},1000);
}

function clearing_time(){
    clearTimeout(func);
}




$("#start_button").on("click", function() {
    on=true;
    theme.play();
    $(".start_screen_div").fadeOut();
    begin()
    main_generate_card()


});

$("#restart_button").on("click", function() {
    on=true;
    theme.play();
    $(".gameover_div").css("display","none");
    begin()
    main_generate_card()
});

$("#restart_button_header").on("click", function() {
    on=true;
    $(".card_list").empty()
    $(".gameover_div").css("display","none");
    begin()
    main_generate_card()

});

function begin(){    

    if (on) {
        exp=0;
        level=0;


for (p=0; p<100; p++){
    exp_req[p]=2+(4*p);
}
console.log("exp req is: "+exp_req)

        $(".card_list").empty();
        stage_level=1
        $(".stage_lv_disp_text").text("LV: "+stage_level);
        character_selected = 0;
        card_number = 0;
        attack_p;
        current_hp;
        current_ap;
        position_selected;

        how_many_killed = 0;
        card_div_html = '';
        char_number;
        char_list = ["Ryu", "Ken", "Zangief"];        
        stat_number=0;
        initializing();
        

        }        
    }

    $(document).on("click", "#generate_button", function(){
            generate_card()
            if (card_number==3){
            $("#generate_button").fadeOut();
        }
    });


function main_generate_card() {
    var player = [];

            
            for (j=1; j<(char_list.length+1); j++){

                stat_number +=1;
                card_div_html = '<div class="card_div" id="card" value="0" name="'+char_list[(j-1)] +'"><div class="lv_disp"><span class="lv_disp_text">'+level+'</span></div><img src="asset/image/xmark.png" id="xmark"><img src="asset/image/img' + j + '.jpg" id="card1" class="card_images"><div class="clear"></div><div class="card_name">' + char_list[(j - 1)] + '</div><div class="clear"></div><div><span class="ap_disp">AP</span><span class="hp_disp">HP</span></div><div class="clear"></div><div class="ApHp"><div class="AP_div" id="card' + stat_number + '_ap"><span></span></div><div class="HP_div" id="card' + stat_number + '_hp"><span></span></div></div></div>'
                $(".card_list").append(card_div_html);
                

                player[j] = {
                    hp: Math.floor(Math.random() * 70 + 50),
                    ap: Math.floor(Math.random() * 10 + 5)

                };
                $("#card" + (stat_number) + "_hp").text(player[j].hp);
                $("#card" + (stat_number) + "_ap").text(player[j].ap);

        }
        };


        function generate_card() {

            var player = [];
            card_number += 1;
            stat_number +=1;             
            card_div_html = '<div class="en_card_div" id="card" value="0"><div class="lv_disp"><span class="lv_disp_text">'+stage_level+'</span></div><img id="xmark" src="asset/image/xmark.png"><img class="en_card_images" id="card1" src="asset/image/en1.jpg"><div class="clear"></div><div class="en_card_name">Enemy</div><div class="clear"></div><div><span class="ap_disp">AP</span><span class="hp_disp">HP</span></div><div class="clear"></div><div class="ApHp"><div class="AP_div" id="card' + stat_number + '_ap"><span></span></div><div class="HP_div" id="card' + stat_number + '_hp"><span></span></div></div></div>'
           
            if (card_number<3){

                $(".card_list").append(card_div_html);                

                player[card_number] = {
                    hp: Math.floor(Math.random() * (stage_level*20) + (stage_level*10)),
                    ap: Math.floor(Math.random() * (stage_level*10) + (stage_level*3))
                };

                $("#card" + (stat_number) + "_hp").text(player[card_number].hp);
                $("#card" + (stat_number) + "_ap").text(player[card_number].ap);
                card_number -=1;

            }
        };

        

    function initializing() {

            selected_card_stat = {
                hp: 0,
                ap: 0
            };

            $("#after_start").text(".card_div:hover, .selected_card:hover{ background-color:blue;}")

        }


    function char_gif_on(){

        $(".char_gif_div").css("display","block");        

        setTimeout( function(){
            $(".char_gif_div").css("display","none");
        },2000);
  
        }





        $(document).on('click', '.card_div', function selecting() {

            if (character_selected == 0) {

                var char_name = $(this).attr("name");                

                // var 
                // console.log(char_name)
                if(char_name=="Ryu"){
                    $(".char_gif_div").html('<img class="char_gif" src="asset/image/ryu.gif">');
                    char_gif_on();
                    ryu_select.play();                   
                }
                else if(char_name=="Ken"){
                    $(".char_gif_div").html('<img class="char_gif" src="asset/image/ken.gif">');
                    char_gif_on();
                    ken_select.play();
                }
                else if(char_name=="Zangief"){
                    $(".char_gif_div").html('<img class="char_gif" src="asset/image/zangief.gif">');
                    char_gif_on();
                    zangief_select.play();
                }

                $(this).attr({
                    "class": "selected_card",
                    "value": "1"
                });

                $(this).css({
                    "background-color": "#008B8B",
                    "border": "5px solid red"
                });

                $(".selected_card").children(".ApHp").children(".AP_div").attr("id", "selected_AP");

                $(".selected_card").children(".ApHp").children(".HP_div").attr("id", "selected_HP");

                position_selected = $(".selected_card").position()

                $(".selected_card").animate({
                    'top': '350px'
                })

                selected_card_stat.ap = Number($(".selected_card").children(".ApHp").children(".AP_div").text());

                selected_card_stat.hp = Number($(".selected_card").children(".ApHp").children(".HP_div").text());

                character_selected = 1;
                console.log("character_selected: " + character_selected);

                $("#after_start").text("");
                $(".card_div").remove();
                generate_card();
                generate_card();
                generate_card();
            }
        });


        $(document).on('click', '.en_card_div', function attacking(a) {

            if (character_selected == 1 && $(this).attr("value") == 0) {

                current_hp = Number($(this).children(".ApHp").children(".HP_div").text());

                current_ap = Number($(this).children(".ApHp").children(".AP_div").text());

                current_hp -= selected_card_stat.ap;

                selected_card_stat.hp -= current_ap;

                $(this).children(".ApHp").children(".HP_div").text(current_hp);

                $(".selected_card").children(".ApHp").children(".HP_div").text(selected_card_stat.hp);

                var offset = $(".card_list").offset();

                var x = a.pageX - offset.left - position_selected.left;

                var y = a.pageY - offset.top;

                $(".selected_card").animate({
                    top: 0,
                    left: x
                })

                $(".selected_card").animate({
                    top: 350,
                    left: 0
                });

                var interval = 100;

                var distance = 30;

                var times = 4;


                for (var i = 0; i < (times + 1); i++) {

                    $(this).animate({
                        left: ((i % 2 == 0 ? distance : distance * -1))
                    }, interval);
                }

                $(this).animate({
                    left: 0
                }, interval);


                for (var i = 0; i < (times + 1); i++) {

                    $(".card_list").animate({
                        top: ((i % 2 == 0 ? distance : distance * -1))
                    }, interval);
                }

                $(".card_list").animate({
                    top: 0
                }, interval);

                hit_sound.play();
                result_check()

            }

            if (current_hp <= 0) {

                console.log("killed");

                $(this).children("#xmark").css("display", "block");
                $(this).fadeOut();
                // card_number -= 1;
                

                if ($(this).attr("value") == "0") {

                    die_sound.play();

                    $(this).attr("value", "1");
                    // 

                    $(this).css("cursor", "auto");

                    how_many_killed += 1;

                    exp += (stage_level*2);
                    console.log("exp is: " + exp)
                    console.log("exp reqd is: "+exp_req[level])
                    level_up()                   

                    $("#selected_HP").text(selected_card_stat.hp);
                    console.log("how many cards are on field: "+$(".en_card_div").length)
                    generate_card();


             if (how_many_killed==(2*stage_level)){  //stage up

                stage_level +=1;
                how_many_killed=0;


                $(".stage_lv_disp_text").text("LV: "+stage_level);
                $(".en_card_div").children("#xmark").css("display","block")
                $(".stg_up_screen").css("display","block");
                st_up_sound.play();
                setTimeout( function(){
                $(".stg_up_screen").css("display","none");
                  },1000);     
                setTimeout(function(){$(".en_card_div").remove()},300); 
                setTimeout(function(){generate_card()},700)
                setTimeout(function(){generate_card()},900)
                // setTimeout(function(){generate_card()},1200)
                // generate_card()                                        
             }
            // if ($(".card_div"))
            // generate_card()
            // console.log("length is: "+$(".card_div").length);
        }


                }

})
    

        function result_check(){


            if (selected_card_stat.hp <= 0) {

                var char_name = $(".selected_card").attr("name");

                if(char_name=="Ryu"){
                    ryu_die.play();                   
                }

                else if(char_name=="Ken"){
                    ken_die.play();                   
                }

                else if(char_name=="Zangief"){
                    zangief_die.play();                   
                }
                console.log("you died");
                
                on = false;
                exp=0;
                level=0;
                // theme.stop();
                theme.pause();
                theme.currentTime = 0;
                $(".card_list").empty();
                $(".gameover_div").css("display","block");


            }


        }


        function level_up(){
            if (exp>exp_req[level]){
                $(".lv_up_screen").css("display","block");
                lv_up_sound.play(); 
                level +=1;
                exp=0;   
                 setTimeout( function(){
                  $(".lv_up_screen").css("display","none");
                  },1000);                

                var adding_hp = Math.round((Math.random()*50)+70);
                var adding_ap = Math.round((Math.random()*10)+5);
                selected_card_stat.hp += adding_hp;
                selected_card_stat.ap += adding_ap;
                $("#selected_HP").text(selected_card_stat.hp);
                $("#selected_AP").text(selected_card_stat.ap);
                console.log(selected_card_stat)

                $(".selected_card").children(".lv_disp").children(".lv_disp_text").text(level);
                console.log("level up!: currnet level is :"+level)
            }
            

        }


