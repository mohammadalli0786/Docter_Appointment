import React from 'react'

const Appointment = () => {
    return(
  <main>
    <section class="form-section">
      <h2>Book an Appointment</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <select required>
          <option disabled selected>Select Doctor</option>
          <option>Dr. Sarah (Cardiologist)</option>
          <option>Dr. Ahmed (Dermatologist)</option>
        </select>
        <input type="date" required />
        <button type="submit">Book Now</button>
      </form>
    </section>
  </main>

    );
};

export default Appointment;