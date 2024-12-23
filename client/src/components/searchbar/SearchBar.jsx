import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownList, NumberPicker, DateTimePicker } from 'react-widgets';
import 'react-widgets/styles.css';
import '../searchbar/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    type: null,
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

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchParams);
    navigate('/properties', { state: { searchParams } });
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-grid">
          <div className="search-item">
            <label>Property Type</label>
            <DropdownList
              data={propertyTypes}
              dataKey="id"
              textField="name"
              defaultValue={propertyTypes[0]}
              onChange={value => setSearchParams({ ...searchParams, type: value.id })}
            />
          </div>

          <div className="search-item">
            <label>Price Range</label>
            <div className="price-range">
              <NumberPicker
                placeholder="Min Price"
                min={0}
                step={1000}
                format="#,###"
                onChange={value => setSearchParams({ ...searchParams, minPrice: value })}
              />
              <NumberPicker
                placeholder="Max Price"
                min={0}
                step={1000}
                format="#,###"
                onChange={value => setSearchParams({ ...searchParams, maxPrice: value })}
              />
            </div>
          </div>

          <div className="search-item">
            <label>Bedrooms</label>
            <div className="bedroom-range">
              <NumberPicker
                placeholder="Min Beds"
                min={0}
                max={10}
                onChange={value => setSearchParams({ ...searchParams, minBedrooms: value })}
              />
              <NumberPicker
                placeholder="Max Beds"
                min={0}
                max={10}
                onChange={value => setSearchParams({ ...searchParams, maxBedrooms: value })}
              />
            </div>
          </div>

          <div className="search-item">
            <label>Date Added</label>
            <DateTimePicker
              time={false}
              onChange={value => setSearchParams({ ...searchParams, dateAdded: value })}
            />
          </div>

          <div className="search-item">
            <label>Postcode Area</label>
            <input
              type="text"
              placeholder="e.g., SW1"
              className="postcode-input"
              onChange={e => setSearchParams({ ...searchParams, postcodeArea: e.target.value })}
            />
          </div>

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

