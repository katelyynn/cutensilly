import { onMount, signal } from '@404/aether';

export function Time() {
	const time = signal('');

	onMount(() => {
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
		const interval = setInterval(update, 1000);

		return () => clearInterval(interval);
	});

	return <span>{time}</span>;
}
