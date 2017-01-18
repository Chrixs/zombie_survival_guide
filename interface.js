
$("#button").click(function(e) {
    e.preventDefault()
    var update = function() {
      var p = new PersonalizedResponse();
      var survivalPercentage = p.survivalPercentage(p.getTotalScore(p.getValue($('.question1').serializeArray())));
        $('.form-response').html(
          "<div id=survival-chance>Chance of survival: " + survivalPercentage + "</div><br>" +
          "<p><a href='https://mapofthedead.com/'>Click here</a> for all your google maps zombie needs</p><br>" +
          "<p><a href='./survivalPlan.html'>Survival Plan for the end of the world</a></p>"
        );
    };
    update();
    $('.question1').change(update);
})
