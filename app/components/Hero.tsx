import Form from "./Form";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Looking to save more on your rental car?</h1>
          <p>Get the best deals on premium car rentals</p>
          <a href="#" className="btn">
            Explore Cars
          </a>
        </div>
      </section>

      {/* Booking Form  */}

      <section className="booking-form">
        <Form />
      </section>

      {/* 
      <section className="trusted-partner">
        <h2>Your Trusted Partner in Reliable Car Rental</h2>
        <p>We offer the best car rental services at affordable prices.</p>
      </section>

      <section className="services">
        <h2>Explore Our Wide Range of Rental Services</h2>
        <div className="service-container">
          <div className="service-card">
            {" "}
            <i className="fa-solid fa-car"></i> Car Rental{" "}
          </div>
          <div className="service-card">
            {" "}
            <i className="fa-solid fa-route"></i> Road Trips{" "}
          </div>
          <div className="service-card">
            {" "}
            <i className="fa-solid fa-globe"></i> Travel Assistance{" "}
          </div>
        </div>
      </section>

      <section className="fleet">
        <h2>Our Premium Car Fleet</h2>
        <div className="fleet-container">
          <div className="car-card">
            <img src="car1.jpg" alt="Luxury Car" />
            <h3>Luxury Car</h3>
            <p>$70/day</p>
          </div>
          <div className="car-card">
            <img src="car2.jpg" alt="Convertible" />
            <h3>Convertible</h3>
            <p>$90/day</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Best car rental experience!"</p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"Super easy and affordable!"</p>
            <h4>Jane Smith</h4>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Hero;
