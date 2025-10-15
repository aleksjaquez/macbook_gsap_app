import { writable } from "svelte/store";

const initialStore = {
    color: "#2e2c2e",
    scale: 0.08,
};

export const mackookStore = writable(initialStore);

export const setColor = (color) => {
    mackookStore.update((currentStore) => {
        return { ...currentStore, color };
    });
};

export const setScale = (scale) => {
    mackookStore.update((currentStore) => {
        return { ...currentStore, scale };
    });
};

export const resetStore = () => {
    mackookStore.set(initialStore);
};
