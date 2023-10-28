```javascript
const UserProgressModel = require('../models/userProgressModel');

// Function to save user progress
exports.saveUserProgress = async (req, res) => {
    try {
        const { userId, progress } = req.body;

        // Check if user progress already exists
        let userProgress = await UserProgressModel.findOne({ userId });

        if (userProgress) {
            // Update existing user progress
            userProgress.progress = progress;
        } else {
            // Create new user progress
            userProgress = new UserProgressModel({ userId, progress });
        }

        // Save user progress
        await userProgress.save();

        res.status(200).json({ message: 'User progress saved successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user progress.', error });
    }
};

// Function to load user progress
exports.loadUserProgress = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find user progress
        const userProgress = await UserProgressModel.findOne({ userId });

        if (userProgress) {
            res.status(200).json({ message: 'User progress loaded successfully.', progress: userProgress.progress });
        } else {
            res.status(404).json({ message: 'No progress found for this user.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error loading user progress.', error });
    }
};
```