import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from 'reducers';
import DevTools from 'components/DevTools';

const createStoreProd = () => {
  const enhancer = compose(
    persistState(),
  );

  return createStore(rootReducer, enhancer);
};

const createStoreDev = () => {
  const enhancer = compose(
    persistState(),
    DevTools.instrument(),
  );

  const store = createStore(rootReducer, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const store = process.env.NODE_ENV === 'production' ? createStoreProd() : createStoreDev();

export default store;
