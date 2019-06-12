$(document).ready(function() {
// hides all 3 when page first loads

    $('#countdown').hide();
    $('.questions').hide();
    $('.results').hide();

    // Variables
    var seconds = 10; 
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //functions

    // Shows questions
    function showQuestions(){
        $('#countdown').show();
        $('.questions').show();
        $('#done').show();
    }

    // function for timer
    function countdownTimer(){
            intervalId = setInterval(decrement, 1000);
    }
   
    // function to decrement timer
    function decrement(){
        seconds--;
        $('#timer').html(" " + seconds + " " + "seconds");
        if (seconds ===1){
            $('#timer').html(" " + seconds + " " + "second");
        }
        else if(seconds ===0) {
            stop();
            hide();
            alert("time is up!")
            displaySummary();
        }
    }

        //function to clear timer
    function stop() {
        clearInterval(intervalId);
    }

        //function to hide text after questions are answered or timer out
    function hide(){
        $('#countdown').hide();
        $('.questions').hide();
        $('#done').hide();
    }

    // function to display summary of game
    function displaySummary(){
        $('.results').show();
        unanswered = (4-(correctCount+wrongCount));
        $('#correctScore').text("Correct Answers:" + " " + correctCount); 
        $('#wrongScore').text("Wrong Answers:" + " " + wrongCount); 
        $('#unanswered').text("Unanswered:" + " " + unanswered); 
    }


    //Clicking Start Button
    $('#start').on('click', function(){
        $('#start').hide();
        showQuestions();
        countdownTimer();
    }); 

    //Clicking Done Button
    $('#done').on('click', function(){
        $('#start').hide(); 
        hide();
        displaySummary();
    });

    //Clicking Radio button
    $('input[type=radio]').on ('change', function(){
    correctCount = $('input[value=correct]:checked').length;
    wrongCount = $('input[value=wrong]:checked').length;
    unanswered = (4-(correctCount+wrongCount));
    });
});