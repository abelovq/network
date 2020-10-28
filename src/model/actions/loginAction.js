import { FETCH_LOGIN_USER } from "../types";

export function fetchLoginUser(dataUser) {
  return {
    email: dataUser.email,
    password: dataUser.password,
    type: FETCH_LOGIN_USER,
  };
}
