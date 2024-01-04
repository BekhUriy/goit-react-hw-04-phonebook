import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label>
      Filter contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
