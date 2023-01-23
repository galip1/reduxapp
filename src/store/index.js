import { configureStore } from "@reduxjs/toolkit";
import localeSlice from "./slices/locale-slice";
import themeSlice from "./slices/theme-slice";
/// localslice ve themeslice {} içinde olmamalı cunku default export edıldıler

//configure--yapılandır
//state i configur etmek ıcın
export default configureStore({
  //slice de tanımlanan reducerler burada yazılır
  //yeni bir slice eklenırse buaraya eklenır
  reducer: {
    theme: themeSlice,
    locale: localeSlice,
  },
});
