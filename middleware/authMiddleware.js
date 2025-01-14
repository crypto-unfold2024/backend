function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === `Bearer ${process.env.ADMIN_TOKEN}`) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}

module.exports = authMiddleware;
