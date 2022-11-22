const findWhere = (books, filters) => {
	for (const book of books) {
		let isRightBook = true;
		for (const [key, value] of Object.entries(filters)) {
			if (book[key] !== value) {
				isRightBook = false;
			}
		}

		if (isRightBook) {
			return book;
		}
	}

	return null;
};

console.log(findWhere(
	[
		{ title: 'Book of Fooos', author: 'FooBar', year: 1111 },
		{ title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
		{ title: 'The Tempest', author: 'Shakespeare', year: 1611 },
		{ title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
		{ title: 'Still foooing', author: 'FooBar', year: 3333 },
		{ title: 'Happy Foo', author: 'FooBar', year: 4444 },
	],
	{ author: 'Shakespeare', year: 1611 }
)); // { title: 'Cymbeline', author: 'Shakespeare', year: 1611 }