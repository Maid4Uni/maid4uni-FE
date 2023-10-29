import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BookingForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSubmit = async () => {
    const order = {
      address,
      time,
      date,
      package: selectedPackage,
    };

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();
    navigate(`/checkout/${data.id}`); // Use navigate to redirect to the confirmation page
  };
  const generateTimeOptions = () => {
    const options = [];
    let hours = 7;
    let minutes = 0;

    while (hours < 17) {
      while (minutes < 60) {
        options.push(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
        minutes += 30;
      }
      minutes = 0;
      hours++;
    }

    return options;
  };

  const timeOptions = generateTimeOptions();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>Đăng ký dịch vụ</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: '300px', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '10px 0' }}>
          Thời gian làm việc:
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ width: '300px', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          Ngày bắt đầu:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: '300px', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          style={{ width: '300px', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="Basic">1 tháng</option>
          <option value="Standard">2 tháng</option>
          <option value="Premium">3 tháng</option>
        </select>
        <div>
          <button
            type="submit"
            style={{ width: '300px', padding: '10px', marginTop: '20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Đăng ký dịch vụ
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
