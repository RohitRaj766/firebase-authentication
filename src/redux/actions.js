import * as types from "./actionTypes";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  googleAuthProvider,
  facebookAuthProvider,
} from "../firebase";

export let errorMessage = "";
export let successMessage = "";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

const googleSignInStart = () => ({
  type: types.GOOGLE_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_FAIL,
  payload: error,
});

const facebookSignInStart = () => ({
  type: types.FACEBOOK_START,
});

const facebookSignInSuccess = (user) => ({
  type: types.FACEBOOK_SUCCESS,
  payload: user,
});

const facebookSignInFail = (error) => ({
  type: types.FACEBOOK_FAIL,
  payload: error,
});

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    const user = auth.currentUser;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(registerSuccess(user), (successMessage = "Registration Done"));
      })
      .catch((error) =>
        dispatch(registerFail(error.message), (errorMessage = error.message))
      );
  };
};
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    const user = auth.currentUser;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(loginSuccess(user), (successMessage = "Login Done"));
      })
      .catch((error) =>
        dispatch(loginFail(error.message), (errorMessage = error.message))
      );
  };
};
export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    signOut(auth)
      .then(() => dispatch(logoutSuccess()))
      .catch((error) =>
        dispatch(logoutFail(error.message), (errorMessage = error.message))
      );
  };
};
export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSignInFail(error.message), (errorMessage = error.message));
      });
  };
};
export const facebookSignInInitiate = () => {
  return function (dispatch) {
    dispatch(facebookSignInStart());
    signInWithPopup(auth, facebookAuthProvider.addScope("user_birthday, email"))
      .then(({ user }) => {
        dispatch(facebookSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(facebookSignInFail(error.message), (errorMessage = error.message));
      });
  };
};
