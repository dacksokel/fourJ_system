import { writable } from 'svelte/store';

export function createUrl() {
    let url = window.location.pathname.split("/")[1];
    const { subscribe, set, update } = writable(url);

    return {
        subscribe,
        update: () => update(n => {
            console.log("este es window localtion ", window.location.pathname.split("/")[1])
            n = window.location.pathname.split("/")[1]
            
            // console.log("este es n url ", n)
            return n;
        }),
    };
}
