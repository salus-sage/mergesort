
/* Evaluator function:
Purpose: To evaluate a user input in a certain context
Context: input value, split or merge sort
compare: user input value with the result
result: function to merge or merge sort based on context
*/

/* 
usecase: user enters a list in the input box,
in the context to test split function
unsorted array, 
and user input

inputs = 2 arrays 
*/
(function(){
console.log("E init");
E = window.E || {};
E.Utilities = E.Utilities || {};
E.testData = [34, 203, 3, 746, 200, 984, 198, 764, 9];


// E.Evaluator with the userinput [[], []], question [], ctx 'string' split or 'merge'
// or 'merge sort' 

E.Evaluator = function(uInput, inputArray, ctx){

	//E.unsortArray = [3,0,6,9];
	//E.userInput = [3,0];
	//E.ctx = {action: 'split'}
	
		
		//compare with user input for split testing
		if(ctx == 'split'){
			var comparedResultL, comparedResultR;
			comparedResultL = E.Utilities.array.isEqual(E.split(inputArray)[0], uInput[0]);
			comparedResultR = E.Utilities.array.isEqual(E.split(inputArray)[1], uInput[1]);
			//console.log(comparedResultL, comparedResultR, comparedResultR&&comparedResultL);
		} else {
			//Find actual result
			//TODO:
			var actualResult = E.mergeSort(inputArray, ctx);
			///console.log(actualResult);

		}
		


	return comparedResultR && comparedResultL;

}




// utilities on array to compare 
E.Utilities.array = {};
E.Utilities.array.isEqual = function (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};

//console.log(E.mergeSort(E.testData, 'split'));
//document.getElementById("demo").innerHTML=mergeSort(input);

 //End of API
console.log("E loaded");
})();
