var on = false;

$("#start_button").on("click", function() {
    on=true;
    $("#start_button").fadeOut();

    if (on) {
        var character_selected = 0;
        var selected_card_stat;
        var card_number = 0;
        var attack_p;
        var current_hp;
        var current_ap;
        var position_selected;
        var hit_sound = document.getElementById("hitting_sound");
        var die_sound = document.getElementById("dying_sound");
        var how_many_killed = 0;
        var card_div_html = '';
        var char_number;
        var char_list = ["Ryu", "Ken", "Zangief"];
        
        var stat_number=0;

        $(document).on("click", "#generate_button", function(){
        	generate_card()
            if (card_number==3){
            $("#generate_button").fadeOut();
        }

        });




        function generate_card() {
            var player = [];
            card_number += 1;
            stat_number +=1;
            if (card_number <= 3) {
                char_number = Math.floor(Math.random() * 3 + 1);
                card_div_html = '<div class="card_div" id="card" value="0"><img src="asset/image/xmark.png" id="xmark"><img src="asset/image/img' + char_number + '.jpg" id="card1" class="card_images"><div class="clear"></div><div class="card_name">' + char_list[(char_number - 1)] + '</div><div class="clear"></div><div><span class="ap_disp">AP</span><span class="hp_disp">HP</span></div><div class="clear"></div><div class="ApHp"><div class="AP_div" id="card' + stat_number + '_ap"><span></span></div><div class="HP_div" id="card' + stat_number + '_hp"><span></span></div></div></div>'
                $(".card_list").append(card_div_html);
                

                player[card_number] = {
                    hp: Math.floor(Math.random() * 70 + 50),
                    ap: Math.floor(Math.random() * 100 + 5)
                };

                $("#card" + (stat_number) + "_hp").text(player[card_number].hp);
                $("#card" + (stat_number) + "_ap").text(player[card_number].ap);

            }
        };

        initializing();



        function initializing() {

            selected_card_stat = {
                hp: 0,
                ap: 0
            };

            $("#after_start").text(".card_div:hover, .selected_card:hover{ background-color:blue;}")

        }




        $(document).on('click', '.card_div', function selecting() {

            if (character_selected == 0) {

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

                selected_card_stat.ap = $(".selected_card").children(".ApHp").children(".AP_div").text();

                selected_card_stat.hp = $(".selected_card").children(".ApHp").children(".HP_div").text();

                character_selected = 1;
                console.log("character_selected: " + character_selected);

                $("#after_start").text("")

            }
        });


        $(document).on('click', '.card_div', function attacking(a) {

            if (character_selected == 1 && $(this).attr("value") == 0) {

                current_hp = $(this).children(".ApHp").children(".HP_div").text();

                current_ap = $(this).children(".ApHp").children(".AP_div").text();

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

            }

            if (current_hp <= 0) {

                console.log("killed");

                $(this).children("#xmark").css("display", "block");
                $(this).fadeOut();
                card_number -= 1;
                generate_card()

                if ($(this).attr("value") == "0") {

                    die_sound.play();

                    $(this).attr("value", "1");
                    // 

                    $(this).css("cursor", "auto");

                    how_many_killed += 1;

                }

            }

            if (selected_card_stat.hp <= 0) {

                console.log("you died");

            }


            if ((how_many_killed) == (card_number - 1)) {

                console.log("you defeated all");

            }


        })

    }
})