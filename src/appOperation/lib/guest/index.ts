import {AppOperation} from '../..';
// import {
//   ForgotPasswordProps,
//   LoginProps,
//   UpdatePasswordProps,
//   // RegisterProps,
// } from '../../../slices/loginServices/authSliceTypes';
import {GUEST_TYPE} from '../../types';

export default (appOperation: AppOperation) => ({
  // register: (data: RegisterProps) => appOperation.post("register", data, GUEST_TYPE),
  login: (data) => appOperation.post('login', data, GUEST_TYPE),

  // forgot_password: (data: ForgotPasswordProps) =>
  //   appOperation.post('forgot-password', data, GUEST_TYPE),

  // update_password: (data: UpdatePasswordProps) =>
  //   appOperation.post('update-password', data, GUEST_TYPE),

  // change_password: (data: UpdatePasswordProps) =>
  //   appOperation.post('change-password', data, CUSTOMER_TYPE),

  // registration: (data: RegisterProps) =>
  //   appOperation.post('registration', data, GUEST_TYPE),
});
