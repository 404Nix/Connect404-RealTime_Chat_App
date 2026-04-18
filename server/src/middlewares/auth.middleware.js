import jwt from "jsonwebtoken";
import conf from "../config/conf.js";

const protectedRoute = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
        return res.status(401).json({ message: "Access token is missing!" });
    }

    try {
        const decoded = jwt.verify(accessToken, conf.JWTSECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res
                .status(401)
                .json({ message: "Access token has expired!" });
        }
        return res.status(401).json({ message: "Invalid access token!" });
    }
};

export default protectedRoute;
