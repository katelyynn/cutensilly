import { signal } from '@404/aether/reactivity';

export function Time() {
	const time = signal('');

	function update() {
		const now = new Date();

		const options: Intl.DateTimeFormatOptions = {
			timeZone: 'Europe/London',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false,
		};

		const string = new Intl.DateTimeFormat('en-GB', options).format(
			now,
		);
		time(string);
	}

	update();
	setInterval(update, 1000);

	return <span>{time}</span>;
}
