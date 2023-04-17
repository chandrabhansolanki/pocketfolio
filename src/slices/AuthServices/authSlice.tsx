import {createSlice, Dispatch} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from './authSliceTypes';
import {appOperation} from '../../appOperation';

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
  userData: '',
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
    setAuthFailed: (state, {payload}) => {
      (state.error = payload), (state.isAuth = false);
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

export const loginAction = data => async dispatch => {
  try {
    dispatch(setLoading(true));
    if (response.error) {
      // toastAlert.showToastError(response.message);
      console.log(response.message);
    } else {
      // appOperation.setCustomerToken(response?.data?.token);
      await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.token);
      // dispatch(getProfile(true));
    }
  } catch (e) {
    // logError
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
