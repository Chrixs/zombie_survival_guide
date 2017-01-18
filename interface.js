
$("#button").click(function(e) {
    e.preventDefault()
    var update = function() {
      var p = new PersonalizedResponse();
      var survivalPercentage = p.survivalPercentage(p.getTotalScore(p.getValue($('.question1').serializeArray())));
        $('.form-response').text(
          JSON.stringify(survivalPercentage)
        );

    };
    update();
    $('.question1').change(update);
})
