module.exports = {
	// count children and put number on name
	count: data => {
		if (!data) return null;
		// copy data for avoid change
		let dataCopy = JSON.parse(JSON.stringify(data));
		let arr = [];
		for (country of dataCopy) {
			country.name += ` [${country.people.length}]`;
			for (people of country.people) {
				people.name += ` [${people.animals.length}]`;
			}
			arr.push(country);
		}
		return arr;
	},
	// return only if name of animals contain str
	filter: (data, str) => {
		if (!data) return null;
		// copy data for avoid change
		let dataCopy = JSON.parse(JSON.stringify(data));
		let arr = [];
		for (country of dataCopy) {
			let _people = [];
			for (people of country.people) {
				let _animals = [];
				for (i in people.animals) {
					// toLowerCase() for avoid uppercase
					let aName = people.animals[i].name.toLowerCase();
					if(aName.includes(str.toLowerCase()))
						_animals.push(people.animals[i]);
				}
				// if 1 or more animals
				if (_animals != 0) {
					people.animals = _animals;
					_people.push(people);
				}

			}
			country.people = _people;
			// if people have one or more animal
			if (country.people.length != 0)
				arr.push(country);
		}
		// return null if no result
		if (arr.length === 0)
			return null;
		return arr;
	}
}