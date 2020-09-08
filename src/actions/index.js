import firebase from "firebase";

export const autoInputChange = ({ field, value }) => {
  return {
    type: "AUTH_INPUT_CHANGE",
    payload: { field, value }
  };
};

export const login = ({ email, password }) =>
 {
  return
  (dispatch) =>
   {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch({ type: "LOGIN_SUCCES", payload: user }))
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      }
     
    }
}