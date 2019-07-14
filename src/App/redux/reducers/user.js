import ActionTypes from "../actions/types";

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER.LOGIN:
      return {
        ...state,
        user: action.payload
      };

    case ActionTypes.USER.LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
};

export default reducer;
