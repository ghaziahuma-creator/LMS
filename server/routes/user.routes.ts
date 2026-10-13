import  express  from "express";
import { activateuser, registerationUser } from "../controllers/user.controller";
const usertRouter = express.Router();
usertRouter.post('/registeration',  registerationUser)
usertRouter.post('/activate-user',  activateuser)

export default usertRouter;