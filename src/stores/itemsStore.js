import { writable } from 'svelte/store';

export function createItems() {

    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        update,
        start: (items) => set(items)
    };
}
