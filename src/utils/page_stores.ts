import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'
import { writable } from 'svelte/store'

export const FORMCOUNT = 5

const page = writable(0)
const pageVisited = writable<boolean[]>(Array(FORMCOUNT).fill(false))
export const progress = tweened(0, {
    duration: 200,
    easing: cubicOut,
})

function pageHandler() {
    const { set, subscribe, update } = page
    return {
        subscribe,
        next: () => {
            progress.update((curr) => (curr += 0.25))
            update((curr) => curr + 1)
        },
        prev: () => {
            progress.update((curr) => (curr -= 0.25))
            update((curr) => curr - 1)
        },
        goResult: () => {
            progress.update((curr) => (curr += 0.25))
            set(FORMCOUNT - 1)
        },
        home: () => {
            progress.set(0)
            set(0)
        },
    }
}
function visitedHandler() {
    const { set, update, subscribe } = pageVisited
    return {
        subscribe,
        next: (index: number) => {
            update((curr) => {
                curr[index] = true
                return curr
            })
        },
        prev: (index: number) => {
            update((curr) => {
                curr[index - 1] = false
                return curr
            })
        },
        goResult: (index: number) => {
            update((curr) => {
                curr[index] = true
                curr[index + 1] = true
                return curr
            })
        },
        goHome: () => set(Array(FORMCOUNT).fill(false)),
    }
}

export const pageStore = pageHandler()
export const visitedStore = visitedHandler()
