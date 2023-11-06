import  jwt  from "jsonwebtoken";


export const authentication =async(req, res, next)=>{
    
    const refreshToken = req.cookies["refresh_token"]
    const accessToken = req.cookies["access_token"]
    
  
    if (!accessToken && !refreshToken) {
      return res.status(401).send('Access Denied. No token provided.');
    }
  
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
       
      if (!refreshToken) {
        return res.status(401).send('Access Denied. No refresh token provided.');
      }
  
      try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
        const accessToken = jwt.sign({ user: decoded.user }, process.env.ACCESS_JWT_SECRET, { expiresIn: '15d' });
        console.log("generating new accessToken")
        
        res.cookie("refresh_token", refreshToken, {
            // maxAge:24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none",
            secure: true,
          })
        res.cookie('access_token', accessToken, { httpOnly: true, sameSite: 'none', secure:true })
        next();

      } catch (error) {
        console.log(error.message)
        return res.status(400).send('Invalid Token.');
      }
    }
}