import "../styles/hero.css";
import { useState } from "react";
import useHeader from "./Header";
import {
  FiLinkedin,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiEdit,
  FiSave,
} from "react-icons/fi";
export default function Hero() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis suscipit placeat explicabo ducimus et kos.";
  const [editNameIcon, setEditNameIcon] = useState(true);
  const [editBioIcon, setBioIcon] = useState(true);
  const [name, setName] = useState("AHMED G3FAR | DEV");
  const [bio, setBio] = useState(lorem);
  const [upload, setUpload] = useState(false);
  const [url, setUrl] = useState(
    "https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&w=1600"
  );

  const { mode, setMode } = useHeader();

  //change name of hero section
  const handleHeadState = () => {
    setEditNameIcon(!editNameIcon);
  };
  // change bio information
  const handleBioState = () => {
    setBioIcon(!editBioIcon);
  };
  //input of enter name
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  //input of bio
  const handleInputBio = (e) => {
    setBio(e.target.value);
  };
  //   const checkInputValues = () => {
  //     console.log(customizeState);
  //   };
  const showUploadedImg = () => {
    setUpload(!upload);
  };
  // change url link ofr image
  const submitImg = (e) => {
    setUrl(e.target.value);
    setUpload(!upload);
  };

  return (
    <>
      <div className="hero-section">
        <div className="img-holder">
          <img src={url} alt="" />
          <button className="upload-btn" onClick={showUploadedImg}>
            Upload
          </button>
        </div>

        {upload ? (
          <div className="upload-img">
            <input
              type="text"
              className="url-input"
              placeholder="Enter Url link for img"
              onChange={submitImg}
            />
            <input
              type="submit"
              className="save-btn"
              value="Upload"
              onClick={submitImg}
            />
          </div>
        ) : null}

        <div className="bio">
          <div className="head">
            {editNameIcon ? (
              <h1>{name}</h1>
            ) : (
              <input
                type="text"
                className="input-head"
                placeholder="Enter your name here"
                onChange={handleInputName}
                value={name}
              />
            )}

            {mode ? (
              <span className="edit-icon" onClick={handleHeadState}>
                {editNameIcon ? <FiEdit /> : <FiSave />}
              </span>
            ) : null}
          </div>
          <div className="about">
            {editBioIcon ? (
              <p>{bio}</p>
            ) : (
              <textarea
                type="text"
                className="input-bio"
                placeholder="Enter Your bio information here."
                onChange={handleInputBio}
                value={bio}
              />
            )}

            {mode ? (
              <span className="edit-icon" onClick={handleBioState}>
                {editBioIcon ? <FiEdit /> : <FiSave />}
              </span>
            ) : null}
          </div>
          <div className="social-icons">
            <button className="btn-resume" onClick={() => setMode(!mode)}>
              Resume
            </button>
            <ul>
              <a>
                <FiFacebook size={"1.5rem"} />
              </a>
              <a>
                <FiLinkedin size={"1.5rem"} />
              </a>
              <a>
                <FiTwitter size={"1.5rem"} />
              </a>
              <a>
                <FiYoutube size={"1.5rem"} />
              </a>
            </ul>
          </div>
        </div>

        <div className="text">
          <p>This Portfolio represent hard work and commitment</p>
        </div>
      </div>
    </>
  );
}
