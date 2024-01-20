import {createSlice} from '@reduxjs/toolkit';
import {themes} from '../../context/ThemeContext';

const initialState = {
  firstEntrance: true,
  appLoaded: true,
  preferenceTheme: themes.dark,
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setVisited: state => {
      state.firstEntrance = false;
    },
    setPreferenceTheme: (state, action) => {
      state.preferenceTheme = action.payload;
    },
  },
});

export const {setVisited, setPreferenceTheme} = settingSlice.actions;

export default settingSlice.reducer;
