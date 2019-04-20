export const plusCount = store => {
  console.log('store.state.counter: ', store.state.counterValue);
  const newValue = store.state.counterValue + 1;
  store.setState({ counterValue: newValue });
}

export const minusCount = store => {
  console.log('store.state.counter: ', store.state.counterValue);
  const newValue = store.state.counterValue - 1;
  store.setState({ counterValue: newValue });
}

export const addNewCounter = store => {
  const newValue = store.state.counterComponents + 1;
  console.log('counter components: ', newValue);
  store.setState({ counterComponents: newValue });
}