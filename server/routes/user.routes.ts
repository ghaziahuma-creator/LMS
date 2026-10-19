import  express  from "express";
import { activateuser, loginUser, logoutUser, registerationUser, updateAccessToken } from "../controllers/user.controller";
import { authorizedRoles, isAuthenticated } from "../middleware/auth";
const usertRouter = express.Router();
usertRouter.post('/registeration',  registerationUser)
usertRouter.post('/activate-user',  activateuser)
usertRouter.post('/login',  loginUser)
usertRouter.get('/logout', isAuthenticated, logoutUser)
usertRouter.get('/refresh', updateAccessToken)

export default usertRouter;