import { writable, readable } from 'svelte/store';

export function createUser() {
	let local = null;
	if (sessionStorage.getItem('login_session') != null) {
		local = JSON.parse(sessionStorage.getItem('login_session'));
	}
	// console.log(local)
	const { subscribe, set, update } = writable(local);

	return {
		subscribe,
		update,
		set: (value) => {
			console.log(' desde set ', value);
			// if (value == 'salir') {
			//     sessionStorage.removeItem('login_session');
			//     location.href = '/';
			//     return set(null)
			// }
			// localStorage.setItem(key, toString(value))              // save also to local storage as a string
			return set(value);
		},
		salir: () => {
			sessionStorage.removeItem('login_session');
			location.href = '/';
			return set(null);
		}
	};
}
