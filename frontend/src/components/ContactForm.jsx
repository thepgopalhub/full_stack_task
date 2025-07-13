import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contacts', formData);
      setSuccessMsg('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        city: ''
      });
    } catch (err) {
      console.error('Error submitting contact form:', err);
    }
  };

  return (
    <section className="my-8">
      <h2 className="pb-2 mb-6 text-2xl font-bold text-center border-b">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {successMsg && <p className="text-green-600">{successMsg}</p>}
      </form>
    </section>
  );
}
