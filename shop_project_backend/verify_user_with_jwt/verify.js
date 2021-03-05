const jwt = require("jsonwebtoken")
exports.user_verify_with_jwt=async(req,res,next)=>{
    var token=req.headers.cookie
    if(token===undefined){
        return res.status(401).json({ message: "Authorization required" })
    }else{
        var token=req.headers.cookie.slice(6)
        let user = jwt.verify(token,process.env.secretkey)
        req.user=user
        
    }
    next();

}
