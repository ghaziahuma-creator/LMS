import  express  from "express";
import { registerationUser } from "../controllers/user.controller";
const usertRouter = express.Router();
usertRouter.post('/registeration',  registerationUser)

export default usertRouter;