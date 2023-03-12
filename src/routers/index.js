import  Express  from "express";
import taskRrouter from "./index.routes.js";
const router= Express.Router();
const app =Express();
router.use(Express.json('application/json'));
router.use(Express.urlencoded({extended:false}));
router.use(taskRrouter)

router.get('/',(req,res)=>{
    res.write('welcome api');
    res.end()
});



export default  router;