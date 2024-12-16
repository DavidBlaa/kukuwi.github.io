import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';


export function useLocalStorage<Value>(
	key: string,
	initialValue: Value
): Writable<Value> | null {
	const serialize = JSON.stringify;
	const deserialize = JSON.parse;

	if (browser) {

		let store: Writable<Value>;


		const data: string = String(localStorage.getItem(key));

		let storedValue: Value;
		if (data != 'null') {
			storedValue = deserialize(data);
			store = writable(storedValue);
		} else {

			store = writable(initialValue);
		}
		store.subscribe((value) => localStorage.setItem(key, serialize(value)));

		return store;

	}
	return null;
}
