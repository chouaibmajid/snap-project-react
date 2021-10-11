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
import { db, storage } from "./fire";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
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
    console.log("clicked");
    const id = uuid();
    const uploadTask = storage.ref(`posts/${id}`).putString(images, "data_url");
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: "ch3ayba",
              read: false,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
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
