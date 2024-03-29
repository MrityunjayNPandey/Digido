// src/components/authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

export const authProvider = (type, params) => {
  // when a user tries to log in
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    console.log(
      params,
      username,
      password,
      username == "digidosolutions.com",
      password == "digidosolutions.com"
    );
    if (
      username == "digidosolutions.com" &&
      password == "digidosolutions.com"
    ) {
      sessionStorage.setItem("username", username);
      return Promise.resolve();
    }
  }
  // when a user tries to logout
  if (type === AUTH_LOGOUT) {
    sessionStorage.removeItem("username");
    return Promise.resolve();
  }
  // when the API throws an error
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      sessionStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  // when a user navigates to a new location
  if (type === AUTH_CHECK) {
    return sessionStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject("Unknown Method");
};
