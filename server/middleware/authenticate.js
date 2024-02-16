const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
        const rotUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Errors('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;

        next();
    } catch (err) {
        res.status(401).send('Unauthorized:no token privided');
        console.log(err);
    }
}

module.exports = Authenticate;