export default class Model {
    private _modalName: string;

    get modalName(): string {
        return this._modalName;
    }

    constructor(name: string) {
        this._modalName = name;
    }
}
