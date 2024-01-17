import { Router } from "express";
import registerUser from "../controllers/user.controller.js";


const router=Router();

const userRouter =()=>{
router.route("/register").post(registerUser)
}
export default userRouter
