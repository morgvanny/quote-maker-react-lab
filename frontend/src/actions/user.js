export const LOGIN = "LOGIN";
export const SET_USER = "SET_USER";

export const setUser = user => {
  return { type: SET_USER, user };
};

export const login = user => {
  return dispatch =>
    fetch("http://localhost:3000/users/sign_in.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(u => dispatch(setUser(u)));
};
