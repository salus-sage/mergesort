// TODO: Need to get the function from index.html script
//split exercise

(function(E){
	//import E as argument => Evaluator function, which uses sme spec to 
	// evaluate domain problem, in this case Split, merge, mergesort
	//This exercise is to demo split

	//console.log(E, "onload");
	
	//TAG: State: Application state object using rxjs which gives reactive functions
	//documentation: http://reactivex.io/rxjs/
	R = rxjs;

	//global scene object 
	window.A3scene = window.A3scene || {};
	A3scene.Catalog = {};
	A3scene.Utils ={}

	//TAG: UI: DOM Variables

	var testList = document.getElementById('step4');
	var evenOrOdd = document.querySelector('#choose-even-odd');
	var leftInput = document.getElementById('left-input');
	var rightInput = document.getElementById('right-input');
	var inputButton = document.querySelector('button');
	var submitResultBtn = document.querySelector('#submit-result-btn');
	var resultOutput = document.querySelector('#result');

// Helper for generating a random array, takes length as argument
	A3scene.Utils.generateRandomArray = function(len){
		return Array.from({length: len}, () => Math.floor(Math.random() * 10));
	}
	

// Helper to pass string input into number array
//TODO: Abstract this to a general parse list as UI object
	A3scene.Utils.ParseArrayInt = function(ListInput){
		return ListInput.map(function(item){
	 		return parseInt(item);
	 })
	}


	// Calls the Array generator helper and sets the input element in DOM
	// To pass the default length of array
	// Tag: UI
	A3scene.createInput = function(){
		A3scene.input = A3scene.Utils.generateRandomArray(8);
		testList.innerHTML = A3scene.input.join(' ');
	}
	
	// Bind Events to DOM Elements
	// TAG: UI
	//this is the Generate input button blick event binding to
	//call createInput
	R.fromEvent(inputButton, 'click')
  	 .subscribe(() => A3scene.createInput())//observer.next(generateRandomArray(4)));

	//NOT USING:<just testing> 
	//left input field, for user input split - left
	R.fromEvent(evenOrOdd,'change')
	 .subscribe((event) => console.log(event.target.value));

	// All magic of output evaluation
	//Calls E.Evaluator with the userinput [[], []], question [], ctx 'string' (split) 
	//TODO: Seperate the UI and Domain 
	// 
	R.fromEvent(submitResultBtn, 'click')
	 .subscribe(() => resultOutput.innerHTML = E.Evaluator(
	 	[A3scene.Utils.ParseArrayInt(leftInput.value.split(' ')), 
	 	A3scene.Utils.ParseArrayInt(rightInput.value.split(' '))], 
	 	A3scene.input, 
	 	'split').toString().toUpperCase());


	 //create first input
	 A3scene.init = function(){
	 	A3scene.createInput();
	 }
	 


})(window.E)