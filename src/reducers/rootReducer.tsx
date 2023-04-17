import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../slices/AuthServices/authSlice';

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
