const lesson = {
	name: 'ДеструКТУРИЗАЦИЯ',
	description: 'каК удивитЬ друзей',
};

const normalize = (lesson) => {
	return {
		name: lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1).toLowerCase(),
		description: lesson.description.toLowerCase()
	};
};

console.log(normalize(lesson));
// => { name: 'Деструктуризация', description: 'как удивить друзей' }