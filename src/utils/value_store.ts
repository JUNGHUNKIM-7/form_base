import { writable } from 'svelte/store'

const toggleErrs = writable(false)

function toggleHander() {
    const { subscribe, update } = toggleErrs
    return {
        subscribe,
        toggle: () => update((curr) => (curr = !curr)),
    }
}

export const toggleStore = toggleHander()
