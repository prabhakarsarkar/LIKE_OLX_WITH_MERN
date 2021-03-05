const mongoose = require("mongoose");
const url = "mongodb+srv://prabhakar:sarkar@cluster0.mui6f.mongodb.net/Book-Library?retryWrites=ctrue&w=majority"
mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology:true,
   
})
.then(()=>{
    console.log('connect');
})
.catch((err)=>{
    console.log(err);
    console.log("hi");
})