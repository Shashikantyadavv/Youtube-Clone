// Auth.action.jsx

import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  LOAD_PROFILE,
  LOG_OUT,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../ActionType";

export const Login = () => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const user = result.user;
      const profile = {
        name: user.displayName,
        photoURL: user.photoURL,
      };
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          accessToken,
        },
      });
      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode,email,credential);
      dispatch({ type: LOGIN_FAIL, payload: errorMessage });
    });
};

export const LogOut = () => async (dispatch) => {
  auth
    .signOut()
    .then(() => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
      dispatch({ type: LOG_OUT, payload: null });
    })
    .catch((error) => console.log(error));
};
