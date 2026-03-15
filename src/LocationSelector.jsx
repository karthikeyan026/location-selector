import React, { useState } from "react";
import "./LocationSelector.css";

const LOCATION_DATA = {
  India: {
    "Tamil Nadu": [
      "Ariyalur",
      "Chengalpattu",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kallakurichi",
      "Kancheepuram",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Mayiladuthurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur",
      "Theni",
      "Thoothukudi",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tirupattur",
      "Tiruppur",
      "Tiruvallur",
      "Tiruvannamalai",
      "Tiruvarur",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
      "Kanyakumari"
    ],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    Kerala: ["Kochi", "Trivandrum", "Kozhikode"]
  },
  USA: {
    California: ["Los Angeles", "San Diego", "San Jose"],
    Texas: ["Houston", "Dallas", "Austin"]
  }
};

function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const states = selectedCountry ? Object.keys(LOCATION_DATA[selectedCountry]) : [];
  const districts = selectedCountry && selectedState
    ? LOCATION_DATA[selectedCountry][selectedState]
    : [];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedDistrict("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
  };

  return (
    <main className="container">
      <h1>Location Selector</h1>

      <label className="field">
        <span>Country</span>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select country</option>
          {Object.keys(LOCATION_DATA).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      {selectedCountry && (
        <label className="field">
          <span>State</span>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select state</option>
            {states.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </label>
      )}

      {selectedState && (
        <label className="field">
          <span>District</span>
          <select value={selectedDistrict} onChange={(event) => setSelectedDistrict(event.target.value)}>
            <option value="">Select district</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label>
      )}
    </main>
  );
}

export default LocationSelector;