import express from "express";
import { createEvent, getEventBySearch, getEvents, updateEvent } from "../Controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.post('/', createEvent);
eventRouter.get('/', getEvents);
eventRouter.patch('/:id', updateEvent);
eventRouter.get('/search', getEventBySearch);

export default eventRouter;