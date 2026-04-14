const mongoose = require('mongoose');

// ලිපියක තියෙන්න ඕනේ මොනවද කියලා සැකිල්ලක් හදනවා
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // මාතෘකාවක් අනිවාර්යයි
    },
    content: {
        type: String,
        required: true // විස්තරයක් අනිවාර්යයි
    },
    author: {
        type: String,
        default: 'Adheesha' // කවුරුත් ලිව්වේ නැත්නම් ඔයාගේ නම වැටෙන්න
    },
    createdAt: {
        type: Date,
        default: Date.now // ලිපිය දාන වෙලාව ඉබේම සටහන් වෙනවා
    }
});

module.exports = mongoose.model('Post', postSchema);
