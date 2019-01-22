export default function reducer(state = { counter: 10 }, action) {
  console.log(state, action);

  switch (action.type) {
    case 'increment':
      //   return Object.assign({}, state, {
      //     counter: state.counter + action.payload.by
      //   });
      return { ...state, counter: state.counter + action.payload.by };
    default:
      return state;
  }
}
