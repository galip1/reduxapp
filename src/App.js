import React from "react";
import { Provider, useSelector } from "react-redux";
import DarkModeSwitcher from "./components/dark-mode/dark-mode-switcher";
import LangSwitcher from "./components/lang-switcher/lang-switcher";
import store from "./store";
import "./App.css";
import { $t } from "./helpers/locale-helper";

const App = () => {
  //return ıcıne provider olsaydı once const ksımları render olacagı ıcın
  //merkezı state ulasama. cunku constlar once tanımlandı
  //react-18.session redux 2101 ders-dk:1.45 tekrar izle

  //prvider i index.js e aldık

  const darkMode = useSelector((state) => state.theme.darkMode);

  ///useselector ile dıl degıstıgınde tup app rerender etmek ıcın
  //normlde currentlang e ıhtıyac yoktu

  const currentLang = useSelector((state) => state.locale.lang);
  return (
    ///dark class app.css de
    <div className={darkMode ? "dark" : ""}>
      <DarkModeSwitcher />
      <LangSwitcher />
      <h1>{$t("hello-world")}</h1>{" "}
    </div>
  );
};

export default App;
