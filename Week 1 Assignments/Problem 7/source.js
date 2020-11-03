var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual,expected,testname){
	if(JSON.stringify(actual)==JSON.stringify(expected))
		console.log('Passed');
	else
		console.log('FAILED '+testname+' Expected '+JSON.stringify(expected)+' but got '+JSON.stringify(actual));
}

assertObjectsEqual(actual, expected, 'detects that two objects are equal');
expected={foo: 6,bar: 5};
assertObjectsEqual(actual, expected, 'detects that two objects are equal');