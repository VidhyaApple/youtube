import React, { useEffect, useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Chennai", "Kerala"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: [],
  },
  {
    name: "Australia",
    value: "AU",
    cities: ["Perth", "Sydney"],
  },
  {
    name: "Malaysia",
    value: "ML",
  },
];

const Demo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);

  return (
    <div className="flex">
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCities(countries[e.target.value]?.cities);
        }}
      >
        <option value="">select</option>
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country.name}
          </option>
        ))}
      </select>
      {selectedCountry && selectedCities && (
        <select onChange={(e) => console.log("🚀 selected city:", e.target.value)}>
          {selectedCities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Demo;
