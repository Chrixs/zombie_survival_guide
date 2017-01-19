
$("#button").click(function(e) {
    e.preventDefault()
    var update = function() {
      var p = new PersonalizedResponse();
      var survivalPercentage = p.survivalPercentage(p.getTotalScore(p.getValue($('.question1').serializeArray())));
      console.log(parseInt(survivalPercentage))
      if(parseInt(survivalPercentage) > 70) {
        $('.form-response').html(

          "<div id=survival-chance-good><p>Nice! Your chance of survival is " + survivalPercentage + ", here is some extra you might find helpful: </p><br/>"
        );
      }
      else if(parseInt(survivalPercentage) > 50) {
        $('.form-response').html(
          "<div id=survival-chance-average><p>Oooh, your chance of survival is " + survivalPercentage + ", its not bad but you might want to think about changing your appoach a bit, you might find this helpful: </p><br/>"
        );
      }

      else {
        $('.form-response').html(
          "<div id=survival-chance-bad><p>Ouch! Your chance of survival is only " + survivalPercentage + ", you're definitely gonna want to rethink your plans, you might find this helpful: </p><br/>"
        );
      }
      $('.resource-response').html(
        "<p><a href='https://mapofthedead.com/'>Click here</a> for all your google maps zombie needs</p><br/>" +
        "<p>We recommend putting a survival plan in place, here is one you can reference: " +
        "<a href='./survivalPlan.html'>Survival Plan for the end of the world</a></p></div><br/>"
        );
    };
    update();
    $('.question1').change(update);
})
