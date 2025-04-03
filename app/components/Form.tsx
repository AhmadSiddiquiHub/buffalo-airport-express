"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    airport: "",
    pickup_location: "",
    pickup_time: "",
    dropoff_location: "",
    dropoff_time: "",
    airline: "",
    arrival_flight: "",
    arrival_time: "",
    head_passenger: "",
    num_passengers: 1,
    phone: "",
    dropoff_location_airport: "",
    email: "",
    num_bags: "1",
    children: "",
    car_type: "sedan",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <form id="car-rental-form" onSubmit={handleSubmit}>
      <h2>Step 1: Trip Details</h2>
      <label>Are you being dropped off or picked up at an airport?</label>
      <input
        type="radio"
        name="airport"
        value="yes"
        checked={formData.airport === "yes"}
        onChange={handleRadioChange}
      />
      Yes
      <input
        type="radio"
        name="airport"
        value="no"
        checked={formData.airport === "no"}
        onChange={handleRadioChange}
      />
      No
      <div
        id="non-airport"
        style={{ display: formData.airport === "no" ? "block" : "none" }}
      >
        <div className="form-row">
          <div>
            <label>Pickup Location:</label>
            <input
              type="text"
              name="pickup_location"
              value={formData.pickup_location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Pickup Time:</label>
            <input
              type="time"
              name="pickup_time"
              value={formData.pickup_time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Dropoff Location:</label>
            <input
              type="text"
              name="dropoff_location"
              value={formData.dropoff_location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Dropoff Time:</label>
            <input
              type="time"
              name="dropoff_time"
              value={formData.dropoff_time}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div
        id="airport-details"
        style={{ display: formData.airport === "yes" ? "block" : "none" }}
      >
        <button type="button">Arrival</button>
        <button type="button">Departure</button>
        <button type="button">Round Trip</button>

        <div className="form-row">
          <div>
            <label>Airline:</label>
            <input
              type="text"
              name="airline"
              value={formData.airline}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Flight No:</label>
            <input
              type="text"
              name="arrival_flight"
              value={formData.arrival_flight}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Time of Arrival:</label>
            <input
              type="time"
              name="arrival_time"
              value={formData.arrival_time}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Head Passenger:</label>
            <input
              type="text"
              name="head_passenger"
              value={formData.head_passenger}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Number of Passengers:</label>
            <input
              type="number"
              name="num_passengers"
              value={formData.num_passengers}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Dropoff Location:</label>
        <input
          type="text"
          name="dropoff_location_airport"
          value={formData.dropoff_location_airport}
          onChange={handleChange}
        />
        <label>Email for Confirmation:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <h2>Step 2: Baggage</h2>
      <label>How many bags do you have?</label>
      <select name="num_bags" value={formData.num_bags} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <h2>Step 3: Children</h2>
      <label>Do you have children under 7 years of age?</label>
      <input
        type="radio"
        name="children"
        value="yes"
        checked={formData.children === "yes"}
        onChange={handleRadioChange}
      />
      Yes
      <input
        type="radio"
        name="children"
        value="no"
        checked={formData.children === "no"}
        onChange={handleRadioChange}
      />
      No
      <h2>Step 4: Car Selection</h2>
      <label>Select Vehicle:</label>
      <select name="car_type" value={formData.car_type} onChange={handleChange}>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="minivan">Minivan</option>
      </select>
      <h2>Step 5: Pricing</h2>
      <label>Flat Rate:</label>
      <p>Pricing will be calculated based on selected vehicle.</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
