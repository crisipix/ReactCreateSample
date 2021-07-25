import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react';
import { stores } from './Data/stores/stores';


/*
    Provider is a component that will pass mobx stores using React's 
    context mechanism to child components. This eliminates the need of 
    inject the store as a prop into each component that needs access to it,
    this is especially useful when a deeply nested component needs access to the store.
*/
ReactDOM.render(
<Provider {...stores}>
<App/>
</Provider>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
