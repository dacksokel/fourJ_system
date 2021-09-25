import { writable } from 'svelte/store';

export function createBserver() {
    const { subscribe, set, update } = writable('http://192.168.32.100:1000');

    return {
        subscribe,
        update,
        set
    };
}
