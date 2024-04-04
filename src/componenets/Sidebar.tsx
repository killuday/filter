import React from 'react';
import { Form } from 'react-bootstrap';

interface SidebarProps {
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleRadioChange, handleCheckboxChange, handleRangeChange }) => {
  return (
    <div>
      <Form>
      <div className="mb-3">
          <Form.Check inline label="In Stock" name="stockStatus" type="radio" value="1" onChange={handleRadioChange} />
          <Form.Check inline label="Out of Stock" name="stockStatus" type="radio" value="2" onChange={handleRadioChange} />
        </div>
      </Form>
      <Form>
        <div className="mb-3">
          <Form.Label>Price:</Form.Label>
          <input type="range" min="1" max="2" step="1" onChange={handleRangeChange} />
        </div>
      </Form>
      <Form>
        <div className="mb-3">
          <Form.Check inline label="All Categories" value="0" type="checkbox" onChange={handleCheckboxChange} />
          <Form.Check inline label="Clothing" value="1" type="checkbox" onChange={handleCheckboxChange} />
          <Form.Check inline label="Kitchen" value="2" type="checkbox" onChange={handleCheckboxChange} />
          <Form.Check inline label="Bathroom" value="3" type="checkbox" onChange={handleCheckboxChange} />
          <Form.Check inline label="Grocery" value="4" type="checkbox" onChange={handleCheckboxChange} />
        </div>
      </Form>
    </div>
  );
}

export default Sidebar;
