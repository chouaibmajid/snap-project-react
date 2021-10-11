import React, { useState, useCallback  } from "react";
import { useHistory } from "react-router-dom";
import Webcam from "react-webcam";
import {useDispatch , useSelector} from "react-redux"
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./WebcamCapture.css"
function WebcamCapture() {
    let history = useHistory();
    const dispatch = useDispatch()
// const {images}= useSelector(state => state.image)
  const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
  };
  const [img, setImg] = useState("");
  const webCamRef = React.useRef(null);
  const captureCliqued = useCallback(() => {
    const imageSrc = webCamRef.current.getScreenshot();
    dispatch({
        type:"AddImage",
        payload:imageSrc
    })
history.push("/preview")
  }, [webCamRef]);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webCamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon className="webcamCapture__buttom" onClick={captureCliqued} />
    </div>
  );
}

export default WebcamCapture;
