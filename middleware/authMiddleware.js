// Importing dependencies
const jwt = require("jsonwebtoken");

// Middleware to protect routes and for role-based access control
exports.protect = (roles) => (req,res,next) =>{
try{
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status()(401).json({ msg: 'Unauthorized. No token provided.' });
    
    const decoded  = jwt.verify(token,process.env.JWT_SECRET);
    
    // Attach the decoded user information to the request object
    req.user = decoded;
    
    // Check if the user's role is allowed (if roles are specified)
    if(roles  && !roles.includes(req.user.role)){
        return res.status(403).json({ msg: 'Access denied.' });
    }
    
    next();

}catch (err) {
    res.status(401).json({ msg: err.message });
  }
}