export default class TreeViewExplorer {
    private readonly _target: string;

    constructor(target: string) {
        this._target = target
    }

    get target(): string {
        return this._target;
    }
}