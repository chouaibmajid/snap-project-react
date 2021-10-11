import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import "./Preview.css";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import NoteIcon from "@mui/icons-material/Note";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CropIcon from "@mui/icons-material/Crop";
import TimerIcon from "@mui/icons-material/Timer";
import SendIcon from "@mui/icons-material/Send";
import { db, storage } from "./firebase";
import { v4 as id } from "uuid";
function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { images } = useSelector((state) => state.image);
  useEffect(() => {
    if (images === "null") {
      history.replace("/");
      console.log("makayna ta image");
    }
  }, [images]);
  const closeClicked = () => {
    dispatch({
      type: "resetImage",
    });
  };
  const sendImage = () => {
    const id = uuid();
    const uploadImg = storage.ref(`posts/${id}`).putString(images, "imgUrl");
  };
  return (
    <div className="P">
      <CloseIcon onClick={closeClicked} className="P__close" />
      <div className="P__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <TimerIcon />
      </div>
      <img src={images} alt="" />
      <div onClick={sendImage} className="P__buttomSend">
        Envoyez à <SendIcon className="P__send" />
      </div>
    </div>
  );
}

export default Preview;
