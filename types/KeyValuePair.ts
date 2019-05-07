export default class KeyValuePair<key = string, value = string> {
    private _key: string;
    private _value: string;

    get key() {
        return this.key;
    }

    get value() {
        return this.value;
    }

    constructor(key: string, value: string) {
        this._key = key;
        this._value = value;
    }
}
