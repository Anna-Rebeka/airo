export function increaseIndex(nmb: number, documents: any) {
    if (!documents || (nmb + 1) === Object.values(documents).length) {
        return 0;
    }
    return nmb + 1;
}