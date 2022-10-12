import express from "express";
import records from "./recordsRoutes.js";
import protocols from "./protocolsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"});
  });

  app.use(
    express.json(),
    records,
    protocols,
    users
  );
}

export default routes;