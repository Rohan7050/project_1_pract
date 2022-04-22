const moment = require("moment")

const blogModel = require("../model/blogModel")
const authorModel = require("../model/authorModel")
const validator = require("../validator/validator")

const createBlog = async (req, res) => {
    try{
        const data = req.body
        const {title, body, authorId, category} = data
        if (!validator.isValid(title) || !validator.isValidString(title)){
            return res.status(400).send({status: false, message: "please enter valid name"})
        }
        if (!validator.isValid(body)){
            return res.status(400).send({status: false, message: "please enter valid blog body"})
        }
        if(!validator.isValidObjectId(authorId)){
            return res.status(400).send({status: false, message: "not a valid author ID"})
        }
        const isAuthorExist = await authorModel.findOne({_id: authorId})
        if(!isAuthorExist){
            return res.status(404).send({status: false, message: "author not found"})
        }
        if(category.length === 0){
            return res.status(400).send({status: false, message: "please enter at least one category"}) 
        }
        if(data.isPublished){
            data.publishedAt = moment().format()
        }
        const blog = await blogModel.create(data)
        return res.status(201).send({status: true, data: blog}) 
    }catch(error){
        return res.status(500).send({status: false, error: error.message}) 
    }
}



module.exports.createBlog = createBlog
