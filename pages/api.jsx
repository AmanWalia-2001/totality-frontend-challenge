// import axios from 'axios';

// const apiRequest = async () => {
//   try {
//     const response = await axios.get('https://api.example.com/data');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// // API endpoint to create a new booking
// app.post('/api/bookings', async (req, res) => {
//   try {
//     const { propertyId, name, email, phone, } = req.body;
//     const booking = new Booking({
//       propertyId,
//       name,
//       email,
//       phone,
      
//     });
//     await booking.save();
//     res.send({ message: 'Booking successful!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Error creating booking' });
//   }
// });

// //... rest of your API endpoints...

// // API endpoint to retrieve a single booking by ID
// app.get('/api/bookings/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const booking = await Booking.findById(id).exec();
//     if (!booking) {
//       res.status(404).send({ message: 'Booking not found' });
//     } else {
//       res.send(booking);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Error retrieving booking' });
//   }
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });