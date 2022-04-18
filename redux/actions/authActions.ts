import { AuthService } from "../../services/authService";
import { AuthConstants } from "../constants";
import { AlertActions } from ".";
import { LoginDto } from "../../api";
export const AuthActions = {
  authenticate,
  login, logout, unsubscribe
};
function login(input: LoginDto, router: any) {
  return (dispatch: any) => {
    dispatch(request({ input }));
    AuthService.login(input).then(
      (user) => {
        dispatch(success(user));
        dispatch(AlertActions.clear());
        router.push("/");
      },
      (error) => {
        dispatch(failure(error?.response?.data));
        dispatch(AlertActions.error(error?.response?.data));
      }
    );
  };

  function request(user: any) {
    return { type: AuthConstants.LOGIN_REQUEST, user };
  }
  function success(user: any) {
    return { type: AuthConstants.LOGIN_SUCCESS, user };
  }
  function failure(error: any) {
    return { type: AuthConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  AuthService.logout();
  return (dispatch: any) => {
    dispatch(AlertActions.clear());
    dispatch(request());
  };
  function request() {
    return { type: AuthConstants.LOGOUT };
  }
}

function authenticate(token: any, router: any) {
  return (dispatch: any) => {
    dispatch(request(token));
    AuthService.authenticate(token).then(
      (user) => {
        dispatch(success(user));
        dispatch(AlertActions.clear());
        router.push("/profile");
      },
      (error) => {
        dispatch(failure(error.response?.data));
        dispatch(AlertActions.error(error.response?.data));
      }
    );
  };

  function request(user: any) {
    return { type: AuthConstants.AUTH_REQUEST, user };
  }
  function success(key: any) {
    return { type: AuthConstants.AUTH_SUCCESS, key };
  }
  function failure(error: any) {
    return { type: AuthConstants.AUTH_FAILURE, error };
  }
}

function unsubscribe(token: any, router: any) {
  return (dispatch: any) => {
    dispatch(request(token));
    AuthService.unsubscribe(token).then(
      (user) => {
        dispatch(success(user));
        dispatch(AlertActions.clear());
        router.push(`/unsubscribe`);
      },
      (error) => {
        dispatch(failure(error.response?.data));
        dispatch(AlertActions.error(error.response?.data));
      }
    );
  };

  function request(user: any) {
    return { type: AuthConstants.AUTH_REQUEST, user };
  }
  function success(key: any) {
    return { type: AuthConstants.AUTH_SUCCESS, key };
  }
  function failure(error: any) {
    return { type: AuthConstants.AUTH_FAILURE, error };
  }
}
