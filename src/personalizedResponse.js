var PersonalizedResponse = function() {

};

PersonalizedResponse.prototype.getValue = function(hashArray) {
  var string = hashArray[0].value
  return parseFloat(string)
};
