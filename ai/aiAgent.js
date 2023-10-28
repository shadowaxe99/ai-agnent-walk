```javascript
const tf = require('@tensorflow/tfjs');

class AiAgent {
  constructor() {
    this.model = null;
  }

  async loadModel(modelPath) {
    this.model = await tf.loadLayersModel(modelPath);
  }

  async predict(inputData) {
    if (!this.model) {
      throw new Error('Model is not loaded');
    }

    const tensor = tf.tensor(inputData);
    const prediction = this.model.predict(tensor);
    return prediction.dataSync();
  }
}

const aiAgent = new AiAgent();

module.exports = aiAgent;
```