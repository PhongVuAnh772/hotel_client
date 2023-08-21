import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  LOGGEDIN_STATUS: boolean;
  TOKEN_AUTH: string;
}


const initialState: LoginState = {
  LOGGEDIN_STATUS: true,
  TOKEN_AUTH: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login_auth: (state, action: PayloadAction<boolean>) => {
      state.LOGGEDIN_STATUS = action.payload;
    },
    logout_auth: (state, action: PayloadAction<string>) => {
      state.TOKEN_AUTH = action.payload;
    },
  },
});


export const {login_auth, logout_auth} = loginSlice.actions;
// export const selectCount = (state: RootState) => state.login.loggedIn;
export default loginSlice.reducer;
