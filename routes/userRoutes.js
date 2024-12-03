// Importing dependencies
const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Admin-only route
router.get('/admin',protect(['Admin']), (req,res)=>{
    res.status(200).json({ msg: 'Welcome Admin!' });
})

// Moderator-only route
router.get('/moderator',protect(['Moderator']),(req,res)=>{
    res.status(200).json({msg :  'Welcome Moderator!'})
})

// Route accessible to Users, Admins, and Moderators
router.get('/user', protect(['User', 'Admin', 'Moderator']), (req, res)=>{
    res.status(200).json({ msg: 'Welcome User!' });
})


module.exports = router;
