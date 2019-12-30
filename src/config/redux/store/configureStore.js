import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {initialAppState} from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = initialAppState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;