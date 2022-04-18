import { ProfileConstants } from "../constants";

const profileState = {
  loading: false,
  user: {
    userName: "",
    firstName: "",
    lastName: "",
    role: "",
  },
};

export function ProfileReducer(state = profileState, action: any) {
  switch (action.type) {
    case ProfileConstants.GETPROFILE_REQUEST:
      return {
        loading: true,
      };
    case ProfileConstants.GETPROFILE_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    case ProfileConstants.GETPROFILE_FAILURE:
      return {
        loading: false,
      };
    case ProfileConstants.PROFILE_REQUEST:
      return {
        loading: true,
      };
    case ProfileConstants.PROFILE_SUCCESS:
      return {
        loading: false,
      };
    case ProfileConstants.PROFILE_FAILURE:
      return {
        loading: false,
      };
    
    default:
      return state;
  }
}
export const profileSelector = (state: any) => state.profileState;
