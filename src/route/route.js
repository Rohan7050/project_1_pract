const express = require("express")

const authorController = require("../controller/authorController")

const router = express.Router()

router.get("/test", (req, res) => {
    const data = req.body
    return res.status(200).send({status: "its Working", data: data})
})

router.post("/authors", authorController.createAuthor)

module.exports = router