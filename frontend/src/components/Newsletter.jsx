import { useState } from 'react';
import axios from '../api/axiosInstance';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/newsletters', { email });
      setMsg('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setMsg('Failed to subscribe.');
    }
  };

  return (
    <section className="my-8">
      <h2 className="pb-2 mb-6 text-2xl font-bold text-center border-b">Subscribe to our Newsletter</h2>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Subscribe
        </button>
      </form>

      {msg && <p className="mt-2 text-blue-600">{msg}</p>}
    </section>
  );
}
