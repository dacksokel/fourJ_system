import { writable } from 'svelte/store';

export function createEmpresa() {
	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		update,
		// set,
		start: (empresa) => set(empresa)
	};
}
