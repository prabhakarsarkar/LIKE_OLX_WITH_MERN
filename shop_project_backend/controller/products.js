const productModal = require("../databaseModal/productModal");

exports.create_products = async (req, res) => {
    try {
        const { Name, Image, description, price, stock } = req.body
        const productData = new productModal({
            Name,
            Image,
            description,
            price,
            stock,
            createBy: req.user._id
        })
        await productData.save((err, data) => {
            if (err) {
                console.log("err");
                return res.send(err, "eeeeeeee")
            } else {
                return res.send({ massage: "product create successfully"})
            }
        })
    } catch (error) {
        return res.send(error)
    }

}


exports.get_all_product = async (req, res) => {
    try {
        await productModal.find({ createBy: req.user._id })
        .select(`_id Name price Image description,`)
        .populate({ path: 'createBy', select: 'user_name shop_name' })
        .then((data) => {
            return res.send(data)
        })
        .catch((err) => {
            return res.send(err)
        })
    } catch (error) {
        return res.send(error)
    }
    
}

exports.get_product_by_shop = async (req, res) => {
    try {
        await productModal.find({ createBy: req.user._id })
        .then((data) => {
            return res.send(data)
        })
        .catch((err) => {
            return res.send(err)
        })
    } catch (error) {
        return res.send(error)
    }
    
}

exports.update_products= async(req,res)=>{
    try {
        
    } catch (error) {
        return res.send(error)
    }
}

