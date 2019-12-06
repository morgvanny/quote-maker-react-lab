export const ADD_QUOTE = "ADD_QUOTE";
export const UPVOTE_QUOTE = "UPVOTE_QUOTE";
export const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE";
export const DELETE_QUOTE = "DELETE_QUOTE";

export const addQuote = quote => {
  return { type: ADD_QUOTE, quote };
};

export const upvoteQuote = id => {
  return { type: UPVOTE_QUOTE, id };
};

export const downvoteQuote = id => {
  return { type: DOWNVOTE_QUOTE, id };
};

export const deleteQuote = id => {
  return { type: DELETE_QUOTE, id };
};
