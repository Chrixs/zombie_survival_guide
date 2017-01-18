function PersonalizedResponse() {

};

PersonalizedResponse.prototype.getValue = function(hashArray) {
  valueArray= [];
  for(var i = 0; i < hashArray.length; i++){
    var string = hashArray[i].value;
    var value = parseInt(string)
    valueArray.push(value);
  }
  return valueArray;
};

PersonalizedResponse.prototype.getTotalScore = function(valueArray) {
  var totalScore = 0
  for(var i = 0; i < valueArray.length; i++){
    totalScore += valueArray[i];
  }
return totalScore
};

PersonalizedResponse.prototype.survivalPercentage = function(totalScore){
  return totalScore.toString() + '%';
};
