import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function AdminAddProject() {
  const [data, setData] = useState({ name: '', description: '', image: '' });
  const [msg, setMsg] = useState('');

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/projects', data);
      setMsg('Project added successfully!');
      setData({ name: '', description: '', image: '' });
    } catch (err) {
      console.error(err);
      setMsg('Failed to add project.');
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Add Project</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Project Name" value={data.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
        <textarea name="description" placeholder="Description" value={data.description} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
        <input type="text" name="image" placeholder="Image URL" value={data.image} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">Add Project</button>
        {msg && <p className="text-green-600">{msg}</p>}
      </form>
    </div>
  );
}
