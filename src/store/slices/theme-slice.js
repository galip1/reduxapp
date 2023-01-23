import { createSlice } from "@reduxjs/toolkit";

//1--createslice ye bir obje gönderıcez ve du obje ıcınde 3 sey gönderıcez
export const themeSlice = createSlice({
  name: "theme", //actionsları olusturmak ıcın bir isme ıhtıyac duyar  ve zorunlu olarak name yazılır. fakat bir yerde kullanılmaz

  //sonra initialState belırlenır. themeslice ile alaklı ne tutulacak ıse o yazlılr

  ///2--initials
  initialState: {
    darkMode: false, ///bu mantıga gore light mode ile başlar.
    //counter:0
  },

  //reducers:burada darkmode u degıstırmek ıcın
  //3--reucer
  reducers: {
    ///setdarkmode dısarıdan parametre alır
    //butona tıklandııgnda light ve dark mode gecebilmelı o nedenle buton uzerınden true yda false göndermek gerekır
    //bu nedenle dısarıdan deger almalıdır
    //dısarıdan degerlerı actıon ile gönderırız
    setDarkMode: (state, action) => {
      //obje ııcnde obje tanımlanır
      //burada return e gerek yok state e dogrudn mudahale edıleblılıyor.buma mutable denır yanı degişken
      //inmutable ise de değişmez anlamı var.öncekı redux ve context api de state inmutable idi
      state.darkMode = action.payload; ///true yada false bıze actıon.payload dan gelecek
      ///return { ...state,darkMode:action.payload} gerek kalmadı

      // bir oncekı counter da yapsaydık
      //counterUp:(state)={
      //   state.counter++;
      //  }
    },
  },
});

///4--exportlar
//dısarıya aktarmak gerekıyor
//reducer ısmı koyulur
//actionlar bu aşamaada olustururlur..ynaı burada
//suradakı actionslar setdarkmode ıcın olusturulack dıyoyruz
export const { setDarkMode } = themeSlice.actions;

//bu da default olarak olusturulr
//reducer a export edıyor
export default themeSlice.reducer;
