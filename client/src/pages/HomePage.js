import React from 'react'

const HomePage = () => {
    return(
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Home - Doctor Appointment System</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <main>
    <section class="hero">
      <h2>Welcome to MediCare</h2>
      <p>Book appointments with trusted doctors instantly.</p>
      <a href="/appointment" class="btn">Book Now</a>
    </section>
  </main>
</body>
</html>

    );
};

export default HomePage;


