import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from './authSliceTypes';
import {appOperation} from '../../appOperation';
import NavigationService from '../../Routes/NavigationService';
import {HOME, LOGIN} from '../../Routes/routes';
import {Dispatch} from 'redux';

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
  userData: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.isLoading = payload;
    },
    setAuthSuccess: (state, {payload}) => {
      state.isAuth = true;
    },
    setAuthFailed: state => {
      state.isAuth = false;
    },
    setUserData: (state, {payload}) => {
      state.userData = payload;
    },
  },
});

export const {setLoading, setAuthSuccess, setUserData, setAuthFailed} =
  authSlice.actions;

export const authSelector = state => state.auth;
export default authSlice.reducer;

export const userLogin = data => async (dispatch: Dispatch<any>) => {
  // console.log(data, "chandra");

  try {
    dispatch(setLoading(true));
    const response = await appOperation.guest.login(data);

    //  console.log('Login Response', response);
    if (response?.code == 200) {
      appOperation.setCustomerToken(response?.data.token);
      //console.log('Tokennnnnnnnnnn', response?.data.token);

      // await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data.token);

      // NavigationService.reset(MAIN_AFTER_LOGIN_SCREEN);
      dispatch(getProfile());
      // fun()
    } else {
      dispatch(setAuthFailed('Login failed'));
      // toastAlert.showToastError('Login failed');
    }
  } catch (e: any) {
    // logError(e);
    // console.log(e.message, "errorrrrrr");

    dispatch(setAuthFailed(e.message));
    // Alert.alert(extractError(e.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getProfile = dispatch => async () => {
  try {
    const response: any = await appOperation.customer.get_profile();
    if (response.code == 200) {
      // console.log('Profile response..', response);
      // console.log('hello');
      NavigationService.reset(HOME);
      dispatch(setUserData(response?.data));
    }
  } catch (e) {
    // console.log(e, '12hoouibjbjkni3');
    // logError(e);
  }
};

export const logout = () => async (dispatch: Dispatch<any>) => {
  try {

    NavigationService.reset(LOGIN);
    dispatch(setAuthFailed());
  } catch (e) {
    console.log(e, '12hoouibjbjkni3');
  }
};
