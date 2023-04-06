export const addInput = (input, setInput, val) => {
    setInput(input + val);
};

export const clearInput = ( setInput ) => {
	setInput('');
};

export const calculateResult = ( setInput, evaluate, input) => {
	if( input !== '' && typeof input === 'string' ){
		setInput( evaluate(input) );
	}else{
		alert('Please entry a valid operation');
	}
};