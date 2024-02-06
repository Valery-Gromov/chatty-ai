import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition/lib/SpeechRecognition';
import Timer from '../Timer/Timer';
import Microphone from '../../images/microphone.svg';
import Delete from '../../images/delete-min.svg';
import Restart from '../../images/restart-min.svg';
import './AudioRecorder.scss';
import '../Animation/Animation.scss';

const AudioRecorder = (props) => {
  const [onRecording, setOnRecording] = useState(false);
  const { editUserRequest, handleContentState, handleOriginalText } = props;
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startRecording = async () => {
    setOnRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = async () => {
    setOnRecording(false);
    SpeechRecognition.stopListening();
    await editUserRequest(transcript)
    localStorage.setItem('original-text', transcript);
    handleContentState();
    handleOriginalText();
    resetTranscript(); 
  };

  return (
    <div className="recorder">
      {onRecording && <Timer />}

      <div className="recorder__button-block">
        {/* {onRecording ? (
          <button
            className="button button_mini animation__button"
            onClick={handleRestartButton}>
            <img className="button__image_mini" src={Restart} />
          </button>
        ) : (
          ''
        )} */}

        <button
          className="button animation__button"
          onClick={!onRecording ? startRecording : stopRecording}>
          {!onRecording ? (
            <img className="button__image" src={Microphone} />
          ) : (
            <div className="button__icon"></div>
          )}
        </button>

        {/* {onRecording ? (
          <button
            className="button button_mini animation__button"
            onClick={() => setOnRecording(false)}>
            <img className="button__image_mini" src={Delete} />
          </button>
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
};

export default AudioRecorder;
