

export class Storage {

    constructor(storageName= 'gameScoreBoard', initValue= '[]') {

        this.storageName = storageName;

        if(!localStorage.getItem(storageName)) {
            localStorage.setItem(storageName, initValue);
        }
    }

    getData(){
        return JSON.parse(localStorage.getItem(this.storageName));
    }

    update(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }
};