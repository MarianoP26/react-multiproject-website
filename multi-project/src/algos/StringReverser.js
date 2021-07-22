import React, { useState } from 'react'

const StringReverser = () => {

	const helper = 'Type the string you would like to be reversed';

	const [isPalyndrome, setIsPalyndrome] = useState(false);
	const [isTyping, setIsTyping] = useState(false);
	const [string, setString] = useState(helper);

	const handleChange = (e) => {
		//If there is a value in e
		if(e.target.value){
			let userString = e.target.value;
			let userReversedString = e.target.value.split('').reverse().join('');
			setString(userReversedString);
			setIsTyping(true);
			if(userString === userReversedString && userString.length > 2){
				setIsPalyndrome(true);
			}
			else{
				setIsPalyndrome(false);
			}
		//If there is not a value in e
		}	else{
			setString(helper);
			setIsTyping(false);
		}
	};

  return (
    <div className="string-reverser">
			<h1>{string}</h1>
			<div className="input">
				<input type="text" placeholder="type here..." onChange={(e) => handleChange(e)}></input>
			</div>
      <div>
				{isPalyndrome && <h2>Palyndrome!</h2>}
				{isTyping && <h6>Character count: {string.length} </h6>}
			</div>
    </div>
    )
}

export default StringReverser;
