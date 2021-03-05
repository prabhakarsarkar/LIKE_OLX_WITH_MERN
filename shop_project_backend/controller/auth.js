const userModal = require("../databaseModal/userModal")
const jwt = require("jsonwebtoken")
exports.userSignup = async (req, res) => {
    try {
        await userModal.find({ email: req.body.email })
            .exec((err, data) => {
                if (data.length >= 1) {
                    return res.send("you are all ready singup")
                }
                else {
                    const { user_name, email, password, shop_name } = req.body

                    let user_data = new userModal({
                        user_name,
                        email,
                        password,
                        password, shop_name
                    })
                    user_data.save((err, data) => {
                        if (err) {
                            return res.send(err)
                        } else {
                            return res.send({ message: "Admin created successfully" })
                        }
                    })
                }
            })
    } catch (error) {
        res.send(error)
    }
}


exports.user_login = async (req, res) => {
    try {
        await userModal.findOne({ email: req.body.email })
            .then((data) => {
                if (data === null) {
                    return res.send("you dont have a account")
                } else {
                    if (data.password === req.body.password) {
                        let token = jwt.sign({_id:data._id, email: data.email, password: data.password, shop_name: data.shop_name },
                             process.env.secretkey)
                             const {_id,user_name,email,password,shop_name}=data
                             res.cookie("token",token)
                             res.status(200).json({
                                token,
                                data  
                            })
                    }else{
                        return res.send("password is working")
                    }
                }
            })
            .catch((err)=>{
                return res.send(err,"hhh")
            })
    } catch (error) {
        return res.send(error)
    }
}

exports.findData = async (req, res) => {
    try {
        await userModal.find({})
        .then((data) => {
            res.send(data)
        })
        .catch((er) => {
            res.send(er)
        })
    } catch (error) {
        
    }
   
}