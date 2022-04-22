const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    body: {
        type: String, 
        required: true
    }, 
    authorId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Author"
    }, 
    tags: {
        type: [String],
        default: []
    }, 
    category: {
        type: [String], 
        required: true
    }, 
    subcategory: {
        type: [String],
        default: []
    }, 
    deletedAt: {
        type: Date
    }, 
    isDeleted: {
        type: Boolean, 
        default: false
    },
    publishedAt: {
        type: Date
    }, 
    isPublished: {
        type: Boolean, 
        default: false
    }
}, {timestamps: true})

module.exports = new mongoose.model("Blog", blogSchema)