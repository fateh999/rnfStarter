import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

const initialState = {};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      const newState = {...state, [name]: value};
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
