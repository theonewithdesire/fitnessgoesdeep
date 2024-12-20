import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FormPage({ setResults }) {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: '',
  });

  const [errors, setErrors] = useState({
    age: '',
    weight: '',
    height: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validate inputs and set error messages
    let error = '';
    if (name === 'age' && (value < 10 || value > 100)) {
      error = 'Age must be between 10 and 100.';
    } else if (name === 'height' && (value < 100 || value > 300)) {
      error = 'Height must be between 100 and 300 cm.';
    } else if (name === 'weight' && (value < 10 || value > 300)) {
      error = 'Weight must be between 10 and 300 kg.';
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);

    // Ensure no errors before submission
    if (errors.age || errors.weight || errors.height) {
      alert('Please correct the errors before submitting.');
      return;
    }

    if (
      !formData.age ||
      !formData.height ||
      !formData.weight ||
      !formData.gender ||
      !formData.activity
    ) {
      alert('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:6003/calculate', {
        ...formData,
        goal: 'lose', // You can change this to "gain" based on user preference
      });

      const { maintenanceCalories, resultCalories } = response.data;
      setResults({ maintenanceCalories, resultCalories });
      navigate('/results');
    } catch (error) {
      console.error('Error:', error);
      alert('Error calculating calories. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-dark-blue shadow-lg rounded-lg p-8 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">WeightsUp&Down</h1>
        <p className="text-sm text-gray-400 text-center mb-4">
          Your personalized calorie calculator
        </p>

        <label className="block">
          <span className="text-sm">Gender:</span>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-navy border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">Age:</span>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 bg-navy border ${
              errors.age ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring ${
              errors.age ? 'focus:ring-red-500' : 'focus:border-blue-300'
            }`}
            placeholder="Enter your age"
            step="1" // Disable number input adjustment
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </label>

        <label className="block">
          <span className="text-sm">Weight (kg):</span>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 bg-navy border ${
              errors.weight ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring ${
              errors.weight ? 'focus:ring-red-500' : 'focus:border-blue-300'
            }`}
            placeholder="Enter your weight"
            step="1" // Disable number input adjustment
          />
          {errors.weight && (
            <p className="text-red-500 text-sm">{errors.weight}</p>
          )}
        </label>

        <label className="block">
          <span className="text-sm">Height (cm):</span>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className={`mt-1 block w-full p-2 bg-navy border ${
              errors.height ? 'border-red-500' : 'border-gray-600'
            } rounded-md focus:outline-none focus:ring ${
              errors.height ? 'focus:ring-red-500' : 'focus:border-blue-300'
            }`}
            placeholder="Enter your height"
            step="1" // Disable number input adjustment
          />
          {errors.height && (
            <p className="text-red-500 text-sm">{errors.height}</p>
          )}
        </label>

        <label className="block">
          <span className="text-sm">Activity Level:</span>
          <select
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="mt-1 block w-full p-2 bg-navy border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select your activity level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="active">Very Active</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Calculate Calories
        </button>
      </form>
    </div>
  );
}

export default FormPage;