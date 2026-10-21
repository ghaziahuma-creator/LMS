import  express  from "express";
import { activateuser, getUserInfo, loginUser, logoutUser, registerationUser, socialAuth, updateAccessToken, updateProfilePicture, updateUserInfo, updateUserPassword } from "../controllers/user.controller";
import { authorizedRoles, isAuthenticated } from "../middleware/auth";
const usertRouter = express.Router();
usertRouter.post('/registeration',  registerationUser)
usertRouter.post('/activate-user',  activateuser)
usertRouter.post('/login',  loginUser)
usertRouter.get('/logout', isAuthenticated, logoutUser)
usertRouter.get('/refresh', updateAccessToken)
usertRouter.get('/me', isAuthenticated, getUserInfo);
usertRouter.post('/social-auth', socialAuth);
usertRouter.put('/update-user-info', isAuthenticated, updateUserInfo);
usertRouter.put('/update-user-password', isAuthenticated, updateUserPassword);
usertRouter.put('/update-user-avatar', isAuthenticated, updateProfilePicture);

export default usertRouter;