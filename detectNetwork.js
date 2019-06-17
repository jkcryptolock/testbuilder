// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var prefixOne = Number(cardNumber.slice(0, 1));
  var prefixTwo = Number(cardNumber.slice(0, 2));
  var prefixThree = Number(cardNumber.slice(0, 3));
  var prefixFour = Number(cardNumber.slice(0, 4));
  var prefixSix = Number(cardNumber.slice(0, 6));
  var length = cardNumber.length;

//Diner's Club
  if (length === 14 && (prefixTwo === 38 || prefixTwo === 39)){
  	return "Diner's Club";

  };

//American Express
  if (length === 15 && (prefixTwo === 34 || prefixTwo === 37)){
  	return 'American Express';
  };

//Switch
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19. Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

	if ((prefixFour === 4903 || prefixFour === 4905 || prefixFour === 4911 || prefixFour === 4936) && (length >= 16 && length <= 19)){
		return 'Switch';
	};

	if ((prefixSix === 564182 || prefixSix === 633110) && (length >= 16 && length <= 19)){
		return 'Switch'
	};

	if ((prefixFour === 6333 || prefixFour === 6759) && (length >= 16 && length <= 19)){
		return 'Switch';
	};


//Visa
  if ((length === 13 || length === 16 || length ===  19) && prefixOne === 4){
  	return 'Visa';
  };

//MasterCard
  if ((prefixTwo >= 51 && prefixTwo <= 55) && length === 16){
  	return 'MasterCard';
  };

//Discover
  if (prefixFour === 6011 && (length === 16 || length === 19)){
  	return 'Discover';
  };

  if ((prefixThree >= 644 && prefixThree <= 649) && (length === 16 || length === 19)){
  	return 'Discover';
  };

  if (prefixTwo === 65 && (length === 16 || length === 19)){
  	return 'Discover';
  };

//Maestro
  if ((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) && (length >= 12 && length <= 19)){
  	return 'Maestro';
  }

//China UnionPay
//"China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19."
  if (((prefixSix >= 622126 && prefixSix <= 622925) || (prefixThree >= 624 && prefixThree <= 626) || (prefixFour >= 6282 && prefixFour <= 6288)) && (length >= 16 && length <= 19)) {
  	return 'China UnionPay';
  };

 };

