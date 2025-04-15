"use client";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    airport: "no",
    tripType: "",
    airlineArrival: "",
    flightNoArrival: "",
    arrivalTime: "",
    headPassenger: "",
    numPassengers: 1,
    phone: "",
    dropoffLocation: "",
    email: "",
    airlineDeparture: "",
    flightNoDeparture: "",
    departureTime: "",
    passengerName: "",
    pickupLocation: "",
    pickupTime: "",
    nonAirportPickup: "",
    nonAirportPickupTime: "",
    nonAirportDropoff: "",
    nonAirportDropoffTime: "",
    numBags: 1,
    bagDetails: [{ size: "medium", weight: "" }],
    hasChildren: "",
    hasCarSeat: "",
    carSeatsToRent: 0,
    carType: "sedan",
    pricingType: "flat",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBagDetailChange = (index: number, key: string, value: string) => {
    const updatedBags: any = [...formData.bagDetails];
    updatedBags[index][key] = value;
    setFormData({ ...formData, bagDetails: updatedBags });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <h2>Step 1: Trip Details</h2>

        {/* <div className="radio-group">
          <label>Are you being dropped off or picked up at an airport?</label>
          <label>
            <input
              type="radio"
              name="airport"
              value="yes"
              checked={formData.airport === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="airport"
              value="no"
              checked={formData.airport === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div> */}

        <div className="airport-toggle-container">
          <p>Are you being dropped off or picked up at an airport?</p>
          <div className="airport-toggle-form">
            <input
              type="radio"
              id="airport-yes"
              name="airport"
              value="yes"
              checked={formData.airport === "yes"}
              onChange={handleChange}
            />
            <input
              type="radio"
              id="airport-no"
              name="airport"
              value="no"
              checked={formData.airport === "no"}
              onChange={handleChange}
            />
            <label
              htmlFor="airport-yes"
              className="airport-label airport-label-yes"
            >
              Yes
            </label>
            <div className="airport-toggle-pill"></div>
            <label
              htmlFor="airport-no"
              className="airport-label airport-label-no"
            >
              No
            </label>
          </div>
        </div>

        {formData.airport === "no" && (
          <>
            <div className="form-row">
              <div>
                <label>Pickup Location:</label>
                <input
                  type="text"
                  name="nonAirportPickup"
                  value={formData.nonAirportPickup}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Pickup Time:</label>
                <input
                  type="time"
                  name="nonAirportPickupTime"
                  value={formData.nonAirportPickupTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div>
                <label>Dropoff Location:</label>
                <input
                  type="text"
                  name="nonAirportDropoff"
                  value={formData.nonAirportDropoff}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Dropoff Time:</label>
                <input
                  type="time"
                  name="nonAirportDropoffTime"
                  value={formData.nonAirportDropoffTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}

        {formData.airport === "yes" && (
          <>
            <label>Select Trip Type:</label>
            <div className="trip-type-buttons">
              {["arrival", "departure", "round-trip"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, tripType: type }))
                  }
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {(formData.tripType === "arrival" ||
              formData.tripType === "round-trip") && (
              <>
                <h3>Arrival Details</h3>
                <div className="form-row">
                  <div>
                    <label>Airline:</label>
                    <input
                      type="text"
                      name="airlineArrival"
                      value={formData.airlineArrival}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Flight No:</label>
                    <input
                      type="text"
                      name="flightNoArrival"
                      value={formData.flightNoArrival}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label>Time of Arrival:</label>
                    <input
                      type="time"
                      name="arrivalTime"
                      value={formData.arrivalTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Head Passenger:</label>
                    <input
                      type="text"
                      name="headPassenger"
                      value={formData.headPassenger}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label>Dropoff Location:</label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                />
              </>
            )}

            {(formData.tripType === "departure" ||
              formData.tripType === "round-trip") && (
              <>
                <h3>Departure Details</h3>
                <div className="form-row">
                  <div>
                    <label>Airline:</label>
                    <input
                      type="text"
                      name="airlineDeparture"
                      value={formData.airlineDeparture}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Flight No:</label>
                    <input
                      type="text"
                      name="flightNoDeparture"
                      value={formData.flightNoDeparture}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label>Time of Departure:</label>
                    <input
                      type="time"
                      name="departureTime"
                      value={formData.departureTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Passenger Name:</label>
                    <input
                      type="text"
                      name="passengerName"
                      value={formData.passengerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label>Pickup Location:</label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Pickup Time:</label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label>Email for Confirmation:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </>
        )}

        <h2>Step 2: Baggage</h2>
        <label>How many bags do you have?</label>
        <select
          name="numBags"
          value={formData.numBags}
          onChange={(e) => {
            const num = parseInt(e.target.value);
            const bagDetails = Array.from(
              { length: num },
              (_, i) => formData.bagDetails[i] || { size: "medium", weight: "" }
            );
            setFormData({ ...formData, numBags: num, bagDetails });
          }}
        >
          {Array.from({ length: 25 }, (_, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {formData.bagDetails.map((bag, i) => (
          <div className="bag-section" key={i}>
            <div className="form-row">
              <div>
                <label>Bag {i + 1} Size:</label>
                <select
                  value={bag.size}
                  onChange={(e) =>
                    handleBagDetailChange(i, "size", e.target.value)
                  }
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium (Carry-on)</option>
                  <option value="large">Large</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label>Weight (lbs):</label>
                <input
                  type="number"
                  value={bag.weight}
                  onChange={(e) =>
                    handleBagDetailChange(i, "weight", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <h2>Step 3: Children</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="hasChildren"
              value="yes"
              checked={formData.hasChildren === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasChildren"
              value="no"
              checked={formData.hasChildren === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        {formData.hasChildren === "yes" && (
          <>
            <label>Do you have a car seat/booster?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="hasCarSeat"
                  value="yes"
                  checked={formData.hasCarSeat === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasCarSeat"
                  value="no"
                  checked={formData.hasCarSeat === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            {formData.hasCarSeat === "no" && (
              <>
                <p>
                  Car seat rental is <strong>$10 per child</strong> and is
                  required by law.
                </p>
                <label>How many car seats do you want to rent?</label>
                <input
                  type="number"
                  name="carSeatsToRent"
                  value={formData.carSeatsToRent}
                  onChange={handleChange}
                />
              </>
            )}
          </>
        )}

        <h2>Step 4: Car Selection</h2>
        <label>Select Vehicle Type:</label>
        <select name="carType" value={formData.carType} onChange={handleChange}>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="minivan">Minivan</option>
        </select>

        <h2>Step 5: Pricing</h2>
        <label>Choose Pricing Type:</label>
        <select
          name="pricingType"
          value={formData.pricingType}
          onChange={handleChange}
        >
          <option value="flat">Flat Rate</option>
          <option value="metered">Metered</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
