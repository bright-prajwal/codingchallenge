// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/stores', require('./routes/storeRoutes'));
// app.use('/api/ratings', require('./routes/ratingRoutes'));

// app.listen(process.env.PORT || 5000, () => console.log('Server running'));

// app.listen(port,()=>){
//     console.log(`app is l`)
// }


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const storeRoutes = require('./routes/storeRoutes');
// const ratingRoutes = require('./routes/ratingRoutes');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/stores', storeRoutes);
// app.use('/api/ratings', ratingRoutes);

// const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // let port = process.env.port || 3000;
// // let prot=3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // This is fine IF the module exports a valid router

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/stores', require('./routes/storeRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));

app.listen(process.env.PORT || 5000, () => console.log('Server running'));
