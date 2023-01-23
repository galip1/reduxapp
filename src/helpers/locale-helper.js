import store from "../store";
import { setLang } from "../store/slices/locale-slice";

//yardımcı / hazır fonk ların tutuldugu yer
//merkezı state e ulaşma kodlarımız burada

//not:hookları kullanmadan da state e ulaşabiliriz
//import store from "../store";

///langs --comp te cagrıldıgında gelir.langswitcher da.
///buradakı degerler map ile comp de dondurulur
export const langs = [
  { title: "English", code: "en", country: "gb" },
  { title: "Türkçe", code: "tr", country: "tr" },
  { title: "Francais", code: "fr", country: "fr" },
  { title: "Deutsch", code: "de", country: "de" },
  { title: "Russia", code: "ru", country: "ru" },
];

//1-bu fonk ile o anda mevcut/aktif olna lang ı getiren fonk
export const getCurrentLang = () => {
  return store.getState().locale.lang;
};

//2-butondan bır dıl secıldıgınde merkezı state  i degıstırecek fonk
///guncelleme yapacak
export const setCurrentLang = (lang) => {
  store.dispatch(setLang(lang));
  //dispatch e bır actıon gönderılır
  //lang ı verıyoruz
};

//3-translate fonk
//dısarıdan key alacak ve o key ın karsılıgını bıze verecek
// export const $t = (key) => {
//   //once mevcut state de hangı degerın oldugunu bilmesı gerek
//   // const currentLang =store.getState().locale.lang; zaten yukarıda tanımlanmıstı
//   const currentLang = getCurrentLang();

//   //sonra currentlan den langs deki code bilgisini almak gerekır
//   //ve ilgili en,tr vs jsonları amak gerekır/cekmek gerekır
//   //require kullanılacak
//   //en yerine ${currentLang.code} koyulacak
//   const langFile = require(`../helpers/langs/${currentLang.code}.json`);
//   return langFile[key]; //langfile nın ılgılı key ını getir
//   //ve sonrasında return etmelı
//   //json yapı oldugu ıcın [key] olarak alnabılır
// };
export const $t = (key) => {
  const currentLang = getCurrentLang();
  const langFile = require(`../helpers/langs/${currentLang.code}.json`);
  return langFile[key];
};
