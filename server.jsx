// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// const propertySchema = new mongoose.Schema({
//   name: String,
//   mobileNumber: String,
//   address: String,
//   idProof: String,
// });

// const Property = mongoose.model('Property', propertySchema);

// app.post('/api/book-property', (req, res) => {
//   const { name, mobileNumber, address, idProof } = req.body;
//   const property = new Property({ name, mobileNumber, address, idProof });
//   property.save((err, property) => {
//     if (err) {
//       res.status(500).send({ message: 'Error booking property' });
//     } else {
//       res.send({ message: 'Property booked successfully' });
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });