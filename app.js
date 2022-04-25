import express from "express";
import cors from "cors";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 8080;
//

app.get("/", (request, response) => {
  response.status(200).send("this is a test");
});

app.listen(PORT, () => {
  console.log("port runing on", `${PORT}`);
});
