
var transformArrToLowerCase = arr => {
  // Ubah setiap element array menjadi lowercase!
  	let lowercase = arr.map ( arrName => {
  		return arrName.toLowerCase()
  	})
  	return lowercase
}

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']


let filterArrUnder10 = arr => {
  let newArr = arr.filter ( param  => {
    return  param >= 10
  })
  return newArr
}

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

const reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  const maxNum = arr.reduce ( num => {
  	let large = 0;
	for(let i=0, k = arr.length; i < k;i++){
        const num = arr[i]
		if (num > large){
		   large = num ;
		}
	}
	return large;
  	});
  return maxNum
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9