export async function withInterval<T>(
	callback: () => Promise<T>,
	seconds: number,
): Promise<() => T | undefined> {
	let value: T | undefined;

	try {
		value = await callback();
	} catch (e) {
		console.warn('[interval] initial call failed, will retry:', e);
	}

	async function tick(): Promise<void> {
		try {
			value = await callback();
		} catch (e) {
			console.warn('[interval] tick failed, keeping stale value:', e);
		}
		setTimeout(tick, seconds * 1000);
	}

	setTimeout(tick, seconds * 1000);

	return () => value;
}
