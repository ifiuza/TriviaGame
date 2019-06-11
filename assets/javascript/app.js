$(document).ready(function() {
// hides all 3 when page first loads

    $('#countdown').hide();
    $('.questions').hide();
    $('.results').hide();

    // Variables
    var seconds = 90; 
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
   
});