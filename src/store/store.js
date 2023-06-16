import { createStore, combineReducers } from 'redux';
import tarefasReducer from './reducers/tarefasReducer';

const rootReducer = combineReducers({
  tarefas: tarefasReducer,
});

const store = createStore(rootReducer);

export default store;