import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ date: '', time: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${serviceName} on ${details.date}`);
    navigate('/history');
  };

  return (
    <div className="p-4 pt-20">
      <h2 className="text-xl font-bold mb-4 capitalize">{serviceName.replace('-', ' ')} Booking</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow border">
        <input type="date" required className="w-full p-3 mb-3 border rounded-xl" onChange={(e) => setDetails({...details, date: e.target.value})} />
        <input type="time" required className="w-full p-3 mb-3 border rounded-xl" onChange={(e) => setDetails({...details, time: e.target.value})} />
        <textarea placeholder="Your Address" required className="w-full p-3 mb-4 border rounded-xl" onChange={(e) => setDetails({...details, address: e.target.value})} />
        <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded-xl">Confirm Booking</button>
      </form>
    </div>
  );
};
export default BookingForm;
