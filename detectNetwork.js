// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {

  const cardMatch = {
  "Diner's Club": new RegExp(/^3[8-9][0-9]{12}/),
  'MasterCard': new RegExp(/^5[1-5][0-9]{14}/),
  'China UnionPay': new RegExp(/^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])[0-9]{10,13}|62[4-6][0-9]{13,16}|628[2-8][0-9]{12,15}/),
  'American Express': new RegExp(/^34|37[0-9]{13}/),
  'Switch': new RegExp(/^(4903|4905|4911|4936|6333|6759)[0-9]{12,15}|(564182|633110)[0-9]{10,13}/),
  'Discover': new RegExp(/^6011[0-9]{12}|6011[0-9]{15}|64[4-9][0-9]{13}|64[4-9][0-9]{16}|65[0-9]{14}|65[0-9]{17}/),
  'Maestro': new RegExp(/^(5018|5020|5038|6304)[0-9]{8,15}/),
  'Visa': new RegExp(/^4[0-9]{12}|4[0-9]{15}|4[0-9]{18}/)
  };

  for (var key in cardMatch){
    if (cardMatch[key].test(cardNumber)) {
      return key;
    }
  }
  return 'Unable to detect network';
  
};