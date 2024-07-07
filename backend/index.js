const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./db/connect.js")



app.use(cors());
app.use(express.json());


app.post("/add", async (req, res) => {
    const { name, description, linkedin, github } = req.body;

    // store these in the db
    const user = new User({
        name: name,
        description: description,
        linkedin: linkedin,
        github: github
    })
    try {
        await user.save();
        res.status(201).json({ msg: "User added successfully" });
    } catch (error) {
        res.status(500).json({msg: "error saving to database"})
        console.log(err);
    }
})

app.get("/get", async (req, res)=>{

    try {
        const result = await User.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({msg: "error retrieving cards from database"});
        console.log(error);
    }
    
})

app.listen(3000, () => {
    console.log("app listening on port 3000")
})