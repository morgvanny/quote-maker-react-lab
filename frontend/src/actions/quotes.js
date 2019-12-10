export const ADD_QUOTE = "ADD_QUOTE";
export const UPVOTE_QUOTE = "UPVOTE_QUOTE";
export const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE";
export const DELETE_QUOTE = "DELETE_QUOTE";
export const SET_QUOTES = "SET_QUOTES";
export const FETCH_QUOTES = "FETCH_QUOTES";

export const addQuote = quote => {
  return { type: ADD_QUOTE, quote };
};

export const upvoteQuoteLocal = id => {
  return { type: UPVOTE_QUOTE, id };
};

export const downvoteQuoteLocal = id => {
  return { type: DOWNVOTE_QUOTE, id };
};

export const deleteQuote = id => {
  return { type: DELETE_QUOTE, id };
};

export const setQuotes = quotes => {
  return { type: SET_QUOTES, quotes };
};

export const fetchQuotes = () => {
  return dispatch =>
    fetch("http://localhost:3000/quotes")
      .then(r => r.json())
      .then(data => {
        dispatch(setQuotes(data));
      });
};

export const createQuote = quote => {
  return dispatch =>
    fetch("http://localhost:3000/quotes", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(quote)
    })
      .then(r => r.json())
      .then(q => {
        dispatch(addQuote(q));
      });
};

export const destroyQuote = id => {
  return dispatch =>
    fetch(`http://localhost:3000/quotes/${id}`, {
      method: "DELETE"
    }).then(() => {
      dispatch(deleteQuote(id));
    });
};

export const upvoteQuote = (id, votes) => {
  return dispatch =>
    fetch(`http://localhost:3000/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ votes: votes + 1 })
    }).then(() => {
      dispatch(upvoteQuoteLocal(id));
    });
};

export const downvoteQuote = (id, votes) => {
  return dispatch =>
    fetch(`http://localhost:3000/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ votes: votes - 1 })
    }).then(() => {
      dispatch(downvoteQuoteLocal(id));
    });
};
