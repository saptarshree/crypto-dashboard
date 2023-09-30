import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index.js'; // Combine your reducers if you have more than one

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
