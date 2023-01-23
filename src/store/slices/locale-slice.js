import { createSlice } from "@reduxjs/toolkit";
///import { langs } from "../../helpers/locale-helper";
//lang:langs[0] a hata verdı

export const localeSlice = createSlice({
  //1.kısım
  name: "locale",
  //2.kısım
  initialState: {
    lang: { title: "English", code: "en", country: "gb" },
    currency: "usd",
  },

  //3.kısım
  reducers: {
    //lang ve reducer için ayrı ayrı olmalı.
    //lang için.. mesela acılır menu olacak oradan ıstenılen dıl secılecek ve currency de secebılır
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = localeSlice.actions;
export default localeSlice.reducer;

//localeslice dan sıstemın haberı yok ındex te yarız.
