import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownList, NumberPicker, DateTimePicker } from 'react-widgets';
import 'react-widgets/styles.css';
import '../searchbar/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    type: 'any',
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    dateAdded: null,
    postcodeArea: ''
  });

  const propertyTypes = [
    { id: 'any', name: 'Any Type' },
    { id: 'house', name: 'House' },
    { id: 'flat', name: 'Flat' }
  ];

  const handleChange = (field, value) => {
    setSearchParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Validate input values
    if (searchParams.minPrice && searchParams.maxPrice && searchParams.minPrice > searchParams.maxPrice) {
      alert('Minimum price cannot be greater than maximum price.');
      return;
    }
    if (searchParams.minBedrooms && searchParams.maxBedrooms && searchParams.minBedrooms > searchParams.maxBedrooms) {
      alert('Minimum bedrooms cannot be greater than maximum bedrooms.');
      return;
    }

    // Trigger search and navigate to results
    onSearch(searchParams);
    navigate('/properties', { state: { searchParams } });
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-grid">
          {/* Property Type */}
          <div className="search-item">
            <label>Property Type</label>
            <DropdownList
              data={propertyTypes}
              dataKey="id"
              textField="name"
              value={propertyTypes.find((type) => type.id === searchParams.type)}
              onChange={(value) => handleChange('type', value.id)}
            />
          </div>

          {/* Price Range */}
          <div className="search-item">
            <label>Price Range</label>
            <div className="price-range">
              <NumberPicker
                placeholder="Min Price"
                min={0}
                step={1000}
                value={searchParams.minPrice}
                onChange={(value) => handleChange('minPrice', value)}
              />
              <NumberPicker
                placeholder="Max Price"
                min={0}
                step={1000}
                value={searchParams.maxPrice}
                onChange={(value) => handleChange('maxPrice', value)}
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="search-item">
            <label>Bedrooms</label>
            <div className="bedroom-range">
              <NumberPicker
                placeholder="Min Beds"
                min={0}
                max={10}
                value={searchParams.minBedrooms}
                onChange={(value) => handleChange('minBedrooms', value)}
              />
              <NumberPicker
                placeholder="Max Beds"
                min={0}
                max={10}
                value={searchParams.maxBedrooms}
                onChange={(value) => handleChange('maxBedrooms', value)}
              />
            </div>
          </div>

          {/* Date Added */}
          <div className="search-item">
            <label>Date Added</label>
            <DateTimePicker
              time={false}
              value={searchParams.dateAdded}
              onChange={(value) => handleChange('dateAdded', value)}
            />
          </div>

          {/* Postcode Area */}
          <div className="search-item">
            <label>Postcode Area</label>
            <input
              type="text"
              placeholder="e.g., SW1"
              className="postcode-input"
              value={searchParams.postcodeArea}
              onChange={(e) => handleChange('postcodeArea', e.target.value)}
            />
          </div>

          {/* Search Button */}
          <div className="search-item">
            <button type="submit" className="search-button">
              <i className="bi bi-search"></i> Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
