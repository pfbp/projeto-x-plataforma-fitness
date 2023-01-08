import express from "express";
import records from "./records-routes.js";
import protocols from "./protocols-routes.js";
import users from "./users-routes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Database for BYOB"});
  });

  app.use(
    express.json(),
    records,
    protocols,
    users
  );
}

export default routes;