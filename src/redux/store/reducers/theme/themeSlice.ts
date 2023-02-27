import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../index';

export interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ToggleThemeMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const {ToggleThemeMode} = userSlice.actions;
export const GetThemeState = (state: RootState) => state.theme.mode;

export default userSlice.reducer;
