function stringChop(str, size) {
  // your code here
	if(!str) return [];

	const chunks =[];
	let start = 0;

	while(start < str.length){
		chunks.push(str.slice(start,start+size));
		start+= size;
	}

	return chunks;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
