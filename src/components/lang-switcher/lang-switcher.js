import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  getCurrentLang,
  langs,
  setCurrentLang,
} from "../../helpers/locale-helper";

const LangSwitcher = () => {
  //const currentLang = useSelector((state) => state.locale.lang);
  const currentLang = getCurrentLang();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <span className={`fi fi-${currentLang.country}`}></span>
        {currentLang.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langs.map((item) => (
          ///langs --locale-helper.js den gelir
          //ve elemanlarını burada kullan
          <Dropdown.Item
            href="#/action-1"
            key={item.code}
            onClick={() => setCurrentLang(item)}
          >
            <span className={`fi fi-${item.country}`}></span> {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LangSwitcher;
