const express = require("express")

const authorController = require("../controller/authorController")
const blogController = require("../controller/blogController")

const router = express.Router()

router.get("/test", (req, res) => {
    const data = req.body
    return res.status(200).send({status: "its Working", data: data})
})

//author
router.post("/authors", authorController.createAuthor)

//blog
router.post("/blogs", blogController.createBlog)

module.exports = router