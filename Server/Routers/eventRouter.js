import express from "express";
import { createEvent, getEvent, getEventBySearch, getEvents, getOwnerEvents, updateEvent } from "../Controllers/eventController.js";
import { auth } from "../Middleware/auth.js";

const eventRouter = express.Router();

eventRouter.post('/', auth, createEvent);
eventRouter.get('/', getEvents);
eventRouter.get('/:eventId', getEvent);
eventRouter.patch('/:id',auth, updateEvent);
eventRouter.get('/search/:searchQuery', getEventBySearch);
eventRouter.get('/ownerEvents', auth, getOwnerEvents);

export default eventRouter;