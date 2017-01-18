var PersonalizedResponse = function() {

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
