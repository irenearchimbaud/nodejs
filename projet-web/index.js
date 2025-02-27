const express = require('express');

const app = express()

app.use((req, res, next) => {
    console.log("Hello from the middleware")
    console.log(req.query.name)
    req.user = {name: "Jhon", age: 30};
    next();
})

app.get("/", (req, res) => {
    res.send(`Hello ${req.user.name}`);
})

app.get("/about", (req, res) => {
    res.send("This is an about page");
})

app.get("/users", (req, res) => {
    res.send("user page")
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})