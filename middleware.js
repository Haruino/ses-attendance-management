module.exports = (req, res, next) => {
  if (req.path === "/user") {
    const isLoggedIn = false

    if (!isLoggedIn) {
      res.status(401).json({ error: "Unauthorized" })
      return
    }
  }
  next()
}
