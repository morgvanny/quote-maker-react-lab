import {
  ADD_QUOTE,
  UPVOTE_QUOTE,
  DOWNVOTE_QUOTE,
  DELETE_QUOTE,
  SET_QUOTES
} from "../actions/quotes";

export default (state = [], action) => {
  let quote;
  let idx;
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.quote];
    case UPVOTE_QUOTE:
      quote = state.find(q => q.id === action.id);
      idx = state.indexOf(quote);
      return [
        ...state.slice(0, idx),
        { ...quote, votes: quote.votes + 1 },
        ...state.slice(idx + 1)
      ];
    case DOWNVOTE_QUOTE:
      quote = state.find(q => q.id === action.id);
      idx = state.indexOf(quote);
      return [
        ...state.slice(0, idx),
        { ...quote, votes: quote.votes - 1 },
        ...state.slice(idx + 1)
      ];
    case SET_QUOTES:
      return action.quotes;
    case DELETE_QUOTE:
      quote = state.find(q => q.id === action.id);
      idx = state.indexOf(quote);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state;
  }
};
