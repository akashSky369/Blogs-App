const mongoose = require('mongoose');

const schema = mongoose.Schema;

const talk = new schema({

    name: {
        type: String
    },
    title: {
        type: String
    },

    body: {
        type: String
    }


})


const blog = mongoose.model("blog", talk)

module.exports = blog