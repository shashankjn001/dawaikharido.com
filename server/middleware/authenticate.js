const jwt = require("jsonwebtoken");
const User = require("../model/userSchema")

const Authenticate = async (req, res, next) =>{
    try{
        const token = req.headers.authorization;
        console.log(token,'token')
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifytoken._id, "tokens.token":token});
        if(!rootUser) {throw new Error('User not Found')}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }
    catch(err){
        console.log(err);
        res.status(401).send('Unautherized: No token provided');
    }
}

module.exports = Authenticate;