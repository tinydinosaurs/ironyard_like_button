// make a variable for the button element
//document.querySelector('body').style.backgroundColor = 'LightCoral';

////// add styles //////

// style the body
document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.marginTop = '15em';

// create button variable
likeButton = document.querySelector('button');

// style the button
likeButton.style.width = "16em";
likeButton.style.height = "6em";
likeButton.style.fontSize = "0.8em";

//console.log(likeButton);


///// give the button some functionality /////

// my function to increase likes. Start counter at 0
counter = 0; 

function increaseLikes() {
	// if counter is 0, add one and make it say '1 like'
	if(counter === 0) {
		counter = 1;
		likeButton.innerHTML = counter + ' like';
	// if it's greater than 0, add one and make it say '# likes'	
	} else {
		counter ++;
		likeButton.innerHTML = counter + ' likes';
	}
	console.log(likeButton.innerHTML);
}

// call it!
likeButton.addEventListener('click', increaseLikes);


/////////////////// ADVENTURER MODE ///////////////////

// make reset button
resetButton = document.querySelector('.reset');

// style the button
resetButton.style.width = "16em";
resetButton.style.height = "6em";
resetButton.style.fontSize = "0.8em";

// make a reset function

function resetLikes() {
	counter = 0;
	likeButton.innerHTML = '0 likes';
}

resetButton.addEventListener('click', resetLikes)