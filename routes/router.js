import express from "express";

const router = express.Router();

import aws from "aws-sdk";

const ses = new aws.SES({ region: "us-east-1" });

router.post("/contact", (req, res) => {
  const { email, message, name } = req.body;
  sesTest("lasocialdisfunktion@gmail.com", email, message, name)
    .then((val) => {
      console.log("got this back", val);
      res.send("successfull");
    })
    .catch((err) => {
      res.send("/error" + err);
    });
});

const sesTest = (emailTo, emailFrom, message, name) => {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: "From Contact: " + name + "\n" + message,
        },
      },
      Subject: {
        Data: "Name: " + emailFrom,
      },
    },

    Source: "lasocialdisfunktion@gmail.com",
  };
  return ses.sendEmail(params).promise();
};

export default router;
