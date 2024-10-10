import React, { useState, useEffect } from 'react';

function ReservationManager() {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []);

  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing reservation
      setReservations(reservations.map(res => res.id === formData.id ? formData : res));
    } else {
      // Add new reservation
      setReservations([...reservations, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (reservation) => {
    setFormData(reservation);
  };

  const handleDelete = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  const resetForm = () => {
    setFormData({ id: null, name: '', roomType: '', checkIn: '', checkOut: '', guests: '' });
  };

  return (
    <div className="reservation-manager">
        <div className="hotel-rating-card">
            <h3>Rating Hotel</h3>
        <div className="rating">
          <span className="rating-value">4.5</span>
          <div className="stars">
            ★★★★☆
          </div>
        </div>
        <p>Berdasarkan 1234 ulasan</p>
      </div>
      <h2>Reservation Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Guest Name"
          required
        />
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Room Type</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          placeholder="Number of Guests"
          required
        />
        <button type="submit">{formData.id ? 'Update' : 'Add'} Reservation</button>
      </form>
      <div className="reservations-list">
        {reservations.map(res => (
          <div key={res.id} className="reservation-item">
            <p>{res.name} - {res.roomType}</p>
            <p>Check-in: {res.checkIn}, Check-out: {res.checkOut}</p>
            <p>Guests: {res.guests}</p>
            <button onClick={() => handleEdit(res)}>Edit</button>
            <button onClick={() => handleDelete(res.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReservationManager;