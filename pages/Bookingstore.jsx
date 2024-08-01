import { useRouter } from 'next/router';
import "./booking.css"
import { useState, useEffect } from 'react';
const Booking = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [idProof, setIdProof] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [cart, setCart] = useState([]);
  const [bookingDate, setBookingDate] = useState(new Date().toISOString().slice(0, 10));
  const [properties, setProperties] = useState([
    { id: 1, name: 'Property 1', price: 1000 },
    { id: 2, name: 'Property 2', price: 2000 },
    { id: 3, name: 'Property 3', price: 3000 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.address) {
      return;
    }
    const newErrors = {};

    if (name.length > 15) {
      newErrors.name = 'Name should not be more than 15 characters';
    }

    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number should be 10 digits only';
    }

    if (!address) {
      newErrors.address = 'Address is required';
    }

    if (!idProof) {
      newErrors.idProof = 'ID proof is required';
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = 'Payment method is required';
    }

    if (paymentMethod === 'card' && (!cardNumber || !expirationDate || !cvv)) {
      newErrors.paymentMethod = 'Card details are required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Calculate total cost
      const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

      // Submit the form data to the server or perform any other action
      console.log('Form submitted successfully!');
      console.log('Name:', name);
      console.log('Mobile Number:', mobileNumber);
      console.log('Address:', address);
      console.log('ID Proof:', idProof);
      console.log('Payment Method:', paymentMethod);
      console.log('Card Number:', cardNumber);
      console.log('Expiration Date:', expirationDate);
      console.log('CVV:', cvv);
      console.log('Total Cost:', totalCost);
      
      // Clear cart
      setCart([]);
    }
    setSubmitted(true);
  };
  const addToCart = () => {
    const property = properties.find((property) => property.id === parseInt(id));
    if (property) {
      const existingProperty = cart.find((item) => item.id === property.id);
      if (existingProperty) {
        existingProperty.quantity += 1;
      } else {
        cart.push({ ...property, quantity: 1, bookingDate: bookingDate });
      }
      setCart([...cart]);
    }
  };
  const handleIncreaseQuantity = (id) => {
    const property = cart.find((item) => item.id === id);
    if (property) {
      property.quantity += 1;
      property.bookingDate = bookingDate;
      setCart([...cart]);
    }
  };
  const validateAddress = (address) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (!regex.test(address)) {
      return 'Address must contain a combination of alphabets and numbers';
    }
    return '';
  };
  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    const error = validateAddress(newAddress);
    setErrors({ address: error });
  };
  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
  };
  const handleDecreaseQuantity = (id) => {
    const property = cart.find((item) => item.id === id);
    if (property && property.quantity > 1) {
      property.quantity -= 1;
      property.bookingDate = bookingDate;
      setCart([...cart]);
    } else if (property && property.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const handleRemoveProperty = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const property = properties.find((property) => property.id === parseInt(id));
    if (property) {
      const existingProperty = cart.find((item) => item.id === property.id);
      if (existingProperty) {
        existingProperty.quantity += 1;
      } else {
        cart.push({ ...property, quantity: 1, bookingDate: bookingDate });
      }
      setCart([...cart]);
    }
  }, [id]);

  return (
    <div className="container">
      <div className="book" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>WELCOME TO THE BOOKING COUNTER</h1>
      </div>
      <div className="entry" style={{ textAlign: 'center', width: '97%', padding: '5px', margin: '20px 0', backgroundColor: '#f7f7f7', borderRadius: '10px' }}>
        <label style={{ width: '80%', padding: '10px', margin: '10px 2px', fontSize: '18px' }}>Property ID:</label>
        <input type="number" value={id} readOnly style={{ width: '35%', padding: '10px', margin: '10px 0', marginLeft: "23px", fontSize: '16px' }} />
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: '18px' }}>
            Booking Date:
            <input type="date" value={bookingDate} onChange={handleDateChange} style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }} />
          </label>
          <label style={{ fontSize: '18px' }}>
            Name (upto 15 characters):
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              pattern="[a-zA-Z]*"
              maxLength={15}
              style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
            />
            {errors.name && <div style={{ color: 'red', fontSize: '14px' }}>{errors.name}</div>}
          </label>
          <br />
          <label style={{ fontSize: '18px' }}>
            Mobile Number (10 digits):
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                setMobileNumber(onlyNumbers);
              }}
              maxLength={10}
              style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
            />
            {errors.mobileNumber && <div style={{ color: 'red', fontSize: '14px' }}>{errors.mobileNumber}</div>}
          </label>
          <br />
          <label style={{ fontSize: '18px' }}>
            Address:
            <textarea
              value={address}
              onChange={handleAddressChange}
              style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
            />
            {errors.address && <div style={{ color: 'red', fontSize: '14px' }}>{errors.address}</div>}
          </label>
          <br />
          <label style={{ fontSize: '18px' }}>
            ID Proof:
            <input
              type="text"
              value={idProof}
              onChange={(e) => setIdProof(e.target.value)}
              style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
            />
            {errors.idProof && <div style={{ color: 'red', fontSize: '14px' }}>{errors.idProof}</div>}
          </label>
          <br />
          <label style={{ display: 'block', margin: '20px 0', fontSize: '18px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Payment Method:</span>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '18px',
                border: '1px solid #ccc',
                width: '95%',
              }}
            >
              <option value="">Select Payment Method</option>
              <option value="card">Card</option>
              <option value="cash">Cash</option>
            </select>
            {errors.paymentMethod && (
              <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                {errors.paymentMethod}
              </div>
            )}
         </label>
          {paymentMethod === 'card' && (
            <div>
              <label style={{ fontSize: '18px' }}>
                Card Number:
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
                />
                {errors.cardNumber && <div style={{ color: 'red', fontSize: '14px' }}>{errors.cardNumber}</div>}
              </label>
              <br />
              <label style={{ fontSize: '18px' }}>
                Expiration Date:
                <input
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
                />
                {errors.expirationDate && <div style={{ color: 'red', fontSize: '14px' }}>{errors.expirationDate}</div>}
              </label>
              <br />
              <label style={{ fontSize: '18px' }}>
                CVV:
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  style={{ width: '90%', padding: '10px', margin: '10px 0', fontSize: '16px' }}
                />
                {errors.cvv && <div style={{ color: 'red', fontSize: '14px' }}>{errors.cvv}</div>}
              </label>
            </div>
          )}
          <br />
          <button type="submit" disabled={
            !name ||
            !mobileNumber ||
            !address ||
            !idProof ||
            !paymentMethod ||
            (paymentMethod === 'card' && (!cardNumber || !expirationDate || !cvv))
          } style={{ backgroundColor: '#4CAF50', color: '#ffffff', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Book Property
          </button>
        </form>
        {submitted && (
          <div style={{ textAlign: 'center', margin: '20px 0', backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Booking Successful!</h2>
            <h2 style={{ fontSize: '18px' }}>To view your updated cart please refresh your page. Thank you, have a nice day.</h2>
            <p style={{ fontSize: '16px' }}>Property ID: {id}</p>
            <p style={{ fontSize: '16px' }}>Name: {name}</p>
            <p style={{ fontSize: '16px' }}>Mobile Number: {mobileNumber}</p>
            <p style={{ fontSize: '16px' }}>Address: {address}</p>
            <p style={{ fontSize: '16px' }}>ID Proof: {idProof}</p>
            <p style={{ fontSize: '16px' }}>Payment Method: {paymentMethod}</p>
            {paymentMethod === 'card' && (
              <div>
                <p style={{ fontSize: '16px' }}>Card Number: {cardNumber}</p>
                <p style={{ fontSize: '16px' }}>Expiration Date: {expirationDate}</p>
                <p style={{ fontSize: '16px' }}>CVV: {cvv}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="cart" style={{ margin: '18px 0', backgroundColor: '#f7f7f7', borderRadius: '10px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Cart:</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Property</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Price</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Quantity</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Total</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Booking Date</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>${item.price}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>${item.price * item.quantity}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.bookingDate}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button onClick={() => handleRemoveProperty(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;