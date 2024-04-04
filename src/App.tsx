import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "./App.css";
import Sidebar from './componenets/Sidebar';

interface FormData {
  isInStock: number | null;
  priceRange: number | null;
  categories: number[];
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    isInStock: null,
    priceRange: null,
    categories: []
  });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      isInStock: parseInt(value)
    }));
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      priceRange: parseFloat(value)
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const categoryValue = parseInt(value);

    let updatedCategories: number[];

    if (checked) {
      updatedCategories = [...formData.categories, categoryValue];
    } else {
      updatedCategories = formData.categories.filter(cat => cat !== categoryValue);
    }

    setFormData(prevState => ({
      ...prevState,
      categories: updatedCategories
    }));
  };
console.log(formData)
  const handleSubmit = () => {
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(console.log);
  };

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} handleCheckboxChange={handleCheckboxChange} handleRangeChange={handleRangeChange} />
      <button onClick={handleSubmit}>Fetch Data</button>
    </>
  );
}

export default App;
