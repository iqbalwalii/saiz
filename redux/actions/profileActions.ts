import { AlertActions } from "./alertActions";
import { ProfileConstants } from "../constants";
import { AuthService } from "../../services/authService";
import { ChangeProfileDto } from "../../api";
export const ProfileActions = {
  updateProfile,
  getProfile,
};
function updateProfile(input: ChangeProfileDto, access_token: string, router: any) {
  return (dispatch: any) => {
    dispatch(request());
    AuthService.updateProfile(input, access_token).then(
      () => {
        dispatch(success());
        router.push('/')
        dispatch(AlertActions.clear());
      },
      (error) => {
        dispatch(failure(error.response?.data));
        dispatch(AlertActions.error(error.response?.data));
      }
    );
  };

  function request() {
    return { type: ProfileConstants.PROFILE_REQUEST };
  }
  function success() {
    return { type: ProfileConstants.PROFILE_SUCCESS };
  }
  function failure(error: any) {
    return { type: ProfileConstants.PROFILE_FAILURE, error };
  }
}

function getProfile(access_token: string) {
  return (dispatch: any) => {
    dispatch(request());
    AuthService.getProfile(access_token).then(
      (user) => {
        dispatch(success(user));
        dispatch(AlertActions.clear());
      },
      (error) => {
        dispatch(failure(error.response?.data));
        dispatch(AlertActions.error(error.response?.data));
      }
    );
  };

  function request() {
    return { type: ProfileConstants.GETPROFILE_REQUEST };
  }
  function success(user: any) {
    return { type: ProfileConstants.GETPROFILE_SUCCESS, user };
  }
  function failure(error: any) {
    return { type: ProfileConstants.GETPROFILE_FAILURE, error };
  }
}
