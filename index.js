const app = require('express')()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})

app.get("/test", (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) res.status(400).send({ message: "a, b required" })
    res.status(200).send({ total: Number(a) + Number(b) })
})