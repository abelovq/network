import { FETCH_AUTH_USER, REQUEST_AUTH_USER } from "../types";
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  passwrod_confirmation: "",
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_USER:
      return { ...state };
    case REQUEST_AUTH_USER:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default authReducer;
