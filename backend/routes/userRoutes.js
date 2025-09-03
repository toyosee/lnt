const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const { registerUser, loginUser, updateUserProfile, getUserProfile } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

// Open routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/profile', authenticate, getUserProfile);
router.put('/update-profile', authenticate, upload.none(), updateUserProfile); 
// router.put('/update-profile', authenticate, updateUserProfile); // Profile update without image

module.exports = router;