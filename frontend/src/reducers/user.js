import { SET_USER, CLEAR_USER } from "../actions/user";

export default (state = { profile: undefined }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, profile: action.user };
    case CLEAR_USER:
      return { profile: null };
    default:
      return state;
  }
};
