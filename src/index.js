import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';


const reducer = (state, action) => {
	if (action.type === 'INC') {
		return state + action.payload;
	}

	return state;
}
const store = createStore(reducer, 0, applyMiddleware(createLogger({ collapsed: true })));

store.subscribe(() => {
	const state = store.getState();
	console.log('state = ', JSON.stringify(state, null, 5));
});

store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
store.dispatch({ type: 'INC', payload: 1 });
