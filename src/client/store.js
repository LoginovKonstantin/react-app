import { createStore } from 'redux';
import mainReducer from './redux/reducers';

const configureStore = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default configureStore;