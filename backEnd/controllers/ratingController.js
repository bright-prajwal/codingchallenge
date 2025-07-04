const db = require('../config/db');

exports.createRating = (req, res) => {
  const { store_id, rating, comment } = req.body;
  const user_id = req.user.id;
  db.query("INSERT INTO ratings (store_id, user_id, rating, comment) VALUES (?, ?, ?, ?)",
    [store_id, user_id, rating, comment],
    err => err ? res.status(500).send("Error") : res.status(201).send("Rating submitted")
  );
};

exports.getRatingsByStore = (req, res) => {
  const store_id = req.params.id;
  db.query("SELECT * FROM ratings WHERE store_id = ?", [store_id],
    (err, result) => err ? res.status(500).send("Error") : res.json(result)
  );
};
