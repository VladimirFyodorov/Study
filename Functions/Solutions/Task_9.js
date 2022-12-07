const emails = [
	'info@gmail.com',
	'info@yandex.ru',
	'info@hotmail.com',
	'mk@host.com',
	'support@hexlet.io',
	'key@yandex.ru',
	'sergey@gmail.com',
	'vovan@gmail.com',
	'vovan@hotmail.com',
];

const freeEmailDomains = [
	'gmail.com',
	'yandex.ru',
	'hotmail.com',
]

const getFreeDomainsCount = (emails) => {
	return emails.reduce((acc, email) => {
		const domain = email.split('@')[1];
		if (freeEmailDomains.includes(domain)) {
			if (!Object.hasOwn(acc, domain)) {
				acc[domain] = 1;
			} else {
				acc[domain] += 1;
			}
		}

		return acc
	}, {});
};

console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };