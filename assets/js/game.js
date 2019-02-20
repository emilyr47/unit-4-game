// generating random number for the goal score

function randomGoal() {
$("#goal-score").html(goalScore);
}
var goalScore = Math.floor(Math.random() * 19) + 120;
window.onload = randomGoal;
$("#goal-score").html(goalScore);
//document.getElementById('#goal-score').html = goalScore;

//generating random numbers for the crystals
function randomCrystalYellow() {
    $("#yellow-crystal").html(yellowValue);
    }
    var yellowValue = Math.floor(Math.random() * 12) + 1;
    window.onload = randomCrystalYellow;
    $("#yellow-crystal").html(yellowValue);
    $("#yellow-crystal").val(yellowValue);

function randomCrystalPurple() {
    $("#purple-crystal").html(purpleValue);
    }
    var purpleValue = Math.floor(Math.random() * 12) + 1;
    window.onload = randomCrystalPurple;
    $("#purple-crystal").html(purpleValue);
    $("#purple-crystal").val(purpleValue);


function randomCrystalRed() {
    $("#red-crystal").html(redValue);
    }
    var redValue = Math.floor(Math.random() * 12) + 1;
    window.onload = randomCrystalRed;
    $("#red-crystal").html(redValue);
    $("#red-crystal").val(redValue);


function randomCrystalBlue() {
    $("#blue-crystal").html(blueValue);
    }
    var blueValue = Math.floor(Math.random() * 12) + 1;
    window.onload = randomCrystalBlue;
    $("#blue-crystal").html(blueValue);
    $("#blue-crystal").val(blueValue);
   // $( "#blue-crystal" ).click(function() {
      //});
    totalScore = 0;
    var wins = 0;
    $("#wins").val(0);
    var losses = 0;
    $("#losses").val(0);
    $("#blue-crystal").click(function(){    
      totalScore = Number(totalScore) + Number($(this).val());
        $('#total-score').html("Total: "+ totalScore); 
        if (totalScore === goalScore) {
            //wins = Number(1) + Number($(wins).val());
            win();

        } 

        
        if (totalScore > goalScore) {
            lost();
        }
     });
      $('#total-score').html("Total: "+ totalScore);

    $("#red-crystal").click(function(){    
        totalScore = Number(totalScore) + Number($(this).val());
          $('#total-score').html("Total: "+ totalScore);
          if (totalScore === goalScore) {
            win();
        }  
        
        if (totalScore > goalScore) {
            lost();
        }
       });
        $('#total-score').html("Total: "+ totalScore);

    $("#purple-crystal").click(function(){    
        totalScore = Number(totalScore) + Number($(this).val());
           $('#total-score').html("Total: "+ totalScore); 
           if (totalScore === goalScore) {
            //wins = Number(1) + Number($(wins).val());
            //$('#wins').html("Wins:" + wins + parseInt("1"));
            win();
        }   
        
        if (totalScore > goalScore) {
            //$('#losses').html("Losses:" + losses + parseInt("1"));
            lost();
        }

        });
        $('#total-score').html("Total: "+ totalScore);
    
    $("#yellow-crystal").click(function(){    
        totalScore = Number(totalScore) + Number($(this).val());
            $('#total-score').html("Total: "+ totalScore); 
            if (totalScore === goalScore) {
                //wins = Number(1) + Number($(wins).val());
                win();
            }

            if (totalScore > goalScore) {
                lost();
            }
        });
        $('#total-score').html("Total: "+ totalScore);

function win() {
    wins++;
    $('#wins').html("Wins:" + wins);
    resetGame();
    }
          
function lost() {
    losses++;
    $('#losses').html("Losses:" + losses);
    resetGame();
    }

function resetGame() {
    totalScore = 0;
    $('#total-score').html("Total: "+ totalScore);
    goalScore = Math.floor(Math.random() * 19) + 120;
    $("#goal-score").html(goalScore);
    yellowValue = Math.floor(Math.random() * 12) + 1;
    $("#yellow-crystal").html(yellowValue);
    $("#yellow-crystal").val(yellowValue);
    purpleValue = Math.floor(Math.random() * 12) + 1;
    $("#purple-crystal").html(purpleValue);
    $("#purple-crystal").val(purpleValue);
    redValue = Math.floor(Math.random() * 12) + 1;
    $("#red-crystal").html(redValue);
    $("#red-crystal").val(redValue);
    blueValue = Math.floor(Math.random() * 12) + 1;
    $("#blue-crystal").html(blueValue);
    $("#blue-crystal").val(blueValue);
    }
    
