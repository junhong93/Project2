var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
   name: String,
   email: String,
});


const uploadSchema = new Schema({
    name_users: String,
    email_users: String,
    uploaded_post: [commentSchema]
});


uploadModel = mongoose.model('Upload', commentSchema);

router.get('/', function (req, res) {
    res.send('checking if it works')
})



module.exports = router;