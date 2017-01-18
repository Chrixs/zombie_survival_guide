describe('personalized response', function() {

  var personalizedResponse;

  beforeEach(function() {
    personalizedResponse = new PersonalizedResponse();
  });

  it("should be able to break down a hash array to get value", function() {
    var hashArray = [{"name":"survival-time","value":"0.3"}];
    expect(personalizedResponse.getValue(hashArray)).toEqual(0.3);
  });

});
