import  express  from "express";
import { activateuser, getUserInfo, loginUser, logoutUser, registerationUser, socialAuth, updateAccessToken, updateProfilePicture, updateUserInfo, updateUserPassword } from "../controllers/user.controller";
import { authorizedRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();
userRouter.post('/registeration',  registerationUser)
userRouter.post('/activate-user',  activateuser)
userRouter.post('/login',  loginUser)
userRouter.get('/logout', isAuthenticated, logoutUser)
userRouter.get('/refresh', updateAccessToken)
userRouter.get('/me', isAuthenticated, getUserInfo);
userRouter.post('/social-auth', socialAuth);
userRouter.put('/update-user-info', isAuthenticated, updateUserInfo);
userRouter.put('/update-user-password', isAuthenticated, updateUserPassword);
userRouter.put('/update-user-avatar', isAuthenticated, updateProfilePicture);

export default userRouter;