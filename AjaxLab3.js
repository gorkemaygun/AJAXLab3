const makeAllCaps = word =>{
	return new Promise((resolve,reject)=>{
		if(word.every(word=>{
			return typeof word ==='string';
		})
			){
			resolve(
				sortWords(
					word.map(word =>{
						return word.toUpperCase();
					})
					)
				);
		}else{
			reject('UnexpectedText: Strings only!');
		}
	});
};

const sortWords= word =>{
	return new Promise((resolve,reject)=>{
		if(word){
			resolve(word.sort());
		}else{
			reject('UnexpectedText: Strings only!');
		}
	});
}

const words=['html','css','javascript'];

makeAllCaps(words)
.then(sortWords(words))
.then(result =>console.log(result))
.catch(error =>console.log(error));

const theseAreNotWords = [1,'hello',9];

makeAllCaps(theseAreNotWords)
.then(sortWords(theseAreNotWords))
.then(result => console.log(result))
.catch(error => console.log(error));