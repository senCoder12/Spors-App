import express from "express";
import { signup, signin, updateEventConfirmRequestState } from "../Controllers/userController.js";
import { auth } from "../Middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.patch('/update', auth, updateEventConfirmRequestState);

export default userRouter;