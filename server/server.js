const Express = require("express");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
require("dotenv").config();
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


connectDB();
const PORT = process.env.PORT;


const app = Express();
app.use(Express.json());

app.get("/", (req, res) => {
    res.send("Hello World...");
});

app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server Started...`.yellow.bold);
})