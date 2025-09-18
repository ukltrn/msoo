export function pickRandomArray(arr, n) {
    const copy = [...arr];
    const out = [];
    const k = Math.min(n, copy.length);
    for (let i = 0; i < k; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(idx, 1)[0]);
    }
    return out;
}