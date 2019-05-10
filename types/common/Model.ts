export default class Model {
    private _modelName: string;

    get modelName(): string {
        return this._modelName;
    }

    constructor(name: string) {
        this._modelName = name;
    }
}
