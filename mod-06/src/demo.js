function createIncrement(value = 1) {
  const incrementAction = {
    type: 'increment',
    payload: { by: value }
  };
  return incrementAction;
}

let listeners = [];

let store = {
  counter: 0,
  name: 'Maurice'
};

Object.freeze(store);

function dispatch(action) {
  switch (action.type) {
    case 'increment':
      //   store.counter += action.payload.by;
      store = Object.assign({}, store, {
        counter: store.counter + action.payload.by
      });
      Object.freeze(store);
      break;
    default:
  }

  listeners.forEach(l => l(store))
}

listeners.push(s => console.log('Listener one', s));

dispatch(createIncrement(5));

listeners.push(s => console.log('Listener two', s));

dispatch(createIncrement());