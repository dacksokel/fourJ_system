import { writable } from 'svelte/store';

export async function createEmpresa() {
    
    const { subscribe, set, update } = writable();

    return {
        subscribe,
        update,
        start: (empresa)=> set(empresa)
    };
}
