export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setUser = user => {
  return { type: SET_USER, user };
};

export const getProfile = () => {
  return dispatch =>
    fetch("http://localhost:3000/profile", {
      credentials: "include"
    })
      .then(r => {
        if (r.status >= 200 && r.status < 300) {
          return r.json();
        } else {
          throw new Error(r.statusText || r.status);
        }
      })
      .then(u => dispatch(setUser(u)))
      .catch(e => {
        console.error(e);
        dispatch(clearUser());
      });
};

export const login = user => {
  return dispatch => {
    fetch("http://localhost:3000/sign_in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(r => {
        return r.json();
      })
      .then(u => {
        dispatch(setUser(u));
      });
  };
};
export const logout = () => {
  return dispatch => {
    fetch("http://localhost:3000/sign_out", {
      method: "DELETE",
      credentials: "include"
    })
      .then(r => r.json())
      .then(d => {
        dispatch(clearUser());
      });
  };
};
export const signup = user => {
  return dispatch =>
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(u => dispatch(setUser(u)));
};

const clearUser = () => {
  return { type: CLEAR_USER };
};
