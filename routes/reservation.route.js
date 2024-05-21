const express = require("express");
const Reservation = require("../models/reservation.model.js");
const router = express.Router();

const {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservation.controller.js");

router.get("/", getReservations);

router.get("/:id", getReservation);

router.post("/", createReservation);

router.post("/:id", updateReservation);

router.delete("/:id", deleteReservation);

module.exports = router;
