const mongoose = require("mongoose")
const isValidObject = (value) => {
    if(Object.keys(value).length > 0){
        return true
    }
    return false
}

const isValid = (value) => {
    if (typeof(value) == "undefined" || value == "null") return false
    if (typeof(value) == "string" && value.trim().length == 0) return false
    return true
}

const isValidString = (value) => {
    return /^[a-zAA-Z -]+$/.test(value)
}

const isValidEmail = (value) => {
    return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value.trim())
}

const isValidObjectId = (value) => {
    return mongoose.Types.ObjectId.isValid(value)
}

module.exports = {
    isValidObject,
    isValid,
    isValidString,
    isValidEmail,
    isValidObjectId
}