import { AlertConstants } from '../constants';

const alertState = { showAlert: false, message: '' };
export function AlertReducer(state = alertState, action: any) {
  switch (action.type) {
    case AlertConstants.SUCCESS:
      return {
        status: 'success',
        message: action.message,
        showAlert: true,
      };
    case AlertConstants.ERROR:
      return {
        status: 'danger',
        message: action.message,
        showAlert: true,
      };
    case AlertConstants.CLEAR:
      return { showAlert: false };
    default:
      return state;
  }
}
export const alertSelector = (state: any) => state.brandState;
