const db = require('../config/db');

exports.getAllUsers = (req, res) => {
  db.query("SELECT id, name, email, role FROM users", (err, result) =>
    err ? res.status(500).send("Error") : res.json(result)
  );
};

exports.getCurrentUser = (req, res) => {
  const userId = req.user.id;
  db.query("SELECT id, name, email, role FROM users WHERE id = ?", [userId], (err, result) =>
    err ? res.status(500).send("Error") : res.json(result[0])
  );
};
