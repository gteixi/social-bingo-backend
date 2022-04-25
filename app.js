import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = 4000;
/

app.get("/contact", (request, response) => {
  response.status(200).send("this is a test");
});

app.listen(port, () => {
  console.log("port runing on", port);
});
