import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Hotel Booking</h2>
      </div>
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Bookings</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;