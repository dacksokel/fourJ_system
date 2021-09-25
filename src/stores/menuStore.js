import { writable } from 'svelte/store';

export function createMenu() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		update,
		set,
		goMenu: () => update((n) => !n)
	};
}
