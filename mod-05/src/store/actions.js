export function createIncement(value = 1) {
  return {
    type: 'increment',
    payload: { by: value }
  };
}

export function createIncementLater(value = 1) {
  return function(dispatch) {
    setTimeout(() => dispatch(createIncement(value)), 2500);
  };
}
