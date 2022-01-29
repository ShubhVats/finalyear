const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const DatasRouter = require("./routes/Datas");
const BannersRouter = require("./routes/Banners");
const ExamsRouter = require("./routes/Exams");
const ArticlesRouter = require("./routes/Articles");
const ReviewRouter = require("./routes/Reviews");
// const exerciseRouter = require("./routes/exercises");
// const userRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/Datas", DatasRouter);
app.use("/Banners", BannersRouter);
app.use("/Exams", ExamsRouter);
app.use("/Articles", ArticlesRouter);
app.use("/Reviews", ReviewRouter);
// app.use("/exercises", exerciseRouter);
// app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
