import { writable } from "svelte/store";

const initialStore = {
    color: "#2e2c2e",
    scale: 0.08,
};

export const macbookStore = writable(initialStore);

export const setColor = (color) => {
    macbookStore.update((currentStore) => {
        return { ...currentStore, color };
    });
};

export const setScale = (scale) => {
    macbookStore.update((currentStore) => {
        return { ...currentStore, scale };
    });
};

export const resetStore = () => {
    macbookStore.set(initialStore);
};
