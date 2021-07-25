import React from 'react';
import { CarStore } from './car-store';

class RootStore {
    public carStore : CarStore;

    constructor(){

        this.carStore = new CarStore();
    }
}

export default RootStore;

const root = new RootStore();
const rootStore = React.createContext({
    carStore : root.carStore
});

export {rootStore};