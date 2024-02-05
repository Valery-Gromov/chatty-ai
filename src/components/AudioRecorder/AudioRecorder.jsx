import React, { useState } from 'react';
import {
  API_KEY_ID,
  API_KEY_SECRET,
  LANG,
  FILE_PATH,
  URL_CREATE,
  RESULT_TYPE,
} from '../../constants/constants';
import { client } from '../../utills/transcriber';
import { createTranscription } from '../../utills/transcriber';
import Timer from '../Timer/Timer';
import Microphone from '../../images/microphone.svg';
import Delete from '../../images/delete-min.svg';
import Restart from '../../images/restart-min.svg';
import './AudioRecorder.scss';
import '../Animation/Animation.scss';

let mediaRecorder;
let audioChunks;
let audioSrc;

const AudioRecorder = (props) => {
  const [onRecording, setOnRecording] = useState(false);
  // const [mediaRecorder, setMediaRecorder] = useState(null);
  // const [audioSrc, setAudioSrc] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const { handleContentState } = props;

  const startRecording = async () => {
    setOnRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      // Отправляем аудиофайл на сервер
      await uploadAudioFile(audioBlob);
    };

    audioChunks = [];
    mediaRecorder.start();
  };

  const uploadAudioFile = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audioFile', audioBlob, 'recorded_audio.wav');

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      audioSrc = responseData.url;

      // Делаем что-то с полученным URL, например, выводим его в консоль
      console.log('Ссылка на аудиофайл:', audioSrc);
    } catch (error) {
      console.error('Ошибка при отправке аудиофайла:', error);
    }
  };

  const stopRecording = () => {
    setOnRecording(false);
    mediaRecorder.stop();
  };

  const playAudio = () => {
    console.log('playAudio');
    const audio = new Audio(audioSrc);
    audio.play();
  };

  const sendAudio = async () => {
    // if (audioSrc) {
    //   console.log('send audio');
    //   const myHeaders = new Headers();
    //   myHeaders.append("keyId", API_KEY_ID);
    //   myHeaders.append("keySecret", API_KEY_SECRET);
    //   // myHeaders.append("Content-Type", 'application/x-www-form-urlencoded');

    //   const formdata = new FormData();
    //   formdata.append("remotePath", FILE_PATH);
    //   // formdata.append("remotePath", audioSrc);
    //   formdata.append("lang", LANG);

    //   const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: formdata,
    //     redirect: "follow",
    //   };

    //   fetch(URL_CREATE, requestOptions)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data.taskId);
    //       setTaskId(data.taskId);
    //     })
    //     .catch((err) => console.log("error", err));
    // }
    const config = {
      audio: 'https://drive.google.com/file/d/1FMZ9ZHs7U-1f-s5okk-TDLCbvpMlnq_b/view?usp=drive_link',
    };

    createTranscription(config);
  };

  // const returnAudio = async () => {
  //   if (audioSrc) {
  //     console.log('return audio');
  //     const myHeadersPost = new Headers();
  //     myHeadersPost.append("keyId", API_KEY_ID);
  //     // myHeadersPost.append("Content-Type", 'application/x-www-form-urlencoded');
  //     myHeadersPost.append("Content-Type", "application/json");
  //     myHeadersPost.append("keySecret", API_KEY_SECRET);
  //     myHeadersPost.append("resultType", RESULT_TYPE);

  //     const requestOptionsPost = {
  //       method: "GET",
  //       headers: myHeadersPost,
  //       redirect: "follow",
  //     };

  //     fetch(`https://api.speechflow.io/asr/file/v1/query?taskId=${taskId}`, requestOptionsPost)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.code === 11000) {
  //           console.log('transcription result:');
  //           console.log(data);
  //         }
  //       })
  //       .catch((error) => console.log("error", error));
  //   }
  // };

  return (
    <div className="recorder" onClick={handleContentState}>
      {onRecording && <Timer />}

      <div className="recorder__button-block">
        {onRecording ? (
          <button
            className="button button_mini animation__button"
            onClick={() => setOnRecording(false)}>
            <img className="button__image_mini" src={Restart} />
          </button>
        ) : (
          ''
        )}

        <button
          className="button animation__button"
          onClick={!onRecording ? startRecording : stopRecording}>
          {!onRecording ? (
            <img className="button__image" src={Microphone} />
          ) : (
            <div className="button__icon"></div>
          )}
        </button>

        {onRecording ? (
          <button
            className="button button_mini animation__button"
            onClick={() => setOnRecording(false)}>
            <img className="button__image_mini" src={Delete} />
          </button>
        ) : (
          ''
        )}
      </div>

      <button onClick={playAudio} disabled={!audioSrc}>
        Play Audio
      </button>
      <div className="button__block">
        <button className={`recorder__button ${!audioSrc && 'disabled'}`} onClick={sendAudio}>
          Send Audio
        </button>

        {/* <button className={`recorder__button ${!taskId && 'disabled'}`} onClick={returnAudio}>
          Return Audio
        </button> */}
      </div>

      {audioSrc && <audio src={audioSrc} controls />}
    </div>
  );
};

export default AudioRecorder;
