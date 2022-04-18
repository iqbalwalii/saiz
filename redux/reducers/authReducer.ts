import { AuthConstants } from "../constants";

const user = () => ({
  userName: "",
  firstName: "",
  lastName: "",
  role: "",
});
const data = {
  user,
};
const authState = {
  authenticated: false,
  user: data,
};

export function AuthReducer(state = authState, action: any) {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        loading: true,
        user: action.user,
      };
    case AuthConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading: false,
        user: action.user,
      };
    case AuthConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loading: false,
      };
    case AuthConstants.LOGOUT:
      return {};
    case AuthConstants.AUTH_REQUEST:
      return {
        authenticatted: true,
      };
    case AuthConstants.AUTH_SUCCESS:
      return {
        authenticated: true,
        user: action.key,
      };
    case AuthConstants.AUTH_FAILURE:
      return {
        authenticated: false,
      };
    case AuthConstants.UNSUBSCRIBE_REQUEST:
      return {
        unsubscribing: true,
      };
    case AuthConstants.UNSUBSCRIBE_SUCCESS:
      return {
        unsubscribing: false,
      };
    case AuthConstants.UNSUBSCRIBE_FAILURE:
      return {
        unsubscribing: false,
      };
    default:
      return state;
  }
}
export const authSelector = (state: any) => state.authState;
