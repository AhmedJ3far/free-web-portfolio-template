import { FiEdit, FiAlignCenter, FiSave } from "react-icons/fi";
// import { NavLink } from "react-router-dom";
import { useState } from "react";

import "../styles/header.css";

function useHeader() {
  const [mode, setMode] = useState(false);
  const [editBtn, setBtnEdit] = useState(false);
  const [logo, setLogo] = useState("Logo");

  const handelCustomize = () => {
    setMode(!mode);
    console.log(mode);
  };

  const changeValue = () => {
    setBtnEdit(!editBtn);
  };
  const saveChangeValue = () => {
    setBtnEdit(!editBtn);
    setMode(!mode);
  };

  const handleInput = (e) => {
    setLogo(e.target.value);
  };
  return {
    mode,
    setMode,
    render: (
      <div>
        <div className="header">
          <div className="logo">
            {editBtn ? (
              <input
                type="text"
                onChange={handleInput}
                className="input-logo"
                value={logo}
              />
            ) : (
              <h1>{logo}</h1>
            )}

            {mode ? null : editBtn ? (
              <span className="save-btn ">
                <FiSave onClick={saveChangeValue} />
              </span>
            ) : (
              <span className="save-btn ">
                <FiEdit onClick={changeValue} />
              </span>
            )}
          </div>
          <div className="links">
            <a to={"/"}>Home</a>
            <a to={"/skills"}>Skills</a>
            <a to={"/portfolio"}>Portfolio</a>
            <a to={"/portfolio/1"}>Contact</a>
          </div>
          <div className="buttons">
            <div className="menu">
              <FiAlignCenter />
            </div>
            <button className="btn-login">lOGIN</button>
            <button className="btn-edit" onClick={handelCustomize}>
              customize
            </button>
          </div>
        </div>
      </div>
    ),
  };
}

export default useHeader;
