module.exports = (req, res, next) => {
  if (req.originalUrl.includes('favicon.ico')) return res.status(204).end()
  return next()
}
