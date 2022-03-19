export const increment = (val) => {
  return {
    type: 'INC',
    value: val
  };
};

export const decrement = (val) => {
  return {
    type: 'DEC',
    value: val
  };
};

export const nozero = (val) => {
  return (dispatch, getState) => {
    if(getState().counter.count > 0) {
      dispatch(decrement(val));
    }
  };
};
