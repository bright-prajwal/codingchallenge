const db = require('../config/db');

exports.getAllStores = (req, res) => {
  db.query("SELECT * FROM stores", (err, result) =>
    err ? res.status(500).send("Error") : res.json(result)
  );
};

exports.createStore = (req, res) => {
  const { name, location } = req.body;
  const ownerId = req.user.id;
  db.query("INSERT INTO stores (name, location, owner_id) VALUES (?, ?, ?)", [name, location, ownerId],
    err => err ? res.status(500).send("Error") : res.status(201).send("Store created")
  );
};
