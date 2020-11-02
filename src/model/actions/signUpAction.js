import { FETCH_AUTH_USER } from "../types";

export function fetchAuthUser(dataUser) {
  return {
    firs_name: dataUser.firs_name,
    last_name: dataUser.last_name,
    email: dataUser.email,
    password: dataUser.password,
    passwrod_confirmation: dataUser.passwrod_confirmation,
    type: FETCH_AUTH_USER,
  };
}
