namespace Fari {
    class KeyValuePair<key = string, value = string> {
        private _key: string;
        private _value: string;

        get key(): string {
            return this._key;
        }

        get value(): string {
            return this._value;
        }

        set value(value: string) {
            this._value = value
        }

        constructor(key: string, value: string) {
            this._key = key;
            this._value = value;
        }
    }
}