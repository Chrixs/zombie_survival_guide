describe('personalized response', function() {

  var personalizedResponse;

  beforeEach(function() {
    personalizedResponse = new PersonalizedResponse();
  });

  it("should be able to break down a hash array to get value", function() {
    var hashArray = [{"name":"survival-time","value":"3"}];
    expect(personalizedResponse.getValue(hashArray)).toEqual([3]);
  });

  it("should be able to get the value from 2 questions and return an array", function() {
    var hashArray = [{"name":"survival-time","value":"3"},{"name":"survival-time","value":"1"}];
    expect(personalizedResponse.getValue(hashArray)).toEqual([3,1]);
  });

  it("should calculate the values from the valuerArray", function(){
    var hashArray = [{"name":"survival-time","value":"3"},{"name":"survival-time","value":"1"}];
    expect(personalizedResponse.getTotalScore(personalizedResponse.getValue(hashArray))).toEqual(4);
  });

  it("should return a survival percentage based on the totalScore", function(){
    var totalScore = 4;
    expect(personalizedResponse.survivalPercentage(totalScore)).toEqual('4%');
  });

});
