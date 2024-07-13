const initialState = {
  accessToken: sessionStorage.getItem("accessToken")
    ? sessionStorage.getItem("accessToken")
    : null,
  user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,
  loading: false,
};

export const AuthReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_REQUEST":
      return { ...prevState, loading: true };
    case "LOGIN_SUCCESS":
      return { ...prevState, accessToken: payload, loading: false };
    case "LOGIN_FAIL":
      return { ...prevState, loading: false, error: payload };
    case "LOG_OUT":
      return { ...prevState, accessToken: null, user: null };
    case "LOAD_PROFILE":
      return { ...prevState, user: payload };
    default:
      return prevState;
  }
};
