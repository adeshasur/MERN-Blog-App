const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // අපි කලින් හදපු Model එක ගෙන්න ගන්නවා

// 1. අලුත් ලිපියක් දත්ත ගබඩාවට යවන පාර (CREATE)
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. දත්ත ගබඩාවේ තියෙන ඔක්කොම ලිපි බලන පාර (READ)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 3. ලිපියක් වෙනස් කරන පාර (UPDATE)
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // අලුත් කරපු දත්තයම ආපහු යවන්න කියලා කියන්නේ
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 4. ලිපියක් මකා දමන පාර (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("ලිපිය සාර්ථකව මකා දමන ලදී!");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
