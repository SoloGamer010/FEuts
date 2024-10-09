import React from 'react';

function Main() {
  return (
    <section className="main-content">
      <div className="hotel-rating-card">
        <h3>Rating Hotel</h3>
        <div className="rating">
          <span className="rating-value">4.1</span>
          <div className="stars">
            ★★★★☆
          </div>
        </div>
        <p>Berdasarkan 1234 ulasan</p>
      </div>

      <div className="form-group">
        <label htmlFor="location">Lokasi Hotel</label>
        <select id="location" className="select-location">
          <option value="">Pilih lokasi</option>
          <option value="jakarta">Jakarta</option>
          <option value="bali">Bali</option>
          <option value="yogyakarta">Yogyakarta</option>
          <option value="surabaya">Surabaya</option>
          <option value="bandung">Bandung</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="room-type">Jenis Kamar</label>
        <select id="room-type" className="select-input">
          <option value="">Pilih jenis kamar</option>
          <option value="standard">Kamar Standard</option>
          <option value="deluxe">Kamar Deluxe</option>
          <option value="suite">Suite</option>
          <option value="family">Kamar Keluarga</option>
          <option value="executive">Executive Suite</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="check-in">Tanggal check in</label>
        <input type="date" id="check-in" />
      </div>
      <div className="form-group">
        <label htmlFor="check-out">Tanggal check out</label>
        <input type="date" id="check-out" />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Tamu</label>
        <input type="number" id="guests" placeholder="Banyaknya tamu" />
      </div>
      <button className="btn-submit">Periksa Ketersediaan</button>
    </section>
  );
}

export default Main;