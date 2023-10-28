```javascript
import * as tf from '@tensorflow/tfjs';

export const aiAgent = {
  model: null,
  loadModel: async function(modelPath) {
    this.model = await tf.loadLayersModel(modelPath);
  },
  predict: function(input) {
    if (!this.model) {
      console.error('Model not loaded, please load a model before making a prediction');
      return;
    }
    const tensorInput = tf.tensor(input);
    const prediction = this.model.predict(tensorInput);
    return prediction.dataSync();
  }
};
```