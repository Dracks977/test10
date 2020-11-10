module.exports = {
	// count children and put number on name
	count: data => {
		let arr = [];
		for (country of data) {
			let outpout = Object.assign({}, country);
			outpout.name += ` [${outpout.people.length}]`;
			for (people of outpout.people) {
				people.name += ` [${people.animals.length}]`;
			}
			arr.push(outpout);
		}
		return arr;
	},
	filter: (data, str) => {

	}
}