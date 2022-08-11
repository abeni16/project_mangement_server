const express = require("express");
const colors = require("colors");
const cors = require("cors");
const app = express();
app.use(cors());
const connectDB = require("./config/db");
require("dotenv").config();
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");

const port = process.env.PORT || 5000;
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server is runnig on port ${process.env.PORT}`));
