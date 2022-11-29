const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const booking = require("./models/bookings");
const login = require("./models/login");

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");


app.get(
    "/", (req, res) => {
        res.render("index")
    }
);
app.get(
    "/login", (req, res) => {
        res.render("login");
    }
);
app.get(
    "/index", (req, res) => {
        res.render("index");
    }
);
app.post("booking", async(req, res) => {

})







// create a new user in our database
app.post("/login", async(req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password === cpassword) {
            const travelers = new login({
                username: req.body.password,
                email: req.body.email,
                password: password,
                confirmpassword: req.body.confirmpassword

            })
            const registerd = await travelers.save();
            res.status(201).render("index");
        } else {
            res.send("password are not matching")
        }


    } catch (error) {
        res.status(400).send(error);
    }
    res.render("login");
})



// create a new booking in our database
app.post("/bookings", async(req, res) => {
    try {



        {
            const bookings = new booking({
                location: req.body.location,
                members: req.body.members,
                arriving_date: arriving_date,
                leaving_date: req.body.leaving_date

            })
            const booked = await bookings.save();
            res.status(201).render("login");
        }

    } catch (error) {
        res.status(400).send(error);
    }
    res.render("bookings");
})




app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});