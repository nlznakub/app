import { observable, computed, action } from 'mobx';

class Mobx {
    @observable count = 0;

    constructor() {
        this.initial();
    }

    @action initial() {
        this.count = 0;
    }

    @action increments() {
        this.count++;
    }

    @computed get getCount() {
        return this.count;
    }
}
export default new Mobx()