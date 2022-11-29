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
            const booked = await travelers.save();
            res.status(201).render("index");
        }

    } catch (error) {
        res.status(400).send(error);
    }
    res.render("bookings");
})
