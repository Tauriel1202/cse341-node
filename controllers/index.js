function displayName(req, res) {
  const name = `🌳🌊 ${req.query.id} 🌲`;
  res.send(name);
}

module.exports = displayName;
