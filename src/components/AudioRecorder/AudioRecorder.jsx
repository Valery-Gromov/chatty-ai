import React, { useState } from "react";
import { API_KEY_ID, API_KEY_SECRET, LANG, FILE_PATH, URL_CREATE, RESULT_TYPE } from "../../constants/constants";
import Microphone from '../../images/microphone.svg';

const AudioRecorder = () => {
  const [onRecording, setOnRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [taskId, setTaskId] = useState(null);

  const startRecording = () => {
    setOnRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      recorder.start();
      console.log("start");
      setMediaRecorder(recorder);
    });
  };

  const stopRecording = () => {
    setOnRecording(false);
    if (mediaRecorder) {
      console.log("stop");
      mediaRecorder.stop();
      mediaRecorder.ondataavailable = (event) => {
        
        const audioBlob = new Blob([event.data], { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);

        setAudioSrc(audioUrl);
      };
    }
  };

  const playAudio = () => {
    console.log("playAudio");
    const audio = new Audio(audioSrc);
    audio.play();
  };

  const sendAudio = async () => {
    if (audioSrc) {
      const myHeaders = new Headers();
      myHeaders.append("keyId", API_KEY_ID);
      myHeaders.append("keySecret", API_KEY_SECRET);
      // myHeaders.append("Content-Type", 'application/x-www-form-urlencoded');

      const formdata = new FormData();
      formdata.append("remotePath", FILE_PATH);
      // formdata.append("remotePath", audioSrc);
      formdata.append("lang", LANG);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(URL_CREATE, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.taskId);
          setTaskId(data.taskId);
        })
        .catch((err) => console.log("error", err));
    }
  };

  const returnAudio = async () => {
    if (audioSrc) {
      const myHeadersPost = new Headers();
      myHeadersPost.append("keyId", API_KEY_ID);
      // myHeadersPost.append("Content-Type", 'application/x-www-form-urlencoded');
      myHeadersPost.append("Content-Type", "application/json");
      myHeadersPost.append("keySecret", API_KEY_SECRET);
      myHeadersPost.append("resultType", RESULT_TYPE);

      const requestOptionsPost = {
        method: "GET",
        headers: myHeadersPost,
        redirect: "follow",
      };

      fetch(`https://api.speechflow.io/asr/file/v1/query?taskId=${taskId}`, requestOptionsPost)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div className="recorder">

      <button className="button" onClick={ !onRecording ? startRecording : stopRecording}>
         {

            !onRecording ? (<img className='button__image' src={Microphone}/>) : (<div className="button__icon"></div>)

         } 
      </button>      
  
      {/* <button onClick={playAudio} disabled={!audioSrc}>Play Audio</button> */}
      <div className="button__block">
      <button className={`recorder__button ${!audioSrc && 'disabled'}`} onClick={sendAudio} disabled={!audioSrc}>
        Send Audio
      </button>

      <button className={`recorder__button ${!taskId && 'disabled'}`}  onClick={returnAudio} disabled={!taskId}>
        Return Audio
      </button>
      </div>

      {audioSrc && <audio src={audioSrc} controls />}
      
    </div>
  );
};

export default AudioRecorder;