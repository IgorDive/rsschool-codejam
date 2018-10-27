function sumOfOther(arr) {
	let resArr = [];

	arr.forEach( (elem, i , arr) => {
		resArr.push(arr.filter( item => item !== elem ).reduce( (prevElem, itm) => prevElem + itm ));
	} );

	return resArr;
}