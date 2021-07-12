export const Storage = {
    data: new Map(),

    clearData() {
        this.data = new Map()
    },
    add(key, value) {
        this.data.set(key, value)
    },
    get(key) {
        return this.data.get(key)
    },
    valueList() {
        let result = Array.from(this.data.values());
        return result;
    },
    size() {
        return this.data.size;
    }
}
