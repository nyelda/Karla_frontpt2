import React, { useRef, useState, useEffect, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { Webcam } from 'react-webcam';

const Classifier = () => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const predict = useCallback(async () => {
    if (webcamRef.current && model) {
      const image = webcamRef.current.getScreenshot();
      const tensor = tf.browser.fromPixels(image).expandDims(0);

      const prediction = await model.executeAsync(tensor);
      setPredictions(prediction);

      tensor.dispose(); // Free memory
    }
  }, [model]);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadGraphModel('../backend/dmodel/78%.h5');
      setModel(loadedModel);
    };

    loadModel();
  }, []);

  useEffect(() => {
    if (model) {
      predict();
    }
  }, [model, predict]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />
      {predictions.map((prediction, idx) => (
        <div key={idx}>{JSON.stringify(prediction)}</div>
      ))}
    </div>
  );
};

export default Classifier;
