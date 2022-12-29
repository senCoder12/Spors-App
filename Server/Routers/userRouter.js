import express from "express";
import { signup, signin, updateEventConfirmRequestState } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.patch('/:userId', updateEventConfirmRequestState);

export default userRouter;