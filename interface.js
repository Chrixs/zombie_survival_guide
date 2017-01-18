
$("#button").click(function(e) {
    e.preventDefault()
    var update = function() {
      var p = new PersonalizedResponse();
      var survivalPercentage = p.survivalPercentage(p.getTotalScore(p.getValue($('.question1').serializeArray())));
        $('.form-response').html(
          "<div class=response-parallax></div><br/>" +
          "<div id=survival-chance>Chance of survival: " + survivalPercentage + "<br/>" +
          "<p><a href='https://mapofthedead.com/'>Click here</a> for all your google maps zombie needs</p><br/>" +
          "<p>We recommend putting a survival plan in place, here is one you can reference: " +
          "<a href='./survivalPlan.html'>Survival Plan for the end of the world</a></p></div><br/>" +
          "<div class=response-parallax></div>"
        );
    };
    update();
    $('.question1').change(update);
})
