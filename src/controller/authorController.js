const authorModel = require("../model/authorModel")
const validator = require("../validator/validator")

const createAuthor = async (req, res) => {
    try{
        const data = req.body
        if(!validator.isValidObject(data)){
            return res.status(400).send({status: false, message: "please enter all required fields"})
        }
        const {fname, lname, title, email, password} = data
        if (!validator.isValid(fname) || !validator.isValidString(fname)){
            return res.status(400).send({status: false, message: "please enter proper first name"})
        }
        if (!validator.isValid(lname) || !validator.isValidString(lname)){
            return res.status(400).send({status: false, message: "please enter proper last name"})
        }
        if (!validator.isValid(title) || !validator.isValidString(title)){
            return res.status(400).send({status: false, message: "please enter proper title"})
        }
        if (!validator.isValid(email) || !validator.isValidEmail(email)){
            return res.status(400).send({status: false, message: "please enter proper email"})
        }
        const isEmailInUse = await authorModel.findOne({email: email}) 
        if(isEmailInUse){
            return res.status(400).send({status: false, message: "email already registor, please enter different email"})
        }
        if (!validator.isValid(password)){
            return res.status(400).send({status: false, message: "please enter proper password"})
        }
        const author = await authorModel.create(data)
        return res.status(201).send({status: true, data: author})
    }catch(error){
        return res.status(500).send({status: false, error: error.message})
    }
}

module.exports.createAuthor = createAuthor