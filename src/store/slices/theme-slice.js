import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      ///return { ...state,darkMode:action.payload} gerek kalmadı
    },
  },
});

export const { setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
