const express = require("express")

const router = express.Router()

router.get("/test", (req, res) => {
    const data = req.body
    return res.status(200).send({status: "its Working", data: data})
})

module.exports = router