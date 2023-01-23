import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { $t } from "../../helpers/locale-helper";
import { setDarkMode } from "../../store/slices/theme-slice";

const DarkModeSwitcher = () => {
  //merkezı state dekı bır datayı comp de cekme durumu
  //merkezı state ten verı cekmek yanı okumak ıcın useselector
  ///veriyi degıstırmek ıcın usedıspatch kullanılır
  //(state)--buutn state ler burada
  //theme nereden geld?:reducer dan
  const darkMode = useSelector((state) => state.theme.darkMode); //state.theme.darkMode buradakı darkmode bastakı darkmode gecer
  const dispatch = useDispatch();

  return (
    <div>
      <Form.Check
        type="switch"
        id="dmSwitch"
        ///darkmode da iken light moda gecmesını göstermek ıcın once light mode aynı seklıde sonra dark mode yaz
        label={darkMode ? $t("light-mode") : $t("dark-mode")}
        checked={darkMode}
        ///buradakı degere gore sekıllenır--true false gıbı
        //checked merkeı state baglanamzsa clg da hata verır bır onchange ister
        //hata ismi--uncontrolled input ...
        onChange={() => dispatch(setDarkMode(!darkMode))}
        //veriyi degıstırmek ıcin dispatch
        //dispatche parantez ıcınde actıon yazarız.
      />
    </div>
  );
};
export default DarkModeSwitcher;
