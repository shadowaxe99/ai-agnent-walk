```javascript
const UserSessionModel = require('../models/userSessionModel');

// Load a user session
exports.loadUserSession = async (req, res) => {
    try {
        const userSession = await UserSessionModel.findById(req.params.id);
        if (!userSession) {
            return res.status(404).json({
                status: 'fail',
                message: 'No user session found with that ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                userSession
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Create a new user session
exports.createUserSession = async (req, res) => {
    try {
        const newUserSession = await UserSessionModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                userSession: newUserSession
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// Update a user session
exports.updateUserSession = async (req, res) => {
    try {
        const userSession = await UserSessionModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!userSession) {
            return res.status(404).json({
                status: 'fail',
                message: 'No user session found with that ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                userSession
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Delete a user session
exports.deleteUserSession = async (req, res) => {
    try {
        const userSession = await UserSessionModel.findByIdAndDelete(req.params.id);
        if (!userSession) {
            return res.status(404).json({
                status: 'fail',
                message: 'No user session found with that ID'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
```